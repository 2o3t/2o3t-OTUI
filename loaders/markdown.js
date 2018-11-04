const MarkdownIt = require('markdown-it');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const Colors = require('colors');

module.exports = function(source) {
    this.cacheable && this.cacheable();

    const mdParser = new MarkdownIt();

    const result = mdParser.render(source);

    const $ = cheerio.load(result, {
        decodeEntities: false,
        lowerCaseAttributeNames: false,
        lowerCaseTags: false,
    });

    const config = {};
    config.LABEL = $('h1').first().text();
    config.DESC = $('h1').next('p').first()
        .text()
        .replace('\n', '');

    const $h2 = $('h2');
    config.COMPONENTS = $h2.toArray().reduce((obj, element, index) => {
        const $el = $h2.eq(index);
        const name = $el.text();
        const key = $el.next('blockquote').children('p').text();
        const desc = $el.next('blockquote').next('p').html();
        obj[key] = {
            LABEL: name,
            DESC: desc,
        };
        return obj;
    }, {});

    config.COMPONENTS.__markdown = true;

    // api
    const $h3 = $('h3');
    if ($h3.length) {
        const table = $h3.next('table').html();
        config._API_ = `<div class="markdown ot-api-container"><table>${table}</table></div>`;
    }

    const apiUrl = $.html().toString().match(/\<\!--\s*@api:(.*?)\s*--\>/ig);
    if (apiUrl) {
        const ROOT = process.cwd();
        const htmls = apiUrl.map(api => {
            return api.replace(/\<\!--\s*@api:\s*(.*?)\s*--\>/ig, '$1');
        }).map(url => {
            // 特殊处理
            // @api: OtButton.vue/OtButtonAPI.md
            let mdPath = path.resolve(ROOT, path.join('libs', url));
            if (!fs.existsSync(mdPath)) {
                mdPath = path.resolve(ROOT, path.join('libs', 'components', url));
            }
            if (fs.existsSync(mdPath)) {
                console.log(Colors.grey(`\n\n# Read API Markdown! <${mdPath}>\n\n`));
                const mdText = fs.readFileSync(mdPath);
                const mdParser = new MarkdownIt();
                const result = mdParser.render(mdText.toString());
                const $ = cheerio.load(result, {
                    decodeEntities: false,
                    lowerCaseAttributeNames: false,
                    lowerCaseTags: false,
                });
                $('h1').remove();
                $('h2').each((index, h) => {
                    h.tagName = 'H3';
                });
                $('h3').each((index, h) => {
                    h.tagName = 'H4';
                });
                $('h4').each((index, h) => {
                    h.tagName = 'H5';
                });
                $('h5').each((index, h) => {
                    h.tagName = 'H6';
                });
                const html = $('body').html();
                return `<div class="markdown ot-api-container">${html}</div>`;
            }
            console.error(Colors.yellow(`\n\n[!!!] Dont Find File <${mdPath}>!!\n\n`));
            return '';
        });
        config._API_ = htmls.join('\n');
    }

    return 'export default ' + JSON.stringify(config);
};

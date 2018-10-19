const MarkdownIt = require('markdown-it');
const cheerio = require('cheerio');

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

    return 'export default ' + JSON.stringify(config);
};

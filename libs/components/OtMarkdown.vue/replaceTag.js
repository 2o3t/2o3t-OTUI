export default function($) {
    // 替换 ot-code
    $('pre>code').each((index, h) => {
        const preEl = h.parent;
        const html = $(h).html();
        // ="language-js"
        const codeClass = $(h).attr('class');
        if (codeClass) {
            const attrs = codeClass.split('-');
            const language = attrs[attrs.length - 1];
            preEl.attribs.lang = language;
        }
        $(preEl).html(html);
        preEl.tagName = 'ot-code';
        preEl.attribs.background = true;
        preEl.attribs.round = true;
    });

    $('p>code').each((index, h) => {
        h.tagName = 'ot-tag';
        h.attribs.round = true;
    });

    $('table').each((index, h) => {
        h.tagName = 'ot-table-ui';
        h.attribs.border = true;
    });

    $('a').each((index, h) => {
        h.tagName = 'ot-link';
    });

    return $;
}

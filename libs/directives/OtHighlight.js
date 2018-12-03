function otHighlight(el, { value }) {
    if (!value) return;
    const hljs = value;

    const blocks = el.querySelectorAll('pre code');
    let len = 1;
    if (blocks) {
        blocks.forEach(block => {
            if (hljs.__value__) {
                block.innerText = hljs.__value__;
            }
            hljs.highlightBlock(block);
        });
        blocks.forEach(block => {
            const html = block.innerHTML;
            const reg = html.replace(/^\s+|\s+$/g, '').match(/\n/g);
            if (reg) {
                len += reg.length;
            }
        });
    }


    if (len) {
        const blocks = el.querySelectorAll('pre');
        if (blocks) {
            blocks.forEach(block => {
                const oldEle = block.querySelectorAll('.code-block');
                oldEle.forEach(item => {
                    block.removeChild(item);
                });

                const ele = document.createElement('ol');
                ele.className = 'code-block';
                ele.setAttribute('ot', '');
                let html = '';
                for (let i = 0; i < len; i++) {
                    html += '<li ot class="code-line">' + (i + 1) + '</li>';
                }
                ele.innerHTML = html;
                block.appendChild(ele);
            });
        }
    }
}

export default function(Vue) {
    if (Vue.prototype.$isServer) return;
    return otHighlight;
}

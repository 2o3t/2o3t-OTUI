const fs = require('fs');
const path = require('path');

const datas = [ "@import './colors';", "@import './mixins.scss';", '$--ot-prefix-name: "ot" !default;' ];

const THEMES = [ 'light', 'dark', 'grey', 'default', 'primary', 'success', 'warning', 'danger', 'info' ];
const SHUXING = [ 'font', 'background', 'border' ];
const STATUS = [ 'normal', 'hover', 'active', 'focus', 'selected', 'disabled' ];

STATUS.forEach(status => {
    datas.push('\n');
    datas.push(`// ========  ${status}  ========`);
    THEMES.forEach(theme => {
        datas.push('\n');
        datas.push(`// ${theme}`);
        SHUXING.forEach((shuxing, index) => {
            datas.push(`// ${shuxing}`);
            if (index === 0) {
                const text1 = `@include otMixinColor($--ot-prefix-name, "${theme}", "color", $--ot-color-${theme}-${shuxing}-${status}, "${shuxing}", "${status}", null);`;
                datas.push(text1);
            } else if (index === 1) {
                const text2 = `@include otMixinColor($--ot-prefix-name, "${theme}", "background-color", $--ot-color-${theme}-${shuxing}-${status}, "${shuxing}", "${status}", null);`;
                datas.push(text2);
            } else {
                datas.push('@each $var in null, -left, -right, -top ,-bottom {');
                const text3 = `@include otMixinColor($--ot-prefix-name, "${theme}", "border#{$var}-color", $--ot-color-${theme}-${shuxing}-${status}, "${shuxing}#{$var}", "${status}", null);`;
                datas.push(text3);
                datas.push('}');
            }
        });
    });
});


fs.writeFileSync(path.resolve(__dirname, './newMainOutput.scss'), datas.join('\n'));

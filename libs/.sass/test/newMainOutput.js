const fs = require('fs');
const path = require('path');

const datas = [ '$--ot-prefix-name: "ot" !default;' ];

const THEMES = [ 'light', 'dark', 'grey', 'default', 'primary', 'success', 'warning', 'danger', 'info' ];
const SHUXING = [ 'font', 'background', 'border' ];
const STATUS = [ null, 'normal', 'hover', 'active', 'focus', 'selected', 'disabled' ];

STATUS.forEach(status => {
    datas.push('\n');
    datas.push(`// ========  ${status}  ========`);
    THEMES.forEach(theme => {
        datas.push('\n');
        datas.push(`// ${theme}`);
        SHUXING.forEach((shuxing, index) => {
            datas.push(`// ${shuxing}`);
            const color = status ? `$--ot-color-${theme}-${shuxing}-${status}` : `$--ot-color-${theme}-${shuxing}`;
            if (index === 0) {
                let text;
                if (status !== null) {
                    text = `@include otMixinColor($--ot-prefix-name, "${theme}", "color", ${color}, "${shuxing}", "${status}", null);`;
                } else {
                    text = `@include otMixinColor($--ot-prefix-name, "${theme}", "color", ${color}, "${shuxing}", null, null);`;
                }
                datas.push(text);
            } else if (index === 1) {
                let text;
                if (status !== null) {
                    text = `@include otMixinColor($--ot-prefix-name, "${theme}", "background-color", ${color}, "${shuxing}", "${status}", null);`;
                } else {
                    text = `@include otMixinColor($--ot-prefix-name, "${theme}", "background-color", ${color}, "${shuxing}", null, null);`;
                }
                datas.push(text);
            } else {
                datas.push('@each $var in null, -left, -right, -top ,-bottom {');
                let text;
                if (status !== null) {
                    text = `@include otMixinColor($--ot-prefix-name, "${theme}", "border#{$var}-color", ${color}, "${shuxing}#{$var}", "${status}", null);`;
                } else {
                    text = `@include otMixinColor($--ot-prefix-name, "${theme}", "border#{$var}-color", ${color}, "${shuxing}#{$var}", null, null);`;
                }
                datas.push(text);
                datas.push('}');
            }
        });
    });
});


fs.writeFileSync(path.resolve(__dirname, './newMainOutput.scss'), datas.join('\n'));

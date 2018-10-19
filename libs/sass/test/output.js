const fs = require('fs');
const path = require('path');

const datas = [];
const THEMES = [ 'light', 'dark', 'grey', 'default', 'primary', 'success', 'warning', 'danger', 'info' ];
const SHUXING = [ 'font', 'background', 'border' ];
const STATUS = [ 'normal', 'hover', 'active', 'focus', 'selected', 'disabled' ];

const orgText = fs.readFileSync(path.resolve(__dirname, '../main.scss')).toString();
const arrayLine = orgText.split('\n');

const MAP = {};

THEMES.forEach(theme => {
    datas.push(' ');
    datas.push(`// ====== ${theme} ====== `);
    SHUXING.forEach(sx => {
        datas.push(`// ${sx}`);
        STATUS.forEach(stat => {
            let color = 'UNKNOW';
            let key = '';
            const reg = new RegExp(`@include\\s+${stat}Color\\s*\\([\\$-\\w]+\\W+${theme}\\W+[\\w-#{$}]+\\W+(\\$--color-[\\w-]+)\\W+${sx}\\W+`, 'ig');
            // const reg = new RegExp(`@include\\s+${stat}Color\\s*\\([\\$-\\w]+\\W+${theme}\\W+[\\w-]+\\W+(\\$--color-[\\w-]+)\\W+${sx}\\W+`, 'ig');
            arrayLine.forEach(line => {
                const result = reg.exec(line);
                if (result) {
                    color = result[1];
                    console.log(color);
                    key = line;
                }
            });

            const newColor = `$--ot-color-${theme}-${sx}-${stat}`;
            MAP[key] = {
                color, newColor,
            };
            datas.push(`${newColor}: ${color};`);
        });
    });
});

fs.writeFileSync(path.resolve(__dirname, './outputColors.scss'), datas.join('\n'));

const newArrayLine = arrayLine.map(line => {
    const result = MAP[line];
    if (result) {
        const color = result.color;
        console.log(color);
        const newColor = result.newColor;
        console.log(newColor);
        return line.replace(color, newColor);
    }
    return line;
});

fs.writeFileSync(path.resolve(__dirname, './outputMain.scss'), newArrayLine.join('\n'));

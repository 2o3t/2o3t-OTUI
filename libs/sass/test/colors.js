const fs = require('fs');
const path = require('path');

const PREFIX = '$--color';
const SUFFIX = '!default;';

const datas = [ '// Mixin Color Libs' ];

const COLORS = {
    default: '#314659',
    white: '#FFFFFF',
    black: '#000000',
    primary: '#207FF6',
    success: '#37C385',
    warning: '#FFCC00',
    danger: '#FF5252',
    info: '#36AEFB',
};
const THEMES = [ 'default', 'grey', 'primary', 'success', 'warning', 'danger', 'info' ];

Object.keys(COLORS).forEach(key => {
    const color = COLORS[key];
    datas.push(`// ${key}`);
    datas.push(`${PREFIX}-${key}: ${color} ${SUFFIX}`);
});
THEMES.forEach(theme => {
    datas.push('\n');
    datas.push(`// ============== ${theme} ==============`);
    const _white = COLORS.white;
    const _black = COLORS.black;
    const _name = theme === 'grey' ? 'black' : theme;

    if (theme !== 'grey') {
        datas.push('// light');
        for (let i = 1; i < 100; i++) {
            const mixColor = mix(_white, COLORS[_name], i * 0.01);
            datas.push(`${PREFIX}-${theme}-light-${i}: mix(${PREFIX}-white, ${PREFIX}-${_name}, ${i}%) ${SUFFIX} /* ${mixColor} */`);
        }
        datas.push('// dark');
        for (let i = 1; i < 100; i++) {
            const mixColor = mix(_black, COLORS[_name], i * 0.01);
            datas.push(`${PREFIX}-${theme}-dark-${i}: mix(${PREFIX}-black, ${PREFIX}-${_name}, ${i}%) ${SUFFIX} /* ${mixColor} */`);
        }
    } else {
        datas.push('// 中性色');
        for (let i = 1; i < 100; i++) {
            const mixColor = mix(_white, COLORS[_name], i * 0.01);
            datas.push(`${PREFIX}-default-${theme}-${i}: mix(${PREFIX}-white, ${PREFIX}-${_name}, ${i}%) ${SUFFIX} /* ${mixColor} */`);
        }
    }
});


fs.writeFileSync(path.resolve(__dirname, './colorsOutput.scss'), datas.join('\n'));


function mix(color1, color2, pre) {
    if (!color1 || !/^[#]?[0-9A-F]{6}$/ig.test(color1)) {
        console.warn('color is error!! ', color1);
        return null;
    }
    if (!color2 || !/^[#]?[0-9A-F]{6}$/ig.test(color2)) {
        console.warn('color is error!! ', color2);
        return null;
    }
    if (color1.length === 7) {
        color1 = color1.substr(1);
    }
    if (color2.length === 7) {
        color2 = color2.substr(1);
    }
    const result = [];
    for (let i = 0; i < 6; i += 2) {
        const v1 = Number.parseInt(color1[i] + color1[i + 1], 16);
        const v2 = Number.parseInt(color2[i] + color2[i + 1], 16);
        let c = Math.round(v1 * pre + v2 * (1 - pre)).toString(16);
        let len = c.length;
        while (2 - len) {
            c = '0' + c;
            len = c.length;
        }
        result.push(c);
    }
    return `#${result.join('')}`;
}

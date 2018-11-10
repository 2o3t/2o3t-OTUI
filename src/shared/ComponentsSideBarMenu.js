import modules from '../components';

const KEY_MAP = {
    1: 'Introduction',
    2: 'Basic',
    3: 'General',
    4: 'Navigation',
    5: 'Form',
    6: 'Data Display',
    7: 'Feedback',
};

const others = [];
const sides = modules.reduce((obj, { key, name/* , router */ }) => {
    // 1-2-3-name
    // 1-2-name
    const arrs = key.split('-');
    const label = KEY_MAP[arrs[0]];
    if (label) {
        if (!obj[label]) {
            obj[label] = [];
        }
        obj[label].push({
            name, router: { name },
        });
    } else {
        others.push({
            name, router: { name },
        });
    }
    return obj;
}, {});

const result = {
    DEFAULT: [{
        name: 'Uncategorized',
        router: '/Uncategorized',
    }],
    ...sides,
};

if (others.length) {
    result.OTHERS = others;
}

export default result;

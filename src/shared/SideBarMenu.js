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
const sides = modules.reduce((obj, { key, name, router }) => {
    // 1-2-3-name
    // 1-2-name
    const arrs = key.split('-');
    const label = KEY_MAP[arrs[0]];
    if (label) {
        if (!obj[label]) {
            obj[label] = [];
        }
        obj[label].push({
            name, router,
        });
    } else {
        others.push({
            name, router,
        });
    }
    return obj;
}, {});

export default {
    DEFAULT: [{
        name: 'UI',
        router: '/UI',
    }],
    ...sides,
    OTHERS: others,
};

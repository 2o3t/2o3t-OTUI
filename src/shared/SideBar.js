const files = require.context('../components/', true, /Index.js/i);
const modules = {};

files.keys().forEach(key => {
    let file = files(key);
    if (file.__esModule === true) {
        if (file.default) {
            file = file.default;
        }
    }
    modules[key.replace(/\/index(\.\/|\.js)/ig, '').replace(/^\.\//ig, '')] = file;
});

const sides = Object.keys(modules).map(key => {
    return {
        name: key,
        router: `/${key}`,
    }
})

export default {
    header: [],
    menu: [
        {
            name: "UI",
            router: "/UI",
        },
        {
            name: "Colors Table",
            router: "/ColorsTable",
        },
        {
            name: "UI Rule",
            router: "/UIRules",
        },
        ...sides,
    ]
}

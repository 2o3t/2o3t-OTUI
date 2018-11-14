export default {
    otDefaultColors(theme) {
        const defColors = {
            normal: [ 'def-f' ],
            prefix: [ 'def-bg', 'def-bl', 'def-bt', 'def-bb', 'border' ],
            suffix: [ 'def-bg', 'def-bt', 'def-br', 'def-bb', 'border' ],
            input: {
                normal: [ 'def-f', 'def-bg', 'def-b', 'border' ],
                hover: [ 'def-b-hov' ],
                active: [ 'def-b-act' ],
                focus: [ 'pri-b-f' ],
                selected: [ 'light-bg-sel', 'selected' ],
                disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
            },
            icon: {
                normal: [ 'def-f' ],
                hover: [ 'def-f-h' ],
                active: [ 'def-f-a' ],
            },
            logo: [ 'def-f' ],
            msg: [ 'danger-f' ],
        };
        switch (theme) {
            case 'dark':
                return Object.assign({}, defColors, {
                    input: {
                        normal: [ 'def-f', 'def-bg', 'def-b', 'border' ],
                        hover: [ 'gery-bg-hov', 'pri-b-hov' ],
                        active: [ 'def-bg-act', 'pri-b-act' ],
                        focus: [ 'pri-b-f' ],
                        selected: [ 'dark-bg-sel', 'selected' ],
                        disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    },
                });
            case 'light':
            default:
                return Object.assign({}, defColors);
        }
    },
};

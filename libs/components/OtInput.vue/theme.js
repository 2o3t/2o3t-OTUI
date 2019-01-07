export default {
    otDefaultColors(theme) {
        const defColors = {
            normal: [ 'def-f' ],
            prefix: {
                normal: [ 'def-bg', 'def-bl', 'def-bt', 'def-bb', 'border' ],
                disabled: [ 'def-bg-dis', 'def-bl-dis', 'def-bt-dis', 'def-bb-dis' ],
            },
            suffix: {
                normal: [ 'def-bg', 'def-bt', 'def-br', 'def-bb', 'border' ],
                disabled: [ 'def-bg-dis', 'def-bt-dis', 'def-br-dis', 'def-bb-dis' ],
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
                        normal: [ 'light-f', 'def-bg', 'def-b', 'border' ],
                        hover: [ 'def-b-hov' ],
                        active: [ 'def-b-act' ],
                        focus: [ 'def-b-f' ],
                        selected: [ 'dark-bg-sel', 'selected' ],
                        disabled: [ 'grey-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    },
                });
            case 'light':
            default:
                return Object.assign({}, defColors, {
                    input: {
                        normal: [ 'dark-f', 'def-bg', 'def-b', 'border' ],
                        hover: [ 'def-b-hov' ],
                        active: [ 'def-b-act' ],
                        focus: [ 'def-b-f' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                        disabled: [ 'grey-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    },
                });
        }
    },
};

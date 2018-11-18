export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'def-f-h', 'def-br-h', 'before' ],
                    active: [ 'def-f-act' ],
                    selected: [ 'def-f-s', 'def-br-sel' ],
                    disabled: [ 'def-f-dis', 'def-br-dis' ],
                    mask: {
                        normal: [ 'light-f' ],
                        selected: [ 'light-f-s', 'def-bg-sel', 'def-br-sel' ],
                    },
                    link: {
                        normal: [ 'light-f' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'def-f-h', 'def-br-h', 'before' ],
                    active: [ 'def-f-a' ],
                    selected: [ 'def-f-s', 'def-br-s' ],
                    disabled: [ 'def-f-dis', 'def-br-dis' ],
                    mask: {
                        normal: [ 'dark-f' ],
                        selected: [ 'dark-f-s', 'def-bg-sel', 'def-br-s' ],
                    },
                    link: {
                        normal: [ 'dark-f' ],
                    },
                };
        }
    },
};

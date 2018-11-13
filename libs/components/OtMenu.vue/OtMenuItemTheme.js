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
                        selected: [ 'def-f-s', 'def-bg-sel', 'def-br-sel' ],
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
                        selected: [ 'def-f-s', 'def-bg-sel', 'def-br-s' ],
                    },
                };
        }
    },
};

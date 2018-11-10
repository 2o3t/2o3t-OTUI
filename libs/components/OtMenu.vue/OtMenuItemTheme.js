export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'pri-f-h', 'pri-br-h', 'before' ],
                    active: [ 'pri-f-act' ],
                    selected: [ 'pri-f-s', 'pri-br-sel' ],
                    disabled: [ 'def-f-dis', 'def-br-dis' ],
                    mask: {
                        selected: [ 'pri-f-s', 'pri-bg-sel', 'pri-br-sel' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-h', 'pri-br-h', 'before' ],
                    active: [ 'pri-f-a' ],
                    selected: [ 'pri-f-s', 'pri-br-s' ],
                    disabled: [ 'def-f-dis', 'def-br-dis' ],
                    mask: {
                        selected: [ 'pri-f-s', 'pri-bg-sel', 'pri-br-s' ],
                    },
                };
        }
    },
};

export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'def-f-h', 'def-bb-h', 'after' ],
                    active: [ 'def-f-act' ],
                    selected: [ 'def-f-s', 'def-bb-sel' ],
                    disabled: [ 'def-f-dis', 'def-bb-dis' ],
                    link: {
                        normal: [ 'light-f' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'dark-f' ],
                    hover: [ 'def-f-h', 'def-bb-h', 'after' ],
                    active: [ 'def-f-a' ],
                    selected: [ 'def-f-s', 'def-bb-s' ],
                    disabled: [ 'def-f-dis', 'def-bb-dis' ],
                    link: {
                        normal: [ 'dark-f' ],
                    },
                };
        }
    },
};

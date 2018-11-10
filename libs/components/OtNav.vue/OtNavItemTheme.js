export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'pri-f-h', 'pri-bb-h', 'after' ],
                    active: [ 'pri-f-act' ],
                    selected: [ 'pri-f-s', 'pri-bb-sel' ],
                    disabled: [ 'def-f-dis', 'def-bb-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-h', 'pri-bb-h', 'after' ],
                    active: [ 'pri-f-a' ],
                    selected: [ 'pri-f-s', 'pri-bb-s' ],
                    disabled: [ 'def-f-dis', 'def-bb-dis' ],
                };
        }
    },
};

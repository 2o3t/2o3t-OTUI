export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'def-b' ],
                    hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                    active: [ 'def-bg-a', 'light-b-a' ],
                    selected: [ 'light-f-s', 'pri-bg-s' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    hover: [ 'def-f-hov', 'light-bg-hov', 'def-b-hov' ],
                    active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                    selected: [ 'light-f-s', 'pri-bg-s' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
};

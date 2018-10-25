export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
            // return [ 'dark-b', 'light-f', 'pri-bg', 'light-b-hov', 'pri-bg-h', 'light-b-act', 'pri-bg-a', 'pri-bg-sel' ];
                return {
                    normal: [ 'light-f', 'def-b' ],
                    hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                    active: [ 'def-bg-a', 'light-b-a' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    hover: [ 'def-f-hov', 'light-bg-hov', 'def-b-hov' ],
                    active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
};

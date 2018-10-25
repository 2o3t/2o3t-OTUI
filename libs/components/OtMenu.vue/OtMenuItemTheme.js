export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'pri-f-h' ],
                    active: [ 'pri-bg-act' ],
                    selected: [ 'light-f-s', 'pri-bg-sel' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-h' ],
                    active: [ 'pri-f-a' ],
                    selected: [ 'pri-f-s', 'pri-br-s', 'after' ],
                    // disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                };
        }
    },
};

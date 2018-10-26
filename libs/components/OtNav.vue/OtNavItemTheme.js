export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'dark-f' ],
                    hover: [ 'dark-f-h' ],
                    active: [ 'pri-bg-act' ],
                    selected: [ 'pri-bg-sel', 'light-f-s' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-h', 'def-bg-h' ],
                    active: [ 'pri-f-a', 'def-bg-a' ],
                    selected: [ 'pri-f-s', 'def-bb-s', 'after' ],
                    // disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                };
        }
    },
};

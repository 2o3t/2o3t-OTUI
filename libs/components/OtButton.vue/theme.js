export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'def-f', 'def-b', 'border' ],
                    hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                    active: [ 'def-bg-a', 'def-b-a' ],
                    selected: [ 'dark-f-s', 'def-bg-s' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    hover: [ 'light-f-hov', 'def-bg-hov', 'def-b-hov' ],
                    active: [ 'def-bg-act', 'def-b-act' ],
                    selected: [ 'light-f-s', 'def-bg-s' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
};

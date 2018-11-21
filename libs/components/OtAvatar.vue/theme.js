export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'def-f', 'def-b', 'border' ],
                    selected: [ 'dark-f-s', 'def-bg-s' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    selected: [ 'light-f-s', 'def-bg-s' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
};

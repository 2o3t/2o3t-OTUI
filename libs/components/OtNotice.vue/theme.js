export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark': {
                return {
                    normal: [ 'light-f', 'dark-bg', 'def-b', 'border' ],
                };
            }
            case 'light':
            default: {
                return {
                    normal: [ 'def-f', 'def-bg', 'def-bl', 'border' ],
                };
            }
        }
    },
};

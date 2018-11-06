export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark': {
                return {
                    normal: [ 'def-f', 'def-bg', 'def-bl', 'border' ],
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

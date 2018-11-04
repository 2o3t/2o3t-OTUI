export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg', 'def-b', 'border' ],
                    },
                    box: {
                        normal: [ 'light-f', 'def-b', 'border' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'def-f', 'light-bg', 'def-b', 'border' ],
                    },
                    box: {
                        normal: [ 'light-f', 'def-b', 'border' ],
                    },
                };
        }
    },
};

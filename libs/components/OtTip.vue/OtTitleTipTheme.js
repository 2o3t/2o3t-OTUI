export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg', 'def-b' ],
                    },
                    arrow: {
                        normal: [ 'light-f', 'dark-bg' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'def-f', 'light-bg', 'def-b' ],
                    },
                    arrow: {
                        normal: [ 'def-f', 'light-bg' ],
                    },
                };
        }
    },
};

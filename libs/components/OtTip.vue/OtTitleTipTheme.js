export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'dark-f', 'light-bg-n' ],
                    },
                    arrow: {
                        normal: [ 'def-f', 'light-bg-n' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg-n' ],
                    },
                    arrow: {
                        normal: [ 'def-f', 'dark-bg-n' ],
                    },
                };
        }
    },
};

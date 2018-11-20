export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    color: {
                        normal: [ 'def-f' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'dark-f' ],
                    color: {
                        normal: [ 'def-f' ],
                    },
                };
        }
    },
};

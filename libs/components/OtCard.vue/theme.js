export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-b' ],
                    left: {
                        normal: [ 'light-br' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'dark-b' ],
                    left: {
                        normal: [ 'dark-br' ],
                    },
                };
        }
    },
};

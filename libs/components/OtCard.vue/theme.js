export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'grey-b' ],
                    left: {
                        normal: [ 'grey-br' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'grey-b' ],
                    left: {
                        normal: [ 'grey-br' ],
                    },
                };
        }
    },
};

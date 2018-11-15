export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-b-n' ],
                    left: {
                        normal: [ 'light-br-n' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'dark-b-n' ],
                    left: {
                        normal: [ 'dark-br-n' ],
                    },
                };
        }
    },
};

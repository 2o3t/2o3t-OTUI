export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    color: [ 'def-f' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'dark-f' ],
                    color: [ 'def-f' ],
                };
        }
    },
};

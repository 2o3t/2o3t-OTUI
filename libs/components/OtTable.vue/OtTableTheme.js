export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'grey-b' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'grey-b' ],
                };
        }
    },
};

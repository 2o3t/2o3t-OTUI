export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'def-f', 'light-b' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'dark-b' ],
                };
        }
    },
};

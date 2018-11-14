export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'light-b' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'dark-f', 'dark-b' ],
                };
        }
    },
};

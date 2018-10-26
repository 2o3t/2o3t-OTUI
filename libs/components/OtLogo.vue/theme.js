export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'pri-f' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                };
        }
    },
};

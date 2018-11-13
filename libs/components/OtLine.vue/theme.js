export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-bl-n', 'light-bt-n', 'border' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'dark-bt-n', 'dark-bl-n', 'border' ],
                };
        }
    },
};

export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'grey-bl', 'grey-bt', 'border' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'grey-bt', 'grey-bl', 'border' ],
                };
        }
    },
};

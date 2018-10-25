export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    msg: {
                        normal: [ 'danger-f' ],
                    },
                };
            case 'light':
            default:
                return {
                    msg: {
                        normal: [ 'danger-f' ],
                    },
                };
        }
    },
};

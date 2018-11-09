export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    prefix: {
                        normal: [ 'light-f' ],
                        active: [ 'def-f-hov' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    prefix: {
                        normal: [ 'def-f' ],
                        active: [ 'def-f-hov' ],
                    },
                };
        }
    },
};

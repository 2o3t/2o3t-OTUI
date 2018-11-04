export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'def-f', 'def-bg' ],
                    closeBtn: {
                        normal: [ 'def-f' ],
                        hover: [ 'light-f-h' ],
                        active: [ 'def-f-a' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg' ],
                    closeBtn: {
                        normal: [ 'grey-f' ],
                        hover: [ 'def-f-h' ],
                        active: [ 'def-f-a' ],
                    },
                };
        }
    },
};

export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'grey-b', 'border' ],
                    left: {
                        normal: [ 'grey-br', 'border' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'grey-b', 'border' ],
                    left: {
                        normal: [ 'grey-br', 'border' ],
                    },
                };
        }
    },
};

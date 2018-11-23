export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    indicator: {
                        normal: [ 'light-bg-n' ],
                    },
                    outsideIndicator: {
                        normal: [ 'light-bg-n' ],
                    },
                };
            case 'light':
            default:
                return {
                    indicator: {
                        normal: [ 'light-bg-n' ],
                    },
                    outsideIndicator: {
                        normal: [ 'dark-bg-n' ],
                    },
                };
        }
    },
};

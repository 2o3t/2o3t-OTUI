export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'dark-f', 'light-bg' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    arrow: {
                        normal: [ 'def-f' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg' ],
                        selected: [ 'dark-bg-sel', 'selected' ],
                    },
                    arrow: {
                        normal: [ 'def-f' ],
                        selected: [ 'dark-bg-sel', 'selected' ],
                    },
                };
        }
    },
};

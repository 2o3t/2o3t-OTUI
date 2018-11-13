export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'dark-f', 'light-bg', 'def-b' ],
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
                        normal: [ 'light-f', 'dark-bg', 'def-b' ],
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

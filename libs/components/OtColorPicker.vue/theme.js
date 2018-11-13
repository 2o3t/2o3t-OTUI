export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg', 'def-b', 'border' ],
                    },
                    box: {
                        normal: [ 'light-f', 'def-b', 'border' ],
                        hover: [ 'def-b-hov' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'def-f', 'def-b', 'border' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    box: {
                        normal: [ 'light-f', 'def-b', 'border' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                        hover: [ 'def-b-hov' ],
                    },
                };
        }
    },
};

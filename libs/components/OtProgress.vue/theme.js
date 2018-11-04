export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark': {
                return {
                    bg: {
                        normal: [ 'light-f', 'light-b', 'border' ],
                    },
                    circleBg: {
                        normal: [ 'light-f', 'light-bg', 'stroke' ],
                    },
                    bar: {
                        selected: [ 'def-bg-sel', 'stroke' ],
                    },
                    normal: [ 'light-f' ],
                };
            }
            case 'light':
            default: {
                return {
                    bg: {
                        normal: [ 'light-f', 'grey-bg' ],
                    },
                    circleBg: {
                        normal: [ 'light-f', 'grey-bg', 'stroke' ],
                    },
                    bar: {
                        selected: [ 'def-bg-sel', 'stroke' ],
                    },
                    normal: [ 'def-f' ],
                };
            }
        }
    },
};

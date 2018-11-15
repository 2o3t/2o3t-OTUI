export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark': {
                const bgNormalFont = this.color === 'default' ? 'dark-f' : 'light-f';
                return {
                    bg: {
                        normal: [ bgNormalFont, 'light-b', 'border' ],
                    },
                    circleBg: {
                        normal: [ 'def-f', 'def-bg', 'stroke' ],
                    },
                    bar: {
                        selected: [ 'def-bg-sel', 'stroke' ],
                    },
                    normal: [ 'def-f' ],
                };
            }
            case 'light':
            default: {
                return {
                    bg: {
                        normal: [ 'light-f', 'def-bg' ],
                    },
                    circleBg: {
                        normal: [ 'light-f', 'def-bg', 'stroke' ],
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

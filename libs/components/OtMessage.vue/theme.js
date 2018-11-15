export default {
    otDefaultColors(theme) {
        const defColors = {
            closeBtn: {
                normal: [ 'def-f' ],
                hover: [ 'def-f-h' ],
                active: [ 'def-f-a' ],
            },
        };
        switch (theme) {
            case 'dark':
                return Object.assign({}, defColors, {
                    normal: this.color === 'default' ? [ 'dark-f', 'light-bg', 'dark-b' ] : [ 'def-f', 'def-bg', 'def-b' ],
                    selected: this.color === 'default' ? [ 'light-bg-sel', 'selected' ] : [ ],
                    closeBtn: this.color === 'default' && {
                        normal: [ 'dark-f' ],
                        hover: [ 'dark-f-h' ],
                        active: [ 'dark-f-a' ],
                    },
                });
            case 'light':
            default:
                return Object.assign({}, defColors, {
                    normal: this.color === 'default' ? [ 'light-f', 'dark-bg', 'light-b' ] : [ 'def-f', 'def-bg', 'def-b' ],
                    selected: this.color === 'default' ? [ 'dark-bg-sel', 'selected' ] : [ ],
                    closeBtn: this.color === 'default' && {
                        normal: [ 'light-f' ],
                        hover: [ 'light-f-h' ],
                        active: [ 'light-f-a' ],
                    },
                });
        }
    },
};

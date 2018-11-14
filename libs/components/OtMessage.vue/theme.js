export default {
    otDefaultColors(theme) {
        const defColors = {
            normal: [ 'def-f', 'def-bg', 'def-b' ],
            closeBtn: {
                normal: [ 'def-f' ],
                hover: [ 'def-f-h' ],
                active: [ 'def-f-a' ],
            },
        };
        switch (theme) {
            case 'dark':
                return Object.assign({}, defColors, {
                    selected: this.color === 'default' ? [ 'dark-bg-sel', 'selected' ] : [],
                });
            case 'light':
            default:
                return Object.assign({}, defColors, {
                    selected: this.color === 'default' ? [ 'light-bg-sel', 'selected' ] : [],
                });
        }
    },
};

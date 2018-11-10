export default {
    otDefaultColors(theme) {
        const background = this.background;
        switch (theme) {
            case 'dark':
                return background ? {
                    normal: [ 'light-f', 'grey-b', 'border' ],
                } : {
                    normal: [ 'light-f' ],
                };
            case 'light':
            default:
                return background ? {
                    normal: [ 'def-f', 'def-bg', 'grey-b' ],
                } : {
                    normal: [ 'def-f' ],
                };
        }
    },
};

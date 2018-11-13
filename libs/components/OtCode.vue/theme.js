export default {
    otDefaultColors(theme) {
        const background = this.background;
        switch (theme) {
            case 'dark':
                return background ? {
                    normal: [ 'light-f', 'light-b', 'border' ],
                } : {
                    normal: [ 'light-f' ],
                };
            case 'light':
            default:
                return background ? {
                    normal: [ 'dark-f', 'dark-bg', 'dark-b' ],
                } : {
                    normal: [ 'dark-f' ],
                };
        }
    },
};

export default {
    otDefaultColors(theme) {
        const isExpand = this.expand;
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: isExpand ? [ 'light-f-h' ] : [],
                };
            case 'light':
            default:
                return {
                    normal: [ 'dark-f' ],
                    hover: isExpand ? [ 'dark-f-h' ] : [],
                };
        }
    },
};

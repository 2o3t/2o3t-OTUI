export default {
    otDefaultColors(theme) {
        const isExpand = this.expand;
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'grey-f' ],
                    hover: isExpand ? [ 'def-f-h' ] : [],
                };
            case 'light':
            default:
                return {
                    normal: [ 'grey-f' ],
                    hover: isExpand ? [ 'def-f-h' ] : [],
                };
        }
    },
};

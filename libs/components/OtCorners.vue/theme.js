export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                if (this.color === 'default') {
                    return {
                        selected: [ 'dark-f-sel', 'light-bg-sel', 'fill' ],
                    };
                }
                return {
                    selected: [ 'light-f-sel', 'def-bg-sel', 'fill' ],
                };
            case 'light':
            default:
                return {
                    selected: [ 'light-f-sel', 'def-bg-sel', 'fill' ],
                };
        }
    },
};

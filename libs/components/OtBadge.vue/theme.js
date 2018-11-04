export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'pri-f', 'dark-bg', 'light-b', 'border' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b', 'border' ],
                };
        }
    },

};

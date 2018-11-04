export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    selected: [ 'def-f-sel', 'light-bg-sel' ],
                };
            case 'light':
            default:
                return {
                    selected: [ 'light-f-sel', 'def-bg-sel' ],
                };
        }
    },
};

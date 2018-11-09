export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'def-b', 'border' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                    top: {
                        normal: [ 'light-f' ],
                    },
                    count: {
                        normal: [ 'grey-f' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-b', 'border' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    top: {
                        normal: [ 'def-f', 'def-bg' ],
                    },
                    count: {
                        normal: [ 'grey-f' ],
                    },
                };
        }
    },
};

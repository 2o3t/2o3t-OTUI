export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'def-b', 'border' ],
                    disabled: [ 'light-f-dis', 'grey-bg-dis', 'light-b-dis' ],
                    close: {
                        normal: [ 'def-f' ],
                        hover: [ 'light-f-hov', 'def-bg-hov' ],
                        disabled: [ 'def-f-dis' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    close: {
                        normal: [ 'def-f' ],
                        hover: [ 'light-f-hov', 'def-bg-hov' ],
                        disabled: [ 'def-f-dis' ],
                    },
                };
        }
    },
};

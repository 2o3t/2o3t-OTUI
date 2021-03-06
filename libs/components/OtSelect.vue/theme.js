export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    list: {
                        normal: [ 'light-f', 'dark-bg', 'def-b', 'border' ],
                        hover: [ 'def-b-h' ],
                        selected: [ 'dark-bg-sel', 'selected' ],
                    },
                    item: {
                        normal: [ 'light-f', 'dark-bg' ],
                        hover: [ 'def-bg-h' ],
                        active: [ 'def-bg-a' ],
                        selected: [ 'dark-f-sel', 'def-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis' ],
                    },
                };
            case 'light':
            default:
                return {
                    list: {
                        normal: [ 'dark-f', 'light-bg', 'def-b', 'border' ],
                        hover: [ 'def-b-hov' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    item: {
                        normal: [ 'dark-f', 'light-bg' ],
                        hover: [ 'light-f-hov', 'def-bg-hov' ],
                        active: [ 'def-bg-act' ],
                        selected: [ 'light-f-sel', 'def-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis' ],
                    },
                };
        }
    },
};

export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    dropdown: {
                        normal: [ 'def-f', 'light-bg', 'def-b' ],
                    },
                    arrow: {
                        normal: [ 'light-f', 'light-bg' ],
                    },
                    list: {
                        normal: [ 'def-f' ],
                    },
                    item: {
                        normal: [ 'def-f' ],
                        hover: [ 'pri-bg-h' ],
                        active: [ 'pri-bg-a' ],
                        selected: [ 'light-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'def-f-dis', 'grey-bg-dis' ],
                    },
                };
            case 'light':
            default:
                return {
                    dropdown: {
                        normal: [ 'light-f', 'dark-bg', 'def-b' ],
                    },
                    arrow: {
                        normal: [ 'def-f', 'dark-bg' ],
                    },
                    list: {
                        normal: [ 'light-f' ],
                    },
                    item: {
                        normal: [ 'light-f' ],
                        hover: [ 'pri-f-hov' ],
                        active: [ 'pri-f-act' ],
                        selected: [ 'light-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'light-f-dis', 'def-bg-dis' ],
                    },
                };
        }
    },
};

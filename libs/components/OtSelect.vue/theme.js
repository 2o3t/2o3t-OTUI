export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    list: {
                        normal: [ 'light-f', 'dark-bg', 'light-b', 'border' ],
                        hover: [ 'pri-b-h' ],
                        selected: [ 'dark-bg-sel', 'selected' ],
                    },
                    item: {
                        normal: [ 'light-f', 'dark-bg' ],
                        hover: [ 'pri-bg-h' ],
                        active: [ 'pri-bg-a' ],
                        selected: [ 'light-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'light-f-dis', 'grey-bg-dis' ],
                    },
                };
            case 'light':
            default:
                return {
                    list: {
                        normal: [ 'def-f', 'light-bg', 'grey-b', 'border' ],
                        hover: [ 'pri-b-hov' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    item: {
                        normal: [ 'def-f' ],
                        hover: [ 'pri-f-hov' ],
                        active: [ 'pri-f-act' ],
                        selected: [ 'light-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis' ],
                    },
                };
        }
    },
};

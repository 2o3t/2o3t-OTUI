export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
            {
                const itemHover = (this.color === 'default' ? 'dark-bg-h' : 'def-bg-h');
                return {
                    dropdown: {
                        normal: [ 'def-f', 'light-bg', 'def-b' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    arrow: {
                        normal: [ 'light-f', 'light-bg' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    list: {
                        normal: [ 'dark-f' ],
                    },
                    item: {
                        normal: [ 'dark-f' ],
                        hover: [ 'light-f-h', itemHover ],
                        active: [ 'def-bg-a' ],
                        selected: [ 'light-f-sel', 'def-bg-sel' ],
                        disabled: [ 'def-f-dis', 'grey-bg-dis' ],
                    },
                };
            }
            case 'light':
            default:
            {
                const itemHover = (this.color === 'default' ? 'light-bg-h' : 'def-bg-h');
                return {
                    dropdown: {
                        normal: [ 'light-f', 'dark-bg', 'def-b' ],
                        selected: [ 'dark-bg-sel', 'selected' ],
                    },
                    arrow: {
                        normal: [ 'def-f', 'dark-bg' ],
                        selected: [ 'dark-bg-sel', 'selected' ],
                    },
                    list: {
                        normal: [ 'light-f' ],
                    },
                    item: {
                        normal: [ 'light-f' ],
                        hover: [ 'dark-f-hov', itemHover ],
                        active: [ 'def-f-act' ],
                        selected: [ 'light-f-sel', 'def-bg-sel' ],
                        disabled: [ 'light-f-dis', 'def-bg-dis' ],
                    },
                };

            }
        }
    },
};

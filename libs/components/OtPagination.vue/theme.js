export default {
    // TODO: 需要调整
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'def-b' ],
                    hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                    active: [ 'def-bg-a', 'light-b-a' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                    item: {
                        normal: [ 'light-f', 'def-bg', 'def-b' ],
                        hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                        active: [ 'def-bg-a', 'light-b-a' ],
                        selected: [ 'dark-f-s', 'def-bg-s' ],
                        disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                    },
                    noBgItem: {
                        normal: [ 'light-f' ],
                        hover: [ 'light-f-hov', 'def-bg-hov', 'def-b-hov' ],
                        active: [ 'light-f-a', 'def-bg-a' ],
                        selected: [ 'dark-f-s', 'def-bg-s' ],
                        disabled: [ 'def-f-dis' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    hover: [ 'def-f-hov', 'light-bg-hov', 'def-b-hov' ],
                    active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                    item: {
                        normal: [ 'def-f', 'def-bg', 'def-b' ],
                        hover: [ 'light-f-hov', 'def-bg-hov', 'def-b-hov' ],
                        active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                        selected: [ 'light-f-s', 'def-bg-s' ],
                        disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                    },
                    noBgItem: {
                        normal: [ 'def-f' ],
                        hover: [ 'light-f-hov', 'def-bg-hov', 'def-b-hov' ],
                        active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                        selected: [ 'light-f-s', 'def-bg-s' ],
                        disabled: [ 'def-f-dis' ],
                    },
                };
        }
    },
};

export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'def-bg-h' ],
                    active: [ 'def-bg-a' ],
                    selected: [ 'def-bb-s', 'after' ],
                    icon: {
                        normal: 'def-f',
                        hover: 'light-f-h',
                        active: 'def-f-a',
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'def-f-hov', 'light-bg-hov' ],
                    active: [ 'light-f-act', 'def-bg-act' ],
                    selected: [ 'def-bb-sel', 'after' ],
                    // disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    icon: {
                        normal: 'def-f',
                        hover: 'def-f-h',
                        active: 'light-f-a',
                    },
                };
        }
    },
};

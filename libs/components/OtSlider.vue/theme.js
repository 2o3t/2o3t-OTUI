export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    runway: {
                        normal: [ 'def-f', 'def-b' ],
                    },
                    bar: {
                        selected: [ 'def-f-sel', 'def-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    btn: {
                        normal: [ 'dark-bg', 'def-b' ],
                        selected: [ 'def-bg-sel', 'selected' ],
                        disabled: [ 'grey-bg-dis', 'def-b-dis' ],
                    },
                    step: {
                        normal: [ 'light-bg' ],
                    },
                };
            case 'light':
            default:
                return {
                    runway: {
                        normal: [ 'def-f', 'def-bg' ],
                    },
                    bar: {
                        selected: [ 'def-f-sel', 'def-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    btn: {
                        normal: [ 'light-bg', 'def-b' ],
                        selected: [ 'light-bg-sel', 'selected' ],
                        disabled: [ 'grey-bg-dis', 'dark-b-dis' ],
                    },
                    step: {
                        normal: [ 'dark-bg' ],
                    },
                };
        }
    },
};

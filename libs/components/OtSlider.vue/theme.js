export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    runway: {
                        normal: [ 'light-f', 'light-b' ],
                    },
                    bar: {
                        selected: [ 'def-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    btn: {
                        normal: [ 'pri-b', 'light-bg' ],
                        disabled: [ 'def-bg-dis', 'def-b-dis' ],
                    },
                    step: {
                        normal: [ 'light-bg' ],
                    },
                };
            case 'light':
            default:
                return {
                    runway: {
                        normal: [ 'def-f', 'grey-bg' ],
                    },
                    bar: {
                        selected: [ 'def-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    btn: {
                        normal: [ 'light-bg', 'pri-b' ],
                        disabled: [ 'def-bg-dis', 'def-b-dis' ],
                    },
                    step: {
                        normal: [ 'light-bg' ],
                    },
                };
        }
    },
};

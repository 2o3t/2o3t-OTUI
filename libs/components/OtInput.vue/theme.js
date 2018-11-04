export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    prefix: [ 'grey-bg', 'light-bl', 'light-bt', 'light-bb', 'border' ],
                    suffix: [ 'grey-bg', 'light-bt', 'light-br', 'light-bb', 'border' ],
                    input: {
                        normal: [ 'light-f', 'dark-bg', 'light-b', 'border' ],
                        hover: [ 'gery-bg-hov', 'pri-b-hov' ],
                        active: [ 'grey-bg-act', 'pri-b-act' ],
                        focus: [ 'pri-b-f' ],
                        disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    },
                    icon: {
                        normal: [ 'pri-f' ],
                        hover: [ 'light-f-h' ],
                        active: [ 'pri-f-a' ],
                    },
                    logo: [ 'pri-f' ],
                    last: [ 'danger-f' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    prefix: [ 'def-bg', 'grey-bl', 'grey-bt', 'grey-bb', 'border' ],
                    suffix: [ 'def-bg', 'grey-bt', 'grey-br', 'grey-bb', 'border' ],
                    input: {
                        normal: [ 'light-bg', 'grey-b', 'border' ],
                        hover: [ 'def-b-hov' ],
                        active: [ 'def-b-act' ],
                        focus: [ 'pri-b-f' ],
                        disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    },
                    icon: {
                        normal: [ 'def-f' ],
                        hover: [ 'pri-f-h' ],
                        active: [ 'def-f-a' ],
                    },
                    logo: [ 'def-f' ],
                    last: [ 'danger-f' ],
                };
        }
    },
};

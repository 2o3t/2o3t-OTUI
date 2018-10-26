export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    front: {
                        normal: [ 'light-bg' ],
                    },
                    switch: {
                        normal: [ 'light-f', 'dark-bg', 'pri-b' ],
                        hover: [ 'pri-f-h', 'pri-b-h' ],
                        active: [ 'pri-bg-a', 'light-b-a' ],
                        selected: [ 'pri-f-sel', 'pri-bg-sel', 'pri-b-sel' ],
                        disabled: [ 'pri-f-dis', 'pri-bg-dis', 'pri-b-dis' ],
                    },
                    activeLabel: {
                        normal: [ 'grey-f' ],
                        selected: [ 'pri-f-sel' ],
                        disabled: [ 'def-f-dis' ],
                    },
                    normal: [ 'light-f' ],
                };
            case 'light':
            default:
                return {
                    front: {
                        normal: [ 'light-bg' ],
                    },
                    switch: {
                        normal: [ 'def-f', 'pri-bg', 'pri-b' ],
                        hover: [ 'pri-f-hov', 'pri-b-hov' ],
                        active: [ 'pri-bg-a', 'dark-b-a' ],
                        selected: [ 'pri-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    activeLabel: {
                        normal: [ 'grey-f' ],
                        selected: [ 'pri-f-sel' ],
                        disabled: [ 'def-f-dis' ],
                    },
                    normal: [ 'def-f' ],
                };
        }
    },
};

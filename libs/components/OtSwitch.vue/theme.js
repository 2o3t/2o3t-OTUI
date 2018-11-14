export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    front: {
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    switch: {
                        normal: [ 'light-f', 'def-bg', 'def-b' ],
                        hover: [ 'def-f-h', 'def-b-h' ],
                        active: [ 'def-bg-a', 'light-b-a' ],
                        selected: [ 'def-f-sel', 'def-b-sel', 'border' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    activeLabel: {
                        normal: [ 'def-f' ],
                        selected: [ 'def-f-sel' ],
                        disabled: [ 'def-f-dis' ],
                    },
                    normal: [ 'light-f' ],
                };
            case 'light':
            default:
                return {
                    front: {
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    switch: {
                        normal: [ 'dark-f', 'def-bg' ],
                        hover: [ 'def-f-hov' ],
                        active: [ 'def-bg-a' ],
                        selected: [ 'def-f-sel', 'def-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis' ],
                    },
                    activeLabel: {
                        normal: [ 'def-f' ],
                        selected: [ 'def-f-sel' ],
                        disabled: [ 'def-f-dis' ],
                    },
                    normal: [ 'dark-f' ],
                };
        }
    },
};

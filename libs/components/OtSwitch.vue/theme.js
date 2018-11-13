export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    front: {
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    switch: {
                        // TODO: 需要改进
                        normal: [ 'def-f', 'def-bg', 'def-b' ],
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
                    normal: [ 'def-f' ],
                };
            case 'light':
            default:
                return {
                    front: {
                        selected: [ 'light-bg-sel', 'selected' ],
                    },
                    switch: {
                        normal: [ 'def-f', 'def-bg' ],
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
                    normal: [ 'def-f' ],
                };
        }
    },
};

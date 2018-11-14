export default {
    otDefaultColors(theme) {
        const borderNormal = this.border ? [ 'def-b' ] : [];
        const borderDarkDisabled = this.border ? [ 'def-b-dis' ] : [];
        const borderLightDisabled = this.border ? [ 'def-bg-dis', 'def-b-dis' ] : [];
        switch (theme) {
            case 'dark': {
                return {
                    front: {
                        normal: [ 'def-b' ],
                        disabled: [ 'def-b-dis' ],
                    },
                    point: {
                        selected: [ 'def-bg-sel' ],
                    },
                    normal: [ 'light-f', ...borderNormal ],
                    // hover: [ 'def-f-h' ],
                    selected: [ 'def-f-sel' ],
                    disabled: [ 'def-f-dis', ...borderDarkDisabled ],
                };
            }
            case 'light':
            default: {
                return {
                    front: {
                        normal: [ 'light-bg', 'def-b' ],
                        selected: [ 'def-bg-sel' ],
                        disabled: [ 'def-bg-dis', 'def-b-dis' ],
                    },
                    point: {
                        normal: [ 'def-bg' ],
                        selected: [ 'light-bg-sel' ],
                    },
                    normal: [ 'dark-f', ...borderNormal ],
                    // hover: [ 'def-f-hov' ],
                    selected: [ 'def-f-sel' ],
                    disabled: [ 'def-f-dis', ...borderLightDisabled ],
                };
            }
        }
    },
};

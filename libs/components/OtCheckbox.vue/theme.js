export default {
    otDefaultColors(theme) {
        const borderNormal = this.border ? [ 'def-b' ] : [];
        const borderDarkDisabled = this.border ? [ 'def-b-dis' ] : [];
        const borderLightDisabled = this.border ? [ 'def-bg-dis', 'def-b-dis' ] : [];
        switch (theme) {
            case 'dark': {
                return {
                    front: {
                        normal: [ 'def-b', 'border' ],
                        selected: [ ],
                        disabled: [ 'def-b-dis' ],
                    },
                    point: {
                        selected: [ 'def-br-sel', 'def-bb-sel', 'border' ],
                    },
                    normal: [ 'light-f', ...borderNormal ],
                    hover: [ 'def-f-h' ],
                    selected: [ 'def-f-sel' ],
                    disabled: [ 'def-f-dis', ...borderDarkDisabled ],
                };
            }
            case 'light':
            default: {
                return {
                    front: {
                        normal: [ 'light-bg', 'def-b', 'border' ],
                        selected: [ 'def-bg-sel' ],
                        disabled: [ 'def-bg-dis', 'def-b-dis' ],
                    },
                    point: {
                        selected: [ 'light-br-sel', 'light-bb-sel', 'border' ],
                    },
                    normal: [ 'def-f', ...borderNormal ],
                    hover: [ 'def-f-hov' ],
                    selected: [ 'def-f-sel' ],
                    disabled: [ 'def-f-dis', ...borderLightDisabled ],
                };
            }
        }
    },
};

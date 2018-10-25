export default {
    otDefaultColors(theme) {
        const borderNormal = this.border ? [ 'pri-b' ] : [];
        const borderDarkDisabled = this.border ? [ 'def-b-dis' ] : [];
        const borderLightDisabled = this.border ? [ 'def-bg-dis', 'def-b-dis' ] : [];
        switch (theme) {
            case 'dark': {
                return {
                    front: {
                        normal: [ 'pri-b' ],
                        disabled: [ 'pri-b-dis' ],
                    },
                    point: {
                        selected: [ 'pri-br-sel', 'pri-bb-sel' ],
                    },
                    normal: [ 'light-f', ...borderNormal ],
                    hover: [ 'pri-f-h' ],
                    selected: [ 'pri-f-sel' ],
                    disabled: [ 'def-f-dis', ...borderDarkDisabled ],
                };
            }
            case 'light':
            default: {
                return {
                    front: {
                        normal: [ 'light-bg', 'pri-b' ],
                        selected: [ 'pri-bg-sel' ],
                        disabled: [ 'def-bg-dis', 'def-b-dis' ],
                    },
                    point: {
                        selected: [ 'light-br-sel', 'light-bb-sel' ],
                    },
                    normal: [ 'def-f', ...borderNormal ],
                    hover: [ 'pri-f-hov' ],
                    selected: [ 'pri-f-sel' ],
                    disabled: [ 'def-f-dis', ...borderLightDisabled ],
                };
            }
        }
    },
};

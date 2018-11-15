export default {
    otDefaultColors(theme) {
        const darkSelected = this.color === 'default' ? [ 'dark-f-sel', 'def-bg-sel' ] : [ 'light-f-sel', 'def-bg-sel' ];
        switch (theme) {
            case 'dark':
                return {
                    day: !this.week ? {
                        normal: [ 'light-f' ],
                        hover: [ 'dark-f-hov', 'def-bg-hov' ],
                        active: [ 'def-bg-act' ],
                        selected: darkSelected,
                        disabled: [ 'def-f-dis' ],
                    } : {
                        disabled: [ 'def-f-dis' ],
                    },
                    week: {
                        hover: this.week ? [ 'dark-f-hov', 'def-bg-hov' ] : [ 'def-f-h' ],
                        selected: darkSelected,
                    },
                    footer: {
                        normal: [ 'def-bt' ],
                    },
                    header: {
                        normal: [ 'def-bb' ],
                    },
                };
            case 'light':
            default:
                return {
                    day: !this.week ? {
                        normal: [ 'dark-f' ],
                        hover: [ 'light-f-hov', 'def-bg-hov' ],
                        active: [ 'def-bg-act' ],
                        selected: [ 'light-f-sel', 'def-bg-sel' ],
                        disabled: [ 'def-f-dis' ],
                    } : {
                        disabled: [ 'def-f-dis' ],
                    },
                    week: {
                        hover: this.week ? [ 'light-f-hov', 'def-bg-hov' ] : [ 'def-f-h' ],
                        selected: [ 'light-f-sel', 'def-bg-sel' ],
                    },
                    footer: {
                        normal: [ 'def-bt' ],
                    },
                    header: {
                        normal: [ 'def-bb' ],
                    },
                };
        }
    },
};

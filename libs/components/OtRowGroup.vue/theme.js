export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    group: this.background ? [ 'def-bg' ] : [ ],
                    code: {
                        normal: [ 'light-bl', 'light-br', 'light-bb' ],
                        hover: [ 'def-bl-h', 'def-br-h', 'def-bb-h' ],
                    },
                };
            case 'light':
            default:
                return {
                    group: this.background ? [ 'def-bg' ] : [],
                    code: {
                        normal: [ 'dark-bl', 'dark-br', 'dark-bb' ],
                        hover: [ 'def-bl-hov', 'def-br-hov', 'def-bb-hov' ],
                    },
                };
        }
    },
};

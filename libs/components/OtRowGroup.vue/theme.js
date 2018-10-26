export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    group: this.background ? [ 'dark-bg' ] : [ ],
                    code: {
                        normal: [ 'def-bl', 'def-br', 'def-bb' ],
                        hover: [ 'def-bl-h', 'def-br-h', 'def-bb-h' ],
                    },
                };
            case 'light':
            default:
                return {
                    group: this.background ? [ 'def-bg' ] : [],
                    code: {
                        normal: [ 'grey-bl', 'grey-br', 'grey-bb' ],
                        hover: [ 'def-bl-hov', 'def-br-hov', 'def-bb-hov' ],
                    },
                };
        }
    },
};

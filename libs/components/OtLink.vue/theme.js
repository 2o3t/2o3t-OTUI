export default {

    otDefaultColors(theme) {
        switch (theme) {
            case 'dark': {
                const c = {
                    normal: [ 'light-f' ],
                    hover: [ 'pri-f-h' ],
                    active: [ 'pri-f-a' ],
                    disabled: [ 'pri-f-dis' ],
                };
                if (this.line) {
                    c.normal.push('pri-bb');
                    c.hover.push('pri-bb-h');
                    c.active.push('light-bb-a');
                    c.disabled.push('pri-bb-dis');
                }
                return c;
            }
            case 'light':
            default: {
                const c = {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-hov' ],
                    active: [ 'pri-f-act' ],
                    disabled: [ 'def-f-dis' ],
                };
                if (this.line) {
                    c.normal.push('def-bb');
                    c.hover.push('def-bb-hov');
                    c.active.push('pri-bb-act');
                    c.disabled.push('def-bb-dis');
                }
                return c;
            }
        }
    },
};

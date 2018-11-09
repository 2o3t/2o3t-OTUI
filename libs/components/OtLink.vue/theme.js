export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark': {
                const c = {
                    normal: [ 'light-f' ],
                    hover: [ ],
                    active: [ ],
                    disabled: [ 'pri-f-dis' ],
                };
                if (this.line) {
                    c.normal.push('pri-bb');
                    c.disabled.push('pri-bb-dis');
                }
                if (this.currentHref) {
                    c.hover.push('pri-f-hov');
                    c.hover.push('pri-f-act');

                    if (this.line) {
                        c.hover.push('pri-bb-hov');
                        c.active.push('light-bb-act');
                    }
                }
                return c;
            }
            case 'light':
            default: {
                const c = {
                    normal: [ 'def-f' ],
                    hover: [ ],
                    active: [ ],
                    disabled: [ 'def-f-dis' ],
                };
                if (this.line) {
                    c.normal.push('def-bb');
                    c.disabled.push('def-bb-dis');
                }
                if (this.currentHref) {
                    c.hover.push('pri-f-hov');
                    c.hover.push('pri-f-act');

                    if (this.line) {
                        c.hover.push('def-bb-hov');
                        c.active.push('pri-bb-act');
                    }
                }
                return c;
            }
        }
    },
};

export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark': {
                const c = {
                    normal: [ 'light-f' ],
                    hover: [ ],
                    active: [ ],
                    selected: [ 'def-f-sel' ],
                    disabled: [ 'def-f-dis' ],
                };
                if (this.line) {
                    c.normal.push('def-bb', 'border');
                    c.disabled.push('def-bb-dis');
                }
                if (this.currentHref) {
                    c.normal = [ 'def-f' ];
                    c.hover.push('def-f-hov');
                    c.hover.push('def-f-act');

                    if (this.line) {
                        c.hover.push('def-bb-hov');
                        c.active.push('def-bb-act');
                    }
                }
                return c;
            }
            case 'light':
            default: {
                const c = {
                    normal: [ 'dark-f' ],
                    hover: [ ],
                    active: [ ],
                    selected: [ 'def-f-sel' ],
                    disabled: [ 'def-f-dis' ],
                };
                if (this.line) {
                    c.normal.push('def-bb', 'border');
                    c.disabled.push('def-bb-dis');
                }
                if (this.currentHref) {
                    c.normal = [ 'def-f' ];
                    c.hover.push('def-f-hov');
                    c.hover.push('def-f-act');

                    if (this.line) {
                        c.hover.push('def-bb-hov');
                        c.active.push('def-bb-act');
                    }
                }
                return c;
            }
        }
    },
};

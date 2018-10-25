export default {
    otDefaultColors(theme) {
        const colors = {
            selected: [ 'def-bl-sel', 'def-bt-sel' ],
            disabled: [ 'def-bl-dis', 'def-bt-dis' ],
        };
        if (this.hover) {
            Object.assign(colors, {
                hover: [ 'def-bl-hov', 'def-bt-hov' ],
                active: [ 'def-bl-act', 'def-bt-act' ],
            });
        }
        switch (theme) {
            case 'dark':
                return Object.assign(colors, {
                    normal: [ 'def-bl', 'def-bt' ],
                });
            case 'light':
            default:
                return Object.assign(colors, {
                    normal: [ 'def-bl', 'def-bt' ],
                });
        }
    },
};

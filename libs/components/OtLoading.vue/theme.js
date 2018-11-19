export default {
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    vsco: [ 'def-bg-sel' ],

                    spinner: [ 'def-f' ],

                    pushPri: [ 'pri-bg-sel' ],
                    pushDef: [ 'def-bg-sel' ],
                    pushThe: [ 'lig-bg-sel' ],
                    pushSuc: [ 'suc-bg-sel' ],
                    pushWar: [ 'war-bg-sel' ],
                    pushDan: [ 'dan-bg-sel' ],
                    pushInf: [ 'inf-bg-sel' ],

                    label: [ 'def-f' ],
                };
            case 'light':
            default:
                return {
                    vsco: [ 'def-bg-sel' ],

                    spinner: [ 'def-f' ],

                    pushPri: [ 'pri-bg-sel' ],
                    pushDef: [ 'def-bg-sel' ],
                    pushThe: [ 'dar-bg-sel' ],
                    pushSuc: [ 'suc-bg-sel' ],
                    pushWar: [ 'war-bg-sel' ],
                    pushDan: [ 'dan-bg-sel' ],
                    pushInf: [ 'inf-bg-sel' ],

                    label: [ 'def-f' ],
                };
        }
    },
};

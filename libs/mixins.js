const NAMES = [ 'default', 'success', 'warning', 'primary', 'danger', 'info' ];
const SX_NAMES = [ 'normal', 'hover', 'active', 'focus', 'selected', 'disabled' ];
const otRegexColorName = /^ot(\w+)Colors$/;
const otRegexName = /^ot-/;
const isDef = v => v !== undefined;
const isFunc = v => typeof v === 'function';
const isObj = v => Object.prototype.toString.call(v) === '[object Object]';
const isStr = v => Object.prototype.toString.call(v) === '[object String]';

function hookBeforeCreate($vm) {
    // init
    $vm._ot_color = {};
    for (const key in $vm.$options) {
        const fn = $vm.$options[key];
        if (isDef(fn) && isFunc(fn)) {
            const findRight = otRegexColorName.exec(key);
            if (findRight) {
                const temp = findRight[1];
                const name = temp[0].toLowerCase() + temp.substring(1);
                $vm._ot_color[name] = fn;
            }
        }
    }
}

function mergeObjPropsToArray(obj) {
    const keys = Object.keys(obj);
    return keys.reduce((as, key) => {
        if (SX_NAMES.includes(key)) {
            const prop = obj[key];
            if (Array.isArray(prop)) {
                return as.concat(prop);
            } else if (typeof prop === 'string') {
                return as.concat([ prop ]);
            }
        }
        return as;
    }, []);
}

function initTheme($vm, theme) {
    const colors = {};
    const colorsItem = {};
    // 1、获取方法
    if (isDef($vm._ot_color)) {
        const otColor = $vm._ot_color;
        // 生成数据
        for (const key in otColor) {
            if (otColor.hasOwnProperty(key)) {
                const cFn = otColor[key];
                const otCs = cFn.call($vm, theme);
                if (Array.isArray(otCs)) {
                    colors[key] = otCs;
                } else if (isObj(otCs)) {
                    const tempColorsItems = {};
                    const keys = Object.keys(otCs);
                    colors[key] = keys.reduce((arrs, k) => {
                        const arr = otCs[k];
                        if (arr) {
                            if (SX_NAMES.includes(k)) {
                                if (Array.isArray(arr)) {
                                    return arrs.concat(arr);
                                } else if (isStr(arr)) {
                                    return arrs.concat([ arr ]);
                                }
                            } else {
                                if (isObj(arr)) {
                                    Object.assign(tempColorsItems, {
                                        [k]: mergeObjPropsToArray(arr),
                                    });
                                } else if (Array.isArray(arr)) {
                                    Object.assign(tempColorsItems, {
                                        [k]: arr,
                                    });
                                } else if (isStr(arr)) {
                                    Object.assign(tempColorsItems, {
                                        [k]: [ arr ],
                                    });
                                }
                            }
                        }
                        return arrs;
                    }, []);
                    colorsItem[key] = tempColorsItems;
                } else {
                    console.warn('please return array!');
                }
            }
        }
    }
    $vm._otColors = colors;
    $vm._otColorsData = colorsItem; // 多组
}

function initColors($vm) {
    const _otColorsInstance = {};
    const _otColors = $vm._otColors;
    if (_otColors) {
        Object.keys(_otColors).forEach(key => {
            const colors = _otColors[key] || [];
            _otColorsInstance[key] = colors.reduce((obj, curr) => {
                if (!otRegexName.test(curr)) {
                    curr = `ot-${curr}`;
                }
                return Object.assign(obj, {
                    [curr]: true,
                });
            }, {});
        });
    }
    const _otColorsData = $vm._otColorsData;
    if (_otColorsData) {
        Object.keys(_otColorsData).forEach(name => {
            const _otColorsDataInstance = _otColorsInstance[name];
            if (_otColorsDataInstance) {
                const otCData = _otColorsData[name];
                for (const key in otCData) {
                    if (otCData.hasOwnProperty(key)) {
                        Object.defineProperty(_otColorsDataInstance, key, {
                            enumerable: false,
                            get() {
                                const colors = otCData[key] || [];
                                const sub = colors.reduce((obj, curr) => {
                                    if (!otRegexName.test(curr)) {
                                        curr = `ot-${curr}`;
                                    }
                                    return Object.assign(obj, {
                                        [curr]: true,
                                    });
                                }, {});
                                return sub;
                            },
                            set() {
                                console.warn('do nothing!!');
                            },
                        });
                    }
                }
            }
        });
    }
    return _otColorsInstance;
}

function createMixin(options) {
    return {
        props: {
            // theme: [ String ],
            // color: {
            //     type: [ String ],
            //     default: 'default',
            // },
        },
        data() {
            return {
                border: isDef(this.$attrs.border),
                round: isDef(this.$attrs.round),
                size: isStr(this.$attrs.size) ? this.$attrs.size : '',
                theme: isStr(this.$attrs.theme) ? this.$attrs.theme : '',
                color: isStr(this.$attrs.color) ? this.$attrs.color : 'default',
            };
        },
        watch: {
            '$attrs.border': function(newV, oldV) {
                if (newV !== oldV) {
                    this.border = isDef(newV);
                }
            },
            '$attrs.round': function(newV, oldV) {
                if (newV !== oldV) {
                    this.round = isDef(newV);
                }
            },
            '$attrs.size': function(newV, oldV) {
                if (newV !== oldV) {
                    this.size = newV;
                }
            },
            '$attrs.theme': function(newV, oldV) {
                if (newV !== oldV) {
                    this.theme = newV;
                }
            },
            '$attrs.color': function(newV, oldV) {
                if (newV !== oldV) {
                    this.color = newV || 'default';
                }
            },
        },
        beforeCreate() {
            hookBeforeCreate(this);
        },
        mounted() {
            // test
            this.updateChildren()
        },
        methods: {
            updateChildren(){
                const children = this.$children;
                if (children && children.length) {
                    for (const child of children) {
                        if (this.theme && !child.theme) {
                            child.theme = this.$otTheme;
                        }
                        if (this.size && !child.size) {
                            child.size = this.$otSize;
                        }
                    }
                }
            }
        },
        computed: {
            $otTheme() {
                const theme = this.theme || options.theme || 'light';
                return theme;
            },
            $otSize() {
                const size = this.size || options.size || 'normal';
                return size;
            },
            $otColors() {
                let name = this.color || 'default';
                NAMES.includes(name) || (name = 'default');
                initTheme(this, this.$otTheme);
                const _otColorsInstance = initColors(this);
                const colors = _otColorsInstance[name] || {};
                return colors;
            },
        },
    };
}

export default createMixin;

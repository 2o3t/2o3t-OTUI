import Vue = require('vue');
import Utils = require('../libs/utils');
declare module 'vue/types/vue' {
    interface Vue {
        $otColors: object;
        $otTheme: string;
        $otSize: string;
        $otUtils: Utils;
        border: boolean;
        round: boolean;
        size: string;
        theme: string;
        color: string;
    }
}


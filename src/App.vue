<template>
  <div id="app" :class="$style.root" :theme="otTheme">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <header :class="$style.header" :theme="otTheme">
        <ot-nav :isCollapse="isCollapse" :theme="otTheme">
            <ot-logo :theme="otTheme" slot="left" icon="apple">
                <span>OT-UI</span>
            </ot-logo>
            <ot-nav-item v-for="(item) in headers" :key="item.name" :router="item.router">{{item.name}}</ot-nav-item>
            <ot-switch :theme="otTheme" slot="right" v-model="isDark" active-color="#13ce66" inactive-color="#ff4949">
                <span slot="inactive">Light</span>
                <span slot="active">Dark</span>
            </ot-switch>
        </ot-nav>
    </header>
    <div :class="$style.sidebar">
        <router-view name="sidebar"></router-view>
    </div>
    <div :class="$style.pager">
        <router-view :theme="otTheme" :class="$style.content"></router-view>
    </div>
  </div>
</template>

<script>
import Shared from './shared';
const SideBar = Shared.SideBar;
export default {
    name: 'app',
    data () {
        return {
            isCollapse: false,
            isDark: false,
        }
    },
    watch: {
        isDark(newV, oldV) {
            if (newV !== oldV && this.otStores) { // test
                this.otStores.theme = newV ? 'dark' : 'light';
            }
        }
    },
    computed: {
        headers() {
            return SideBar.header;
        },
        otTheme() {
            return this.otStores.theme;
        },
    }
}
</script>

<style lang="scss" module>
.root {
    position: relative;
    min-height: 100%;

    &[theme='dark'] {
        background-color: #000000;
    }
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.4rem;
    background-color: rgba($color: #ffffff, $alpha: .75);
    z-index: 10;

    &[theme='dark'] {
        background-color: rgba($color: #000000, $alpha: .75);
    }
}
.sidebar {
    position: fixed;
    top: 6.4rem;
    left: 0;
    width: 200px;
    bottom: 0;
    z-index: 10;
}
.pager {
    padding-left: 200px;
    padding-top: 6.4rem;
    padding-bottom: 2rem;

    .content {
        padding: 10px 10px 0px;
        box-sizing: border-box;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
}
</style>

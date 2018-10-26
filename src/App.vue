<template>
  <div id="app" :class="$style.root" :theme="$otTheme">
    <header :class="$style.header" :theme="$otTheme">
        <ot-nav :isCollapse="isCollapse" :theme="$otTheme">
            <ot-link slot="left" to="/">
                <ot-logo :theme="$otTheme" icon="gratipay">
                    <span>OT-UI</span>
                </ot-logo>
            </ot-link>
            <ot-nav-item v-for="(item) in headers" :key="item.name" :router="item.router">{{item.name}}</ot-nav-item>
            <ot-row-group :theme="$otTheme" :class="$style.right" slot="right">
                <ChangeColor ot :theme="$otTheme"></ChangeColor>
                <ot-switch :theme="$otTheme" v-model="isDark" active-color="#13ce66" inactive-color="#ff4949">
                    <span slot="inactive">Light</span>
                    <span slot="active">Dark</span>
                </ot-switch>
            </ot-row-group>
        </ot-nav>
    </header>
    <div :class="$style.sidebar">
        <router-view :theme="$otTheme" name="sidebar"></router-view>
    </div>
    <div :class="$style.pager">
        <!-- <keep-alive> -->
        <router-view :theme="$otTheme" :class="$style.content"></router-view>
        <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import ChangeColor from '@v/ChangeThemeColor';
export default {
    name: 'app',
    components: {
        ChangeColor,
    },
    data() {
        return {
            isCollapse: false,
            isDark: false,
            theme: this.$shared.Stores.theme,
        };
    },
    watch: {
        isDark(newV, oldV) {
            if (newV !== oldV) {
                this.theme = newV ? 'dark' : 'light';
            }
        },
    },
    computed: {
        headers() {
            return this.$shared.HeaderMenu;
        },
    },
};
</script>

<style lang="scss" module>
.root {
    position: relative;
    min-height: 100%;

    &[theme='dark'] {
        background-color: #242424;
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
        background-color: rgba($color: #242424, $alpha: .75);
    }

    .right {
        vertical-align: middle;
    }
}
.sidebar {
    position: fixed;
    top: 6.4rem;
    left: 0;
    width: 20rem;
    bottom: 0;
    z-index: 10;
}
.pager {
    padding-left: 20rem;
    padding-top: 6.4rem;
    padding-bottom: 2rem;

    .content {
        padding: 10px 30px 0px;
        box-sizing: border-box;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
}
</style>

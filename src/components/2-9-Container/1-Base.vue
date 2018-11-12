<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false" :fixable="false">
            <ot-container>
                <ot-header>Header</ot-header>
                <ot-main>Main</ot-main>
            </ot-container>

            <ot-container>
                <ot-header>Header</ot-header>
                <ot-main>Main</ot-main>
                <ot-footer>Footer</ot-footer>
            </ot-container>

            <ot-container>
                <ot-aside width="200px">Aside</ot-aside>
                <ot-main>Main</ot-main>
            </ot-container>

            <ot-container>
                <ot-header>Header</ot-header>
                <ot-container>
                    <ot-aside width="200px">Aside</ot-aside>
                    <ot-main>Main</ot-main>
                </ot-container>
            </ot-container>

            <ot-container>
                <ot-header>Header</ot-header>
                <ot-container>
                    <ot-aside width="200px">Aside</ot-aside>
                    <ot-container>
                        <ot-main>Main</ot-main>
                        <ot-footer>Footer</ot-footer>
                    </ot-container>
                </ot-container>
            </ot-container>

            <ot-container>
                <ot-aside width="200px">Aside</ot-aside>
                <ot-container>
                    <ot-header>Header</ot-header>
                    <ot-main>Main</ot-main>
                </ot-container>
            </ot-container>

            <ot-container>
                <ot-aside width="200px">Aside</ot-aside>
                <ot-container>
                    <ot-header>Header</ot-header>
                    <ot-main>Main</ot-main>
                    <ot-footer>Footer</ot-footer>
                </ot-container>
            </ot-container>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>

<style lang="scss" scoped>
.ot-header,
.ot-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 6em;
}

.ot-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 20em;
}

.ot-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 16em;
}

.ot-row-group__childs>.ot-container {
  margin-bottom: 40px;
}

.ot-container:nth-child(5) .ot-aside,
.ot-container:nth-child(6) .ot-aside {
  line-height: 26em;
}

.ot-container:nth-child(7) .ot-aside {
  line-height: 32em;
}
</style>

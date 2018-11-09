<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" vertical>
            <ot-row-group>
                <ot-dropdown :list="dropdownList" placement="top-start">
                    <ot-button border>Top-Start Long Long</ot-button>
                </ot-dropdown>
                <ot-dropdown :list="dropdownList" placement="top">
                    <ot-button border>Top Long Long</ot-button>
                </ot-dropdown>
                <ot-dropdown :list="dropdownList" placement="top-end">
                    <ot-button border>Top-End Long Long</ot-button>
                </ot-dropdown>
            </ot-row-group>
            <ot-row-group>
                <ot-dropdown :list="dropdownList" placement="bottom-start">
                    <ot-button border>Bottom-Start (Long Long)</ot-button>
                </ot-dropdown>
                <ot-dropdown :list="dropdownList" placement="bottom">
                    <ot-button border>Bottom (Long Long)</ot-button>
                </ot-dropdown>
                <ot-dropdown :list="dropdownList" placement="bottom-end">
                    <ot-button border>Bottom-End (Long Long)</ot-button>
                </ot-dropdown>
            </ot-row-group>
            <ot-row-group>
                <ot-dropdown :list="dropdownList" placement="left-start">
                    <ot-button border>Left-Start (Long Long)</ot-button>
                </ot-dropdown>
                <ot-dropdown :list="dropdownList" placement="left">
                    <ot-button border>Left (Long Long)</ot-button>
                </ot-dropdown>
                <ot-dropdown :list="dropdownList" placement="left-end">
                    <ot-button border>Left-End (Long Long)</ot-button>
                </ot-dropdown>
            </ot-row-group>
            <ot-row-group>
                <ot-dropdown :list="dropdownList" placement="right-start">
                    <ot-button border>Right-Start (Long Long)</ot-button>
                </ot-dropdown>
                <ot-dropdown :list="dropdownList" placement="right">
                    <ot-button border>Right (Long Long)</ot-button>
                </ot-dropdown>
                <ot-dropdown :list="dropdownList" placement="right-end">
                    <ot-button border>Right-End (Long Long)</ot-button>
                </ot-dropdown>
            </ot-row-group>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            dropdownList: [ '我是大名', '我是二名', '我是小明' ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>

<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-dropdown :list="dropdownList">
                <ot-button>Dropdown Hover</ot-button>
            </ot-dropdown>
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

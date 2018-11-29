<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-dropdown custom>
                <ot-button border>Custom Dropdown</ot-button>
                <div slot="dropdown">
                    <ot-row-group vertical>
                        <div>1111</div>
                        <div>2222</div>
                        <div>3333</div>
                    </ot-row-group>
                </div>
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

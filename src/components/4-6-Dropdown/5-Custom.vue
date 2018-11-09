<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-dropdown custom>
                <ot-button border>Custom Dropdown</ot-button>
                <div slot="dropdown">
                    <ot-row-group vertical>
                        <ot-tag color="default" circle>Default</ot-tag>
                        <ot-tag color="primary">Primary</ot-tag>
                        <ot-tag color="success" circle>Success</ot-tag>
                        <ot-tag color="warning">Warning</ot-tag>
                        <ot-tag color="danger" circle>Danger</ot-tag>
                        <ot-tag color="info">Info</ot-tag>
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

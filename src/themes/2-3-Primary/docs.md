
### 主题色

用于标识品牌的颜色, 以下列出了 `normal`、`hover`、`active`、`selected`、`disabled` 等状态.

<ot-row-group>
    <ot-color-card :value="{
            'ot-color-primary-background': true,
            'ot-color-primary-font': true,
            'ot': true,
        }"
        name="Primary Background" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-primary-background-normal': true,
            'ot-color-light-font-normal': true,
            'ot': true,
        }"
        name="Primary Background Normal" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-primary-background-hover': true,
            'ot-color-dark-font': true,
            'ot-color-primary-font-hover': true,
            'ot': true,
        }"
        name="Primary Background Hover" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-primary-background-active': true,
            'ot-color-dark-font': true,
            'ot-color-primary-font-active': true,
            'ot': true,
        }"
        name="Primary Background Active" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-primary-background-selected': true,
            'ot': true,
            'ot-color-selected': true,
        }"
        name="Primary Background Selected" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-primary-background-disabled': true,
            'ot-color-dark-font': true,
            'ot': true,
            'disabled': true,
        }"
        name="Primary Background Disabled" white-array black-array round>
    </ot-color-card>
</ot-row-group>


### 原色

一切皆源自于原色. 原色又分为 'light' 和 'dark' 两个派系.

<ot-notice>
开发中使用的 `原色装饰符(default)`, 会在其它模式下自动变为相应的其他颜色.
</ot-notice>

### 亮色系 (Light)

以下使用 'light' 模式来展示, 列出了 `normal`、`hover`、`active`、`selected`、`disabled` 等状态.

<ot-notice color="info">
以下亮色系内容请在右上角切换为 Dark 模式, 进行观看.
</ot-notice>

<ot-row-group>
    <ot-color-card :value="{
            'ot-color-light-background': true,
            'ot-color-light-font': true,
            'ot': true,
        }"
        name="Light Background" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-light-background-normal': true,
            'ot-color-light-font': true,
            'ot': true,
        }"
        name="Light Background Normal" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-light-background-hover': true,
            'ot-color-light-font': true,
            'ot': true,
        }"
        name="Light Background Hover" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-light-background-active': true,
            'ot-color-light-font': true,
            'ot': true,
        }"
        name="Light Background Active" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-light-background-selected': true,
            'ot': true,
            'ot-color-selected': true,
        }"
        name="Light Background Selected" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-light-background-disabled': true,
            'ot-color-light-font': true,
            'ot': true,
            'disabled': true,
        }"
        name="Light Background Disabled" white-array black-array round>
    </ot-color-card>
</ot-row-group>



### 暗色系 (Dark)

以下使用 'dark' 模式来展示, 列出了 `normal`、`hover`、`active`、`selected`、`disabled` 等状态.

<ot-notice color="info">
以下暗色系内容请在右上角切换为 Light 模式, 进行观看.
</ot-notice>

<ot-row-group>
    <ot-color-card :value="{
            'ot-color-dark-background': true,
            'ot-color-dark-font': true,
            'ot': true,
        }"
        name="Dark Background" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-dark-background-normal': true,
            'ot-color-dark-font': true,
            'ot': true,
        }"
        name="Dark Background Normal" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-dark-background-hover': true,
            'ot-color-dark-font': true,
            'ot': true,
        }"
        name="Dark Background Hover" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-dark-background-active': true,
            'ot-color-dark-font': true,
            'ot': true,
        }"
        name="Dark Background Active" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-dark-background-selected': true,
            'ot': true,
            'ot-color-selected': true,
        }"
        name="Dark Background Selected" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-dark-background-disabled': true,
            'ot-color-dark-font': true,
            'ot': true,
            'disabled': true,
        }"
        name="Dark Background Disabled" white-array black-array round>
    </ot-color-card>
</ot-row-group>


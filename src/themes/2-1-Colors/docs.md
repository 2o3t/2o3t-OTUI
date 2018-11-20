
<ot-notice color="info">
以下内容开发时, 请先使用 `v-bind`, 冲突时再选用 `v-ot-bind={}` 进行配置. 如果需要丢弃原组件配置则使用 `:ot-bind={}` .
</ot-notice>

### 原色

一切皆源自于原色.

<ot-notice>
开发中使用的 `原色装饰符`, 会在其它模式下自动变为相应的其他颜色.
</ot-notice>

<ot-row-group>
    <ot-color-card :value="{
            'ot-color-light-background-normal': true,
            'ot-color-light-font-normal': true,
            'ot': true,
        }"
        name="Light Color" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-dark-background-normal': true,
            'ot-color-dark-font-normal': true,
            'ot': true,
        }"
        name="Dark Color" white-array black-array round>
    </ot-color-card>
</ot-row-group>


### 主题色

用于标识品牌的颜色.

<ot-row-group>
    <ot-color-card :value="{
            'ot-color-primary-background-normal': true,
            'ot': true,
        }"
        name="Primary Color" white-array black-array round>
    </ot-color-card>
</ot-row-group>

### 辅助色

用于标识状态的按钮、提示信息等。

<ot-row-group>
    <ot-color-card :value="{
            'ot-color-success-background-normal': true,
            'ot': true,
        }"
        name="Success Color" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-danger-background-normal': true,
            'ot': true,
        }"
        name="Danger Color" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-warning-background-normal': true,
            'ot': true,
        }"
        name="Warning Color" white-array black-array round>
    </ot-color-card>
    <ot-color-card :value="{
            'ot-color-info-background-normal': true,
            'ot': true,
        }"
        name="Info Color" white-array black-array round>
    </ot-color-card>
</ot-row-group>


### 中性色

用于标识中性不变的颜色.

<ot-row-group>
    <ot-color-card :value="{
            'ot-color-grey-background-normal': true,
            'ot': true,
        }"
        name="Grey Color" white-array black-array round>
    </ot-color-card>
</ot-row-group>

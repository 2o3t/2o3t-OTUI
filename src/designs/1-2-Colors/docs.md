

### 主色

用于标识品牌颜色.

<ot-row-group>
    <ot-color-card value="#207FF6" name="Primary Color" white-array black-array round></ot-color-card>
    <ot-color-card value="#4D99FB" name="Primary Color-Hover" white-array black-array round></ot-color-card>
    <ot-color-card value="#1D72DD" name="Primary Color-Click" white-array black-array round></ot-color-card>
    <ot-color-card value="#A6CCFB" name="Primary Color-Disabled" white-array black-array round></ot-color-card>
</ot-row-group>

### 辅助色

用于标识状态的按钮、提示信息等。

<ot-row-group>
    <ot-color-card value="#37C385" name="Success Color" white-array black-array round></ot-color-card>
    <ot-color-card value="#FF5252" name="Danger Color" white-array black-array round></ot-color-card>
    <ot-color-card value="#FFCC00" name="Warning Color" white-array black-array round></ot-color-card>
    <ot-color-card value="#36AEFB" name="Info Color" white-array black-array round></ot-color-card>
</ot-row-group>

### 中性色

用于文本、背景、边框等。

<ot-row-group :flex="false">
    <ot-color-card value="#FFFFFF" name="Grey Color" white-array :black-array="[0, 2, 4, 8, 15, 25, 45, 65, 85, 100]" round horizontal>
    </ot-color-card>
</ot-row-group>

中性色使用说明

| 使用场景 | 标题颜色 | 正文颜色 | 次文本色 | 禁用颜色 | 边框用色 | 分割线色 | 背景用色 | 表头背景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 浅色背景下 | Black 85% | Black 65% | Black 45% | Black 25% | Black 15% | Black 8% | Black 4% | Black 2% |
| 深色背景下 | White 100% | White 85% | White 65% | White 45% | White 25% | White 15% | White 8% | White 4% |


### 调色板

为了更灵活的进行颜色搭配，使用上述提到的 品牌色 和 辅助色 作为主色，形成一条条完整的渐变色板。

<ot-row-group>
    <ot-color-card value="#207FF6" name="Primary Color" round></ot-color-card>
    <ot-color-card value="#37C385" name="Success Color" round></ot-color-card>
    <ot-color-card value="#FF5252" name="Danger Color" round></ot-color-card>
    <ot-color-card value="#FFCC00" name="Warning Color" round></ot-color-card>
    <ot-color-card value="#36AEFB" name="Info Color" round></ot-color-card>
</ot-row-group>


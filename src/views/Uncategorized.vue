<template>
    <div :class="$style.root" :theme="$otTheme">

        <ot-section :theme="$otTheme" label="OT-Table">
            <ot-row-group :theme="$otTheme" :fixable="false">
                <ot-color-rule-table name="light" shuxing="font">
                </ot-color-rule-table>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Table">
            <ot-row-group :theme="$otTheme" :fixable="false">
                <ot-table-ui>
                    <tbody>
                        <tr style="font-size: 24px;">
                            <td style="opacity: 0.45;">主标题</td>
                            <td>二圆与三土</td>
                            <!-- <td>Main Head</td> -->
                            <td>2O3T-UIKIT</td>
                            <td>24px Extra Large</td>
                        </tr>
                        <tr style="font-size: 18px;">
                            <td style="opacity: 0.45;">标题</td>
                            <td>二圆与三土</td>
                            <!-- <td>Sub Head</td> -->
                            <td>2O3T-UIKIT</td>
                            <td>18px Large</td>
                        </tr>
                        <tr style="font-size: 16px;">
                            <td style="opacity: 0.45;">小标题</td>
                            <td>二圆与三土</td>
                            <!-- <td>Head</td> -->
                            <td>2O3T-UIKIT</td>
                            <td>16px Normal</td>
                        </tr>
                        <tr style="font-size: 14px;">
                            <td style="opacity: 0.45;">表头</td>
                            <td>二圆与三土</td>
                            <!-- <td>Table Head</td> -->
                            <td>2O3T-UIKIT</td>
                            <td>14px Bold</td>
                        </tr>
                        <tr style="font-size: 14px;">
                            <td style="opacity: 0.45;">正文</td>
                            <td>二圆与三土</td>
                            <!-- <td>Text</td> -->
                            <td>2O3T-UIKIT</td>
                            <td>14px Base</td>
                        </tr>
                        <tr style="font-size: 12px;">
                            <td style="opacity: 0.45;">辅助文字</td>
                            <td>二圆与三土</td>
                            <!-- <td>Small Text</td> -->
                            <td>2O3T-UIKIT</td>
                            <td>12px Small</td>
                        </tr>
                        <tr style="font-size: 10px;">
                            <td style="opacity: 0.45;">辅助文字(小)</td>
                            <td>二圆与三土</td>
                            <!-- <td>Mini Text</td> -->
                            <td>2O3T-UIKIT</td>
                            <td>10px Mini</td>
                        </tr>
                    </tbody>
                </ot-table-ui>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Card">
            <ot-row-group :theme="$otTheme">
                <ot-card round>
                    <div slot="top" style="display: table-cell; height: 9em;">
                        <div style="font-size: 48px;">二圆与三土</div>
                    </div>
                    <div slot="bottom" style="display: table-cell; height: 3em;">
                        <div>苹方 / PingFang SC</div>
                        <div>MacOS, IOS 优选字体</div>
                    </div>
                </ot-card>
                <ot-card>
                    <div slot="top" style="display: table-cell; height: 9em;">
                        <div style="font-size: 48px;">二圆与三土</div>
                    </div>
                    <div slot="bottom" style="display: table-cell; height: 3em;">
                        <div>冬青黑体 / Hiragino Sans GB</div>
                        <div>MacOS备选字体字体</div>
                    </div>
                </ot-card>
                <ot-card>
                    <div slot="top" style="display: table-cell; height: 9em;">
                        <div style="font-size: 48px;">{{require('@assets/logo.svg')}}</div>
                    </div>
                    <div slot="bottom" style="display: table-cell; height: 3em;">
                        <div>微软雅黑 / Microsoft YaHei</div>
                        <div>Windows平台和次级备选字体</div>
                    </div>
                </ot-card>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Color-Card">
            <ot-row-group :theme="$otTheme" :flex="false">
                <ot-color-card value="#FFFFFF" name="Grey Color" whiteArray :blackArray="[0, 2, 4, 8, 15, 25, 45, 65, 85, 100]" round horizontal></ot-color-card>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-color-card value="#207FF6" name="Primary Color" :whiteArray="[]" blackArray round></ot-color-card>
                <ot-color-card value="#37C385" name="Success Color" :whiteArray="[]" blackArray></ot-color-card>
                <ot-color-card value="#FF5252" name="Danger Color" :whiteArray="[]" blackArray></ot-color-card>
                <ot-color-card value="#FFCC00" name="Warning Color" :whiteArray="[]" blackArray></ot-color-card>
                <ot-color-card value="#36AEFB" name="Info Color" :whiteArray="[]" blackArray></ot-color-card>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-color-card value="#207FF6" name="Primary Color" round></ot-color-card>
                <ot-color-card value="#37C385" name="Success Color"></ot-color-card>
                <ot-color-card value="#FF5252" name="Danger Color"></ot-color-card>
                <ot-color-card value="#FFCC00" name="Warning Color"></ot-color-card>
                <ot-color-card value="#36AEFB" name="Info Color"></ot-color-card>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Table">
            <ot-row-group :theme="$otTheme" :fixable="false">
                <ot-table :list="tableList">
                    <ot-table-column name="name" label="名称"></ot-table-column>
                    <ot-table-column name="age" label="年龄"></ot-table-column>
                    <ot-table-column name="address" label="地址"></ot-table-column>
                    <ot-table-column name="other" label="其它"></ot-table-column>
                </ot-table>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Tip">
            <ot-row-group :theme="$otTheme">
                <ot-tip :theme="$otTheme">
                    <span>Hover</span>
                    <div slot="tip">
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                    </div>
                </ot-tip>
            </ot-row-group>
        </ot-section>

    </div>
</template>

<script>
export default {
    name: 'uncategorized-page',
    data() {
        return {
            alertTitle: 'Notice: Balabala...',
        };
    },
    computed: {
        tableList() {
            const list = [];
            for (let i = 0; i < 10; i++) {
                list.push({
                    name: `name_${i}`,
                    age: `age${i}`,
                    address: `address_${i}`,
                    other: `other_${i}`,
                });
            }
            return list;
        },
    },
};
</script>

<style lang="scss" module>
.root {
  padding: 10px 10px 30px;
  box-sizing: border-box;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

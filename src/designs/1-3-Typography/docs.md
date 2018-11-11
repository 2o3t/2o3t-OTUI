

### 中文字体

主要使用苹方和微软雅黑,平台端设计稿可以采用 PingFang但 Microsoft YaHei 视觉体量偏大，且只有 Regular 与 Bold设计中需要注意。

<ot-row-group>
    <ot-card round>
        <div slot="top" style="display: table-cell; height: 9em;">
            <div style="font-size: 48px;">{{ imgChinesePingFangFont }}</div>
        </div>
        <div slot="bottom" style="display: table-cell; height: 3em;">
            <div>苹方 / PingFang SC</div>
            <div>MacOS, IOS 优选字体</div>
        </div>
    </ot-card>
    <ot-card round>
        <div slot="top" style="display: table-cell; height: 9em;">
            <div style="font-size: 48px;">{{ imgChineseHiraginoSansFont }}</div>
        </div>
        <div slot="bottom" style="display: table-cell; height: 3em;">
            <div>冬青黑体 / Hiragino Sans GB</div>
            <div>MacOS备选字体字体</div>
        </div>
    </ot-card>
    <ot-card round>
        <div slot="top" style="display: table-cell; height: 9em;">
            <div style="font-size: 48px;">{{ imgChineseYaHeiFont }}</div>
        </div>
        <div slot="bottom" style="display: table-cell; height: 3em;">
            <div>微软雅黑 / Microsoft YaHei</div>
            <div>Windows平台和次级备选字体</div>
        </div>
    </ot-card>
</ot-row-group>

### 英文／数字字体

主要使用英文字体和数字字体设计中。

<ot-row-group>
    <ot-card round>
        <div slot="top" style="display: table-cell; height: 9em;">
            <div style="font-size: 48px;">{{ imgEnglishHelveticaNeueFont }}</div>
        </div>
        <div slot="bottom" style="display: table-cell; height: 3em;">
            <div>Helvetica Neue</div>
            <div>优选字体</div>
        </div>
    </ot-card>
    <ot-card round>
        <div slot="top" style="display: table-cell; height: 9em;">
            <div style="font-size: 48px;">{{ imgEnglishHelveticaFont }}</div>
        </div>
        <div slot="bottom" style="display: table-cell; height: 3em;">
            <div>Helvetica</div>
            <div>备选字体字体</div>
        </div>
    </ot-card>
    <ot-card round>
        <div slot="top" style="display: table-cell; height: 9em;">
            <div style="font-size: 48px;">{{ imgEnglishArialFont }}</div>
        </div>
        <div slot="bottom" style="display: table-cell; height: 3em;">
            <div>Arial</div>
            <div>次级备选字体</div>
        </div>
    </ot-card>
</ot-row-group>

### 字体使用规范

对于字号，默认使用 14px。多数情况下，只出现 regular 以及 medium 的两种字体重量，在英文字体加粗的情况下会采用 semibold 的字体重量。

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

### 字体行高

英文字体的行高通常是字号的 1.2em 以上，而中文字体由于字符密实而且高度一致，所以需要更大的行高。通常中文字体的行高统一在 1.5em，通常中文字体的行高统一在 1.5em，及字号的1.5 倍（遇奇 ➕ 1 凑偶）。

<img :src="imgFontSizeAndLineHeight">

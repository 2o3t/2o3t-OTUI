<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-markdown :content="markdownDoc" dangerouslyUseHTMLString :data="injectData"></ot-markdown>
    </ot-section>
</template>

<script>
import DOC from './docs.md';
export default {
    data() {
        return {
            markdownDoc: DOC,

            injectData: {
                imgChinesePingFangFont: '二圆与三土',
                imgChineseHiraginoSansFont: '二圆与三土',
                imgChineseYaHeiFont: '二圆与三土',

                imgEnglishHelveticaNeueFont: '2O3T-UIKIT',
                imgEnglishHelveticaFont: '2O3T-UIKIT',
                imgEnglishArialFont: '2O3T-UIKIT',

                imgFontSizeAndLineHeight: require('@assets/designs/typography/fontSize&lineHeight.png'),
            },
        };
    },
};
</script>

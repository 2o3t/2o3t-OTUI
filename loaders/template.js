const regex = /<%=(\s*)__otSourceCode__(\s*)=%>/;
const deleteRegex = /(.*)<%=(\s*)__otSourceCode__(\s*)=%>(.*)/;
const deleteRegex2 = /\s+:code="\w+">/;
module.exports = function (source) {
    // 赋值源码
    const _sourceCode = String.prototype.trim.call(source).replace(deleteRegex, '').replace(deleteRegex2, '>');
    return source.replace(regex, encodeURIComponent(_sourceCode));
}

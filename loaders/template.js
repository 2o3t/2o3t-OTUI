const regex = /<%=(\s*)\${'otSourceCode'}(\s*)=%>/;
const deleteRegex = /(.*)<%=(\s*)\${'otSourceCode'}(\s*)=%>(.*)\n/;
const deleteRegex2 = /\s+:code="\w+">/;
const deleteRegex3 = /\s+:theme="\$\w+"/igm;

module.exports = function(source) {
    // 赋值源码
    const _sourceCode = String.prototype.trim.call(source)
        .replace(deleteRegex, '')
        .replace(deleteRegex2, '>')
        .replace(deleteRegex3, '');
    return source.replace(regex, encodeURIComponent(_sourceCode));
};

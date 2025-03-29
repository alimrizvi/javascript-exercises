const reverse_string = function (string) {
    let r = ''
    for (let i=string.length-1;i>=0;i--) {
        r+=string[i]
    }
    return r
}

const palindromes = function (string) {
    processedString = string.toLowerCase()
    processedString = processedString.replace(/[^\w]/g, "")
    return reverse_string(processedString) == processedString
};


// Do not edit below this line
module.exports = palindromes;


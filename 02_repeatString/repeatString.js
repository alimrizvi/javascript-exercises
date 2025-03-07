const repeatString = function(string,num) {
    if (num > 0) {
        let repeatedString = string        
        for (let i=0;i<num-1;i++) {
            repeatedString+=string
        }

        return repeatedString
    }
    else if (num == 0) {return ""}
    else {return "ERROR"};

};

// Do not edit below this line
module.exports = repeatString;

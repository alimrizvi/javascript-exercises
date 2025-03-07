const sumAll = function(num1,num2) {
    let start=num1
    let end=num2
    // console.log(typeof num1)
    if ((num1>=0)&(num2>=0)&(Number.isInteger(num1))&(Number.isInteger(num2))) {
        if (num1>num2) {
            start=num2
            end=num1
        }
        let total=0
        for (let i=start;i<=end;i++) {total+=i}
        return total
    }
    else {return 'ERROR'};
};

// Do not edit below this line
module.exports = sumAll;

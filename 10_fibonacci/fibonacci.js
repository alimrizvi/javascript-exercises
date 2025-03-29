const fibonacci = function(number) {
    let fib_start = [0,1]
    number = +number
    if (number < 0) {return 'OOPS'}
    for (let i=1;i<=number;i++) {
        to_add = fib_start[i-1]+fib_start[i]
        fib_start.push(to_add)
    }
    console.log(fib_start)
    return fib_start[number]

};

// Do not edit below this line
module.exports = fibonacci;

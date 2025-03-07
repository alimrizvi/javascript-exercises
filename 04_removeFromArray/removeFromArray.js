const removeFromArray = function(array,...args) {
    for (let i=0;i<args.length;i++) {
        toRemove = args[i]
        while (array.includes(toRemove)){
            position = array.indexOf(toRemove)
            splicedArray = array.splice(position,1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

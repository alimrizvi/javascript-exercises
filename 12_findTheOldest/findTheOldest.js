const findTheOldest = function(people) {
    const oldest_first = people.sort(function(a,b) {
        const aAge = (!a.yearOfDeath ? new Date().getFullYear() : a.yearOfDeath) - a.yearOfBirth;
        const bAge = (!b.yearOfDeath ? new Date().getFullYear() : b.yearOfDeath) - b.yearOfBirth;
        return aAge < bAge ? 1 : -1;
    })
    // const oldest = oldest_first[0].name
    console.log(oldest_first[0].name)
    return oldest_first[0]
};

// Do not edit below this line
module.exports = findTheOldest;

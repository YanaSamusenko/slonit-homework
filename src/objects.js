const obj = {
    name : 'John',
    like : 46,
    friends : 7,
    projects : 3
}

function sumOfNumFields(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

console.log(sumOfNumFields(obj));



function getSortedKeys(obj) {
    let arr = [];
        for (let key in obj) {
            if (typeof obj[key] === 'number') { 
            arr.push(key);
        }
    }
    return arr.sort((a, b) => obj[b] - obj[a]);
}

console.log(getSortedKeys(obj));

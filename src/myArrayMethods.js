const mySlice = (arr, start = 0, end = arr.length) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

const myIndexOf = (arr, item, from = 0) => {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

const myIncludes = (arr, item, from = 0) => {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}




const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(mySlice(arr, 2, 5));
console.log(myIndexOf(arr, 2));
console.log(myIncludes(arr, 2));
console.log(myIncludes(arr, 11));
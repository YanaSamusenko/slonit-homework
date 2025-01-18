function sumArrayElements(array) {
    let sum = 0;
    array.forEach(element => {
      sum += element;
    });
    return sum;
  }
  
  let numbers = [10000, 20000, 30000];
  console.log(sumArrayElements(numbers));
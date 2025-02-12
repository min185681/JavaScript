function findEvens(arr) {
    let evens = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(arr[i]); // 짝수만 추가
      }
    }
  
    return evens;
  }
  
  console.log(findEvens([1, 2, 3, 4, 5, 6, 7, 8]));
// 문제 3: 객체에서 모든 키와 값 출력하기
// 설명:
// 주어진 객체의 모든 키와 값을 출력하는 함수를 작성하세요.

// 예제 입력:



const person = {
    name: "Alice",
    age: 25,
    city: "Seoul"
  };
  
  function printObject() {
      const result = Object.keys(person);
  
      result.forEach(key => {
          console.log(`${key} : ${person[key]}`)
      });
  }
  
  
  printObject(person);
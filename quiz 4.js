const company = {
    name: "TechCorp",
    employees: {
      manager: { name: "Alice", age: 40 },
      developer: { name: "Bob", age: 28 },
      intern: { name: "Charlie", age: 22 }
    }
  };


//이 객체에서 "Bob"의 역할(role)을 찾아서 출력하는 코드를 작성하세요.
//즉, "developer"라는 문자열을 출력해야 합니다.
let result = "";
const roles = Object.keys(company.employees);

roles.forEach((role) => {
  if(company.employees[role].name == "Bob") {
    result = role;
  }
});

console.log(result);


// let result = "";
// const role = Object.keys(company.employees).forEach((role) => {
//   if (company.employees[role].name == "Bob") {
//     result = role;
//   }
// });

// console.log(result);

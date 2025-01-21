/* 1일차
//var name = "John"; //var는 보안에 문제성이 있어서 let키워드로 대체됨.
//var age = 25;
//var carear = 3;
//var phoneNumber = "01012345678";

// console.log(`Hello world! my age is ${age}`); (~이거 중요하다!!)

// age = age -2;

// console.log(`Hello world! my age is ${age}`);

// const gender = "male";

// console.log(`gender = ${gender}`);

// gender = "female";

// console.log(`gender = ${gender}`);

// function 내함수(입력값1, 입력값2) {
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
//     console.log(입력값1, 입력값2);
// }

// 내함수(1234, 5678); //5678은 무시를 하고 실행시킨다

// function 함수(a, b) {
//     return a + b;
// }

// const result = 함수(1, 2);

// console.log(result);


// function 함수(a, b) {
//     console.log(`3 + 7 = ${a + b}`)
//     console.log(`3 - 7 = ${a - b}`)
//     console.log(`3 * 7 = ${a * b}`)
//     console.log(`3 / 7 = ${a / b}`)

// }

 함수(3, 7);
*/

/* 2일차

function 숫자(num) {
    if (num % 2 == 0) {
        console.log(`${num}은 짝수 입니다.`)
    } else {
        console.log(`${num}은 홀수 입니다.`)
    }
}

숫자(7);

//9 * 9 부터 1 * 1까지 구구단
for(let i = 9; i > 0; i--) {
    for(let j = 9; j > 0; j--){
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

// 별 순서대로 나열하기
let result = "";

function star(count) {
    for(let i = 1; i <= count; i++){
        for(let j = 1; j <= i; j++){
            result += "*";
        }
        console.log(result);
        result ="";
    }
}

star(5);

// 별 순서대로 나열하기(거꾸로)
let result = "";

function star(count) {
    for(let i = 1; i <= count; i++){
        for(let j = count; j >= i; j--){ //여기 조건도 바꿔라 빡대가리야
            result += "*";
        }
        console.log(result);
        result ="";
    }
}

star(5);

 */

/* 3일차
const 규도 = ["엄마생각빌라", "301호" ];

console.log(규도);

const player = {
    id : "속초 감자 무봤나",
    email : "teho24@potato.com",
    level : 1234,
    FriendList : ["김민식", "고은준", "규선생", "멍청이"] 
}

console.log(player);


forEachs는 반복문을 조금더 간단하게 만들수 있는 방법 중에 하나이다. 순서는 name, index, orign 순서입니다
사용방법은:
const names = ["이름", "이름2", "이름3"];

names.forEach((name) => {
    console.log(name);
});

const obj = {
    name : "John",
    age : 30,
    job : "developer",
};
console.log(obj["name"]); //이거는 name의 결과값을 가져오는거

const result = Object.keys(obj); //obj의 keys(name, age, job)을 가져와서 result에 저장

result.forEach((key) => { 
    console.log(`${key} : ${obj[key]}` ) //key값을 하나하나 가져와서 순서대로 key : values를 출력한다(name : John하고 age : 30이런식으로 하나씩 가져와서 던져줌)
})


*/

// class Pet {
//     constructor(name, age) {
//         console.log(`IN PET CONSTRUCTOR!`)
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`
//     }
// }

// class Cat extends Pet {
//     constructor(name, age, livesLeft = 9) {
//         console.log(`IN CAT CINSTRUCTOR!`)
//         super(name, age)
//         this.livesLeft = livesLeft;
//     }
//     meow() {
//         return `MEOWWWW`
//     }
// }

// const min = new Cat(`min`, 10);

// console.log(min);
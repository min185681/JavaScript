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

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`안녕하세요, 저는 ${this.name}이고, 나이는 ${this.age} 입니다.`)
    }
}

const person = new Person("John", 30);

person.introduce();

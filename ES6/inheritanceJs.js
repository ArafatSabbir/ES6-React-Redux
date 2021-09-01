// inheritances in javascript

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }
  sayHi() {
    super.sayHi();
    console.log(`I'm a ${this.language} developer`);
  }
}

var p = new Programmer("John", 30, "JavaScript");
console.log(p.sayHi());

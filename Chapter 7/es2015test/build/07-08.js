"use strict";

function Person(name, yearCount) {
    var _this = this;

    this.name = name;
    this.age = 0;
    var incrAge = function incrAge() {
        _this.age++;
    };
    for (var i = 1; i <= yearCount; i++) {
        incrAge();
    }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : ", p1.age);
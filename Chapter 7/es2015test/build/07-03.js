"use strict";

function addContact(name, mobile) {
    var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "None";
    var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "None";
    var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "None";

    var str = "name= " + name + ", mobile=" + mobile + ", home=" + home + ", address=" + address + ", email=" + email;
    console.log(str);
}

addContact("홍길동", "010-3107-2646");
addContact("이몽룡", "010-3107-2646", "02-2231-2232", "서울시");
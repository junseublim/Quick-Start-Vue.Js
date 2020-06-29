function addContact(name, mobile, home = "None", address = "None", email = "None") {
    var str = `name= ${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
    console.log(str);
}

addContact("홍길동", "010-3107-2646");
addContact("이몽룡", "010-3107-2646", "02-2231-2232", "서울시");
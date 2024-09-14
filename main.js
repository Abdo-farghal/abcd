/*
  Class
  - Inheritance
*/

// // Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());

// class User {
//   #e;
//   constructor(username, name) {
//     this.i = username;
//     this.#e = name;
//   }
//   sayHello() {
//     return parseInt(this.#e);
//   }
// }
// let userOne = new User("elzero", "2000");
// console.log(userOne.sayHello());
// class admin extends User {
//   constructor(username, name) {
//     super(username, name);
//   }
// }
// let userTwo = new admin("elzero", "4000");
// console.log(userTwo.sayHello());

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: false,
//   value: 3,
// });

// // Object.defineProperty(myObject, "c", {
// //   writable: false,
// //   enumerable: true,
// //   configurable: true, <= Cannot redefine property
// //   value: 3,
// // });

// myObject.c = 100;

// console.log(delete myObject.c);

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(myObject);
let a = "AJFA";
console.log(a.toLocaleLowerCase);
function isewfa(str) {
  let strlow = str.toLocaleLowerCase();
  let arr = strlow.split("");
  let mySet = new Set(arr);

  if (arr.length === mySet.size) {
    return true;
  } else {
    return false;
  }
}
console.log(isewfa("moOse"));
console.log("#".repeat(50));

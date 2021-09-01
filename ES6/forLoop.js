// var i;
// var sum = 0;
// for (i = 0; i < 10; i++) {
//   sum += i;
//   //console.log(i);
// }

// var arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//   console.log(i);
// }

var studentObj = { name: "John", age: 25, city: "New York" };
for (let key in studentObj) {
  console.log(key + " : " + studentObj[key]);
}

// simple array
var arr = [1, 2, 3, 4, 5];

//multidimensional array
var arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//array of objects
var arr3 = [
  {
    name: "peter",
    age: 20,
  },
  {
    name: "jane",
    age: 25,
  },
  {
    name: "mary",
    age: 30,
  },
];

//accessing array elements
console.log(arr3[1].name); //jane

//modifying array elements
arr3[2].age = 35;
console.log(arr3[2].age); //35

//adding elements to arr
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

//removing elements from arr
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

//adding elements to the beginning of arr
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]

//removing elements from the beginning of arr
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]

//sorting elements in arr
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5]

//sorting elements in arr in reverse order
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

//searching for an element in arr
console.log(arr.indexOf(4)); //3

//remove all elements from arr
arr.splice(0, arr.length);
console.log(arr); // []

// array destructuring
var arr4 = [1, 2, 3, 4, 5];
var [a, b, c, d, e] = arr4;
console.log(a); //1

//map in arr
var myMap = new Map();
myMap.set("name", "peter");
myMap.set("age", 20);
myMap.set("country", "USA");
for (var [key, value] of myMap) {
  console.log(key + ":" + value);
}

//forEach in arr
myMap.forEach((value, key) => {
  console.log(key + ":" + value);
});

//map function in arr
myMap.delete("country");
console.log(myMap); //Map { 'name' => 'peter', 'age' => 20 }

myMap.has("name"); //true
myMap.has("country"); //false
myMap.get("name"); //peter

//set in arr
var mySet = new Set();
mySet.add("peter");
mySet.add("jane");
mySet.add("peter");
mySet.add("mary");

console.log(mySet); //Set { 'peter', 'jane', 'mary' }

mySet.delete("peter"); // peter is deleted
mySet.has("peter"); //false
mySet.size; //2
mySet.clear(); //clears all elements

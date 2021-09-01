//simple function

function simpleAdd() {
  var a = 10;
  var b = 20;
  var c = a + b;
  return c;
}

//Parameterized function

function parameterizedAdd(a, b) {
  var c = a + b;
  return c;
}

// Rest Parameter Function

function restAdd(a, b, ...rest) {
  // rest is an array
  var c = a + b;
  for (var i = 0; i < rest.length; i++) {
    c += rest[i];
  }
  return c;
}

//returning a function

function returnAdd(a, b) {
  return function (x, y) {
    var c = a + b + x + y;
    return c;
  };
}

//Anonymous function

var anonAdd = function (a, b) {
  var c = a + b;
  return c;
};

//arrow function

const arrowAdd = (...arr) => {
  var c = 0;
  for (var i = 0; i < arr.length; i++) {
    c += arr[i];
  }
  return c;
};

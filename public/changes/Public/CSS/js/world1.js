// function makeMultiplier(multiplier) {
//   var myFunFunc = function (x) {
//     return multiplier * x;
//   };
  
//   return myFunFunc;
// }

// var operation = makeMultiplier(10);
// console.log(operation(10));


// function z() = { x: 5 };{
// var y = z();
// z.x = 7;
// console.log(y);
// console.log(z);
// }
// z.x = 10;
// console.log(y);
// console.log(z);

	// function Dog(name) {
	//   this.name = name;
	// }

	// Dog.prototype.bark = function () {
	//   console.log(this.name + " likes barking! Bark!");
	// }

	// var max = new Dog("Max", "Buddy");
	// max.bark();

	var array = new Array();
	array[0] = "yakoov";
	array[1] = 2;
	array[2] = function (name) {
		console.log("Hello " + name);
	};
	array[3] = {course: "HTML, CSS & JS"};

	console.log(array);
	array[2](array[0]);
	console.log(array[3].course);
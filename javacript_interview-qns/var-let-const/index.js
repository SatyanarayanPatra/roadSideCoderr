/******************
 * * var let const
 * * Scope
 ******************/

// var a = 10;
// console.log(a);

/**
 * TODO: Uncomment the code below to see the difference between var, let, and const.
 * * var is function scoped or globally scoped.
 */

// {
// 	var a = 5;
// }
//
// console.log(a);

/**
 * TODO: Uncomment the code below to see the difference between var, let, and const.
 * * let is block scoped.
 */
// {
// 	let b = 10;
// }
//
// console.log(b);

// {
// 	let b = 20;
// 	console.log(b);
// }

/**
 * TODO: Uncomment the code below to see the difference between var, let, and const.
 * * Variable shadowing with let and const.
 */

// function test() {
// 	let a = 'Hello';
// 	if (true) {
// 		let a = 'World';
// 		console.log(a);
// 	}
// 	console.log(a);
// }
//
// test();

/**
 * TODO: Uncomment the code below to see the difference between var, let, and const.
 * * var variables can be shadowed using let or const but not the other way around.
 */

// function test2() {
// 	var a = 5;
// 	if (true) {
// 		let a = 10;
// 		console.log(a);
// 	}
// 	console.log(a);
// }
//
// test2();
//
// function test3() {
// 	let a = 5;
// 	if (true) {
// 		var a = 10;
// 		console.log(a);
// 	}
// 	console.log(a);
// }

/**
 * TODO: Uncomment the code below to see the difference between var, let, and const.
 * * var let const declaration, redeclaration, initialization and reassignment
 */

// let a;
// let a;

// var a;
// var a;

// const a = 5;
// const a = 10;

// let a = 5;
// a = 10;

const a = 5;
a = 20;

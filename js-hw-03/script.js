//? 1 - This series of katas will introduce you to basics of doing geometry with computers.Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.Write a function calculating circumference of a Circle.Tests round answers to 6 decimal places.
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
};
class Circle extends Point{
    constructor(x){
        super(),
        this.radius=x;
    }
};

function circleCircumference(circle) {
    return 2*Math.PI*circle.radius;
}

let testPoint = new Point(10, 10);
let testCircle = new Circle(30);

// const circumference = circleCircumference(testCircle);
// console.log(circumference);

// *=====================================================================================================

//? 2 - The function giveMeFive accepts 1 parameter, obj, which is an object.Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.At the end, return your array.You should use for..in in your code, otherwise your solution may not pass this kata.

function giveMeFive(obj){
  let arr = [];
  for(let key in obj){
    if(key.length === 5){
      arr.push(key); 
    }
    if(obj[key].length === 5){
      arr.push(obj[key]); 
    }
  }
  return arr;
}

// const arrayKeysValues = giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"});
// console.log(arrayKeysValues);

// *=====================================================================================================

//? 3- This is a simple exercise to understand the feature in the javascript language called closure.The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.

function buildFun(n){
	let res = [];

	for (let i = 0; i< n; i++){
		res.push(function(){
			return i;
		})
	}
	return res;
}

// const resClosure = buildFun(5);
// console.log(resClosure[0](),resClosure[1](),resClosure[2](),resClosure[3](),resClosure[4]());

// *=====================================================================================================

//? 4- Preloaded for you in this Kata is a class Animal: Task- Define the following classes that inherit from Animal.I. SharkThe constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".II. CatThe constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:var example = new Cat("Example", 10, "Happy");example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very importantIII. DogThe Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).

//-----------------------------------------------------------
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
//----------------------------------------------------------

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0,"shark",status,);
  }
}

class Cat extends Animal {
   constructor(name, age, status) {
    super(name, age, 4, "cat", status);  
  } 
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
   constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster(){return`Hello ${this.master}`};
}

// let billy = new Shark("Billy", 3, "Alive and well");
// let cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
// let doug = new Dog("Doug", 12, "Serving his master", "Eliza");

// console.log(billy.introduce(), cathy.introduce(), doug.introduce(), doug.greetMaster());




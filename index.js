// Follow along with the examples here
// function doNothing() {}

// function sayHello() {
//     console.log("Hello");
// }
// sayHello();

// function sayHelloToGuadalupe() {
//     console.log("Hello, Guadalupe!");
// }
// sayHelloToGuadalupe();

// function sayHelloToLiz() {
//     console.log("Hello, Liz!");
//   }
//   sayHelloToLiz();

//   function sayHelloToSamip() {
//     console.log("Hello, Samip!");
//   }
//  sayHelloToSamip();

//  sayHelloToGuadalupe();
//  sayHelloToLiz();
//  sayHelloToSamip();
  
// function doSomething(thing) {
//     console.log(thing);
// }

// doSomething("anything"); //passing the argument 'anything' into our function
// doSomething("Pancakes or waffles?");
// doSomething("Waffles please!");
// doSomething("Butter and syrup?");
// doSomething("Yes, thank you!");

// function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`);
//   }
//   sayHelloTo("Guadalupe");
//   sayHelloTo("Jane"); 
//   sayHelloTo("R2-D2");
//   sayHelloTo(1);
// ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

 //console.log(firstName)

//  function say(greeting, firstName) {
//     console.log(`${greeting}, ${firstName}!`);
//   }
//   //say("Goodbye", "Julio");
//   say("Julio", "hello");
//   function say(greeting, firstName) {
//     console.log("firstName: ", firstName);
//     console.log("greeting: ", greeting);
//     console.log(`${greeting}, ${firstName}!`);
//   }

//   function add(x, y) {
//     return x + y;
//   }
//   console.log(add(1, 2));
//   console.log(add(80, 9000));

//   function say(greeting, firstName) {
//     return `${greeting}, ${firstName}!`;
//   }
//   console.log(say("Hello", "Liz"));

//   function say(greeting, firstName) {
//     console.log(`${greeting}, ${firstName}!`);
//   }
   let num1 = 10
   let  num2 = 5
    function  add(num1, num2)  {
    return num1 + num2;
   } 

//   const sum = add(num1, num2);
//   const message = `The sum of your numbers is: ${sum}.`;
     //or equivalently
  const message = `The sum of your numbers is: ${add(num1, num2)}.`;
   console.log(message)

// function say(greeting, firstName) {
//     return `${greeting}, ${firstName}!`;
//     console.log("I was called!");
//   }
//   console.log(say("Howdy", "partner"));

    //When you run that code, the return value is logged, but the console.log() 
    //inside the function body does not execute!
    //This is because return ends the execution inside the function. 
    //Nothing after the line with the return will be executed.

   // To both log and return like we want to, we can switch the order around:
//    function say(greeting, firstName) {
//     console.log("I was called!");
//     return `${greeting}, ${firstName}!`;
//   }


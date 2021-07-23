/*In JavaScript, functions are first-class objects, which means they can be:

stored in a variable, object, or array
passed as an argument to a function
returned from a function
*/

// Function definition and invocation
function speak(string) {
    console.log(string);
  }
  speak("Hello");                     // logs "Hello"
  
  // Store in a variable
  var talk = speak;
  talk("Hi");                         // logs "Hi"
  
  // Pass as an argument to a function
  // Return from a function
  function functionReturner(fn) {
    return fn;
  }
  var chat = functionReturner(talk);
  chat("Good Morning");               // logs "Good Morning"
  
  // Store in a data structure
  var myFuncs = [talk];
  myFuncs[0]("Good Afternoon");       // logs "Good Afternoon"
  
  // Owns properties
  talk.myProperty = "bananas";
  console.log(talk.myProperty);       // logs "bananas"
  

// https://medium.com/launch-school/javascript-weekly-an-introduction-to-first-class-functions-9d069e6fb137
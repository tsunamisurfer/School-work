/*A one-line arrow function will have the same logic, but shorter code:

const greet = () => "Hello" // the value right after the arrow gets returned
As you might have been able to spot, arrow functions, first, omit the word “function” but still keep the parentheses if there are no parameters.

Secondly, they add an “arrow function” symbol which is an “=” sign and a “>” sign together: “=>”.

Finally, the word “return” need not be included if there are no curly brackets: the value right after the arrow gets returned. Let’s look at another example, but with a parameter.

First, a standard function would look like this: 

const printArg = function(arg) {
  console.log(`What is the arg? It is ${arg}`)
}
And an arrow function would shorten it a bit to:

const printArg = arg => console.log(`What is the arg? It is ${arg}`)*/

const helloAgain = (firstName, lastName) => {
    const year = new Date ().getFullYear();
    return  `hello ${firstName} ${lastName} in ${year}`;
};

/* Like a standard array, the arguments object assigns all the values that were passed to the function to numbered indices, beginning with “0”. These indices can be used to access the values of the arguments using loops, as in:

function sampleFunction() {
  for (let idx = 0; idx < arguments.length; idx++) {
    console.log(arguments[idx])
  }
}
sampleFunction("Good", "Bad", "Ugly") // prints “Good”, “Bad”, “Ugly”
Notice how the keyword “arguments” is used. Using any other word, like you can with standard parameters, will not work. Also notice that the keyword “arguments” does not appear in the parentheses of the function.

Another option to handle an unknown amount of arguments in a function is to use something called a “rest parameter”. A rest parameter will essentially do the same thing as an argument object: create an array of the values passed to to the function as arguments. See example here:

function sampleFunction(...args) { //note the three dots
  console.log(args) // args is an array that lists the values you pass as arguments to the function
}

sampleFunction(1, 2, 3) // prints [1, 2, 3]
 
There are a few syntactical differences when using the rest parameter versus the argument object.

You can use any word for the rest parameter, just like a standard parameter. We chose to use the word “args” in this example.
You must include the spread operator, which is three dots “...”, before the rest parameter in the parentheses (not the body of the function)
You can use a rest parameter in arrow functions, but you must include the parentheses around the spread operator and declared variable as you would in a traditional function.*/

function sum () {
    let result = 0;
    for (let index = 0; index < arguments.length; index++)
        result += arguments[index];
    }
    return result;
}
console.log(sum(1,2,3,4,)); //prints 10

function sum (...numbers){
    let result = 0
    for(let index = 0; index < numbers.length; index++){
        result += numbers[index];
    }
    return result;
}
console.log(sum(1,2,3,4,))//prints out 10
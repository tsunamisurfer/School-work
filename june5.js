//console.error('Alert');
//console.warn('Warning');
//console.table({name: "Thomas", email: "Tsunami.surfer11@gmail.com"});

/*const sampleObject = {
  sampleKey: "sampleValue", // example of a property
  sampleMethod: function () {
    return 'I am a method that you can use!' //
  }  //example of a method
}

const returnValue = sampleObject.sampleMethod() // how you call a method and saving its return value in a variable
console.log(returnValue) // prints out “I am a method that you can use!”


const car = {
  odometer: 0, // adding a property with an initial value
  drive: function (miles) {
    this.odometer += miles // "this" refer to the object itself
  }
}
console.log(car.odometer) // prints 0
car.drive(7)
console.log(car.odometer) // prints 7
car.drive(3)
console.log(car.odometer) // prints 10

const person = {
    fname: 'Ada',
    lname: 'Lovelace',
    greet() { // a more common syntax for methods, skipping the colon and the function keyword
      return `My name is ${this.fname} ${this.lname}` "this" refer to the object itself
    }
  }
  console.log(person.greet()) // prints "My name is Ada Lovelace" */


/*  const DreamCar = {
    model: "Nissan Maxima SR",
    odometer: 0,
    drive(miles){
        this.odometer += miles;
        return `Just drove ${miles} miles, putting the Odometer at ${this.odometer}!`;
    }
    }
    console.log(DreamCar.drive(100));
    console.log(DreamCar.drive(50));

    const painter = {
        'favorite artist': "Claude Monet",
        medium: "watercolor",
        paintings: 10,
        paint(){
            this.paintings++;
        }
    
    } 

    let person = {
        name: "Thomas",
        greet(){
            console.log(`Hello, ${this.name}`)
        }
    }
    
    let adventurer = {
        type: Wizard,
        health: 100,
        heal(number){
        if (this.health < 100){
            this.health += number;
    return `${this.type} has recovered ${number} health points, putting the adventure at ${this.health} HP`;

        }else {
        return `${this.type} has full health`; 
        }
        }
    }

    /*class CustomClass { // syntax: (1) class keyword (2) class name, typically capitalized
  sampleKey = 'sampleValue' //adding sample property
  currentNumber = 0 // adding sample counter
  addNumber(num) { // adding sample method
    this.currentNumber += num
    return `Your total is now: ${this.currentNumber}`
  }
}
The class has now been created, but so far, we have not made any objects using this class. Let’s now use this class to create a new object:

const sampleObject = new CustomClass() // this creates a new object (or instance) based on the CustomClass class
Now the object with our “CustomClass” class has been created. Let’s test it:

sampleObject.addNumber(12)
sampleObject.addNumber(3)
console.log(sampleObject.currentNumber) // prints 15
console.log(sampleObject.sampleKey) // prints “sampleValue” */

/*class Recipe {
  name = 'steak';
  plate = 0
  cook(item) {
    this.plate += items;
    return `Just cook ${items} ${this.name} making the plate have ${this.plate} items!`; 
  }
}

const steak = new Recipe();
steak.cook(19);
console.log(steak.cook(19));
console.log(steak.plate);
console.log(steak.name); */

class Dog {
name = "Fido";
breed = "Boxer";
age = 4;
bark(){
  return "bow wow!";

};
play(toy) {
  return `${this.name} loves playing with a ${toy}`
}
}

const lucy = new Dog();

class Phone {
  owner = 'Steven';
  model = 'XM50';
  calls = 9;
  call(name){
    this.calls++
    return `I am making a call to ${name} from my ${model} phone`
  }
}

const blueberry = new Phone();

class VideoGame {
  genre = 'Multiplayer RPG';
  rating = 4.5;
  players = 2;
  play(number){
    if(this.players < 10) {
    this.players += number;
    return `There are ${number} of players joining the game, brining the total number of players to ${players}`
    } else {
      return `The party is full with ${This.players}players`
  }
}
}

const bionix = new VideoGame();

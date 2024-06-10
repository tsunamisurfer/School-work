//Code to help me narrow down where I want to move to using JS

class NewLife { //This is a class
    constructor (location, Pros=[], Cons =[]){ //Creates a constructor 
        
        this.location = location; //Key value for location
        this.Pros = Pros; //Key value for Pro's array
        this.Cons = Cons; //Key value for Con's array
        }
    moreLife(){ //Creates a method call more life
    return `Location: ${this.location}! Pro: ${this.Pros}. Cons: ${this.Cons}`
    } //Returns a statement
    
    }  
    
    let travel = new NewLife("Japan", ["Cost of living", " ratio of women to men", " I like the culture", " Cool modes of travel"], ["Language Barrier", "The people are racist, and usually shun outsiders."]) //Creates a variable call travel to pass arguments.
    console.log(travel.moreLife());
    let travel2 = new NewLife("UK", " I speak the language", ["the Weather!", " the cost of living.", " the food is mid!"])
    console.log(travel2.moreLife());
    let travel3 = new NewLife("Australia", "I speak the language", "the wild life")
    console.log(travel3.moreLife());
    let travel4 = new NewLife("Dubai", ["Low tax rates and high pay", " Lots of career growth and prospects."], ["Strict laws relating to religious practices", " Extreme heat during Dubai Summer", " Somewhat unstable political outlook."])
    console.log(travel4.moreLife());
    let travel5 = new NewLife("")
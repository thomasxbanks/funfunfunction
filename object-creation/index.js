"use strict"

function describe() {
    let petName = this.name || this.type // If your pet has no name, refer to it by its type
    let petActivity = this.activity || 'walk' // What does your pet like to do?
    let petSound = this.sound || 'nothing' // What does the fox say? PS Note the Beach Boys reference!
    let petHate = this.dislike || 'anything' // Does your pet hate anything?
    // Spit this to the console, brah!
    console.log(petName + " likes to " + petActivity + " and says " + petSound + " but doesn't like " + petHate)
}

const Animal = {
    dislike: 'baths', // All animals hate baths, irrespective
    describe // run teh describe function
}

const Dog = {
    type: "dog",
    activity: "run",
    sound: "woof"
}

const Corgi = {
    type: "corgi",
    sound: "yap"
}

const Alfie = {
    name: 'alfie',
    type: 'dog',
    sound: "yip yip snuffle",
    activity: 'sleep'
}

Object.setPrototypeOf(Dog, Animal) // Dog is a type of animal
Object.setPrototypeOf(Corgi, Dog) // Corgi is a type of dog
Object.setPrototypeOf(Alfie, Corgi) // Alfie is a type of corgi, which is also a type of dog

Dog.describe()
Corgi.describe()
Alfie.describe()

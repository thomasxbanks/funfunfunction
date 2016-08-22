"use strict"

function talk() {
  console.log(this)
  console.log(this.sound)
}

let animal = {
  talk,
  move: talk
}

let cat = {
  sound: 'meow!',
  move: 'walk'

}

let kiitos = {
  sound: 'meep!'
}

Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(kiitos, cat)

cat.talk()
kiitos.talk()

// My own version!
"use strict"

function behave() {
    //console.log(this)
    console.log(this.type + " likes to " + this.move + " and says " + this.sound + " but doesn't like " + this.dislike)
}

const Animal = {
    dislike: 'baths',
    behave
}


const Dog = {
    type: "dog",
    move: "run",
    sound: "woof"
}

const Captain = {
    type: "corgi",
    sound: "yap!"
}

Object.setPrototypeOf(Dog, Animal)
Object.setPrototypeOf(Captain, Dog)

Captain.behave()
Dog.behave()

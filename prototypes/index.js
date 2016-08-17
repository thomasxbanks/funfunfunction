const food = {
  init: function (type) {
    this.type = type
  },
  eat: function() {
    console.log("you ate the " + this.type)
  }
}

const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()

const carrot = Object.create(food)
carrot.init('carrot')
carrot.eat()

console.log("waffle is food", food.isPrototypeOf(waffle))
console.log("int is food", food.isPrototypeOf(654654654))
console.log("carrot is food", food.isPrototypeOf(carrot))

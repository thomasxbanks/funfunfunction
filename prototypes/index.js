const food = {
    init: function(type, method) {
        this.type = type,
        this.method = method
    },
    eat: function() {
        console.log("you eat the " + this.type)
    },
    cook: function() {
        console.log("you " + this.method + " the " + this.type)
    }
}

const waffle = Object.create(food)
waffle.init('waffle', 'griddle')
waffle.cook()
waffle.eat()

food.init('bacon', 'grill')
food.cook()
food.eat()

const carrot = Object.create(food)
carrot.init('carrot', 'boil')
carrot.cook()
carrot.eat()

food.init('eggs', 'fry')
food.cook()
food.eat()


console.log("waffle is food:", food.isPrototypeOf(waffle))
console.log("int is food:", food.isPrototypeOf(654654654))
console.log("carrot is food:", food.isPrototypeOf(carrot))

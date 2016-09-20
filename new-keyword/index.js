function Person(saying) {
  this.saying = saying
}

Person.prototype.talk = function() {
  console.log('I say:', this.saying)
}

function spawn(constructor){
  // 1
  var obj = {}
  // 2
  Object.setPrototypeOf(obj, constructor.prototype)
  // 3
  var argsArray = Array.prototype.slice.apply(arguments)


  // 4
  return constructor.apply(obj, argsArray.slice(1)) || obj
}

var crockford = spawn(Person, 'SEMICOLANS!!!1one1')
crockford.talk()

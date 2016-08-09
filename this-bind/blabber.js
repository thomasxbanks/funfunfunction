"use strict"

let talk = function() {
  console.log(this.sound)
}

let boromir = {
  blabber: talk,
  sound: "one does not simply walk into mordor!"
}

let gollum = {
  jabber: boromir.blabber,
  sound: 'my preciousssss....'
}

boromir.blabber()
gollum.jabber()

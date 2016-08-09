'use strict';

var animals = [{
    species: 'dog',
    weight: 12,
    sound: 'woof'
}, {
    species: 'rabbit',
    weight: 2
}];

for (var i = 0; i < animals.length; i++) {
    var species = animals[i].species || 'animal',
        sound = animals[i].sound || 'nothing';
    console.info("The " + species + " says " + sound + "!");
}
/**********************/

makeSound({
    species: 'cat',
    weight: 4,
    sound: 'miaow'
});

function makeSound(_ref) {
    var _ref$species = _ref.species;
    var species = _ref$species === undefined ? 'animal' : _ref$species;
    var _ref$sound = _ref.sound;
    var sound = _ref$sound === undefined ? 'nothing' : _ref$sound;

    console.info("The " + species + " says " + sound + "!");
}

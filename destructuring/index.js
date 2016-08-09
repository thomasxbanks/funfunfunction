const animals = [{
    species: 'dog',
    weight: 12,
    sound: 'woof'
},{
    species: 'rabbit',
    weight: 2
}]

for (let i = 0; i < animals.length; i++) {
    let species = animals[i].species || 'animal', sound = animals[i].sound || 'nothing'
    console.info("The " + species + " says " + sound + "!")
}
/**********************/

makeSound({
  species: 'cat',
  weight: 4,
  sound: 'miaow'
})

function makeSound({species = 'animal', sound = 'nothing'}){
  console.info("The " + species + " says " + sound + "!")
}

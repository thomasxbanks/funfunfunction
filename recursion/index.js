"use strict";
let categories = [
  {id: 'cats', parent: 'mammals'},
  {id: 'animals', parent: null},
  {id: 'labrador', parent: 'dogs'},
    {id: 'mammals', parent: 'animals'},

  {id: 'dogs', parent: 'mammals'},
  {id: 'chihuahua', parent: 'dogs'},

  {id: 'persian', parent: 'cats'},
  {id: 'siamese', parent: 'cats'}
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.id] = makeTree(categories, c.id))
  return node
}

console.log(
  JSON.stringify(makeTree(categories, null), null, 2)
)

console.log(categories)

"use strict"

function increment(input) {
    return input + 1
}

function decrement(input) {
    return input - 1
}

function double(input) {
    return input * 2
}

function halve(input) {
    return input / 2
}

let initValue = 176

let pipeline = [double, increment, halve, decrement]


let finalResult = pipeline.reduce(function(acc, fn) {
    return fn(acc)
}, initValue)

console.log('initial:', initValue, '\nresult:', finalResult)

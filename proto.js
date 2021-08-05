Array.prototype

Array.prototype.description = 'A collection of elements.'

const newArr = new Array

newArr.description


const example = [1, 2, 3, 4, 5];

Array.prototype.firstTwo = function() {
  return this.slice(0, 2)
};

example.firstTwo()



// prototype chain

const myString = "Some string."

myString.length
example.length
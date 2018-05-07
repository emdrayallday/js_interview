// every object has a prototype
// when looking for property on an object, it will look at itself first
// if it can't find the property on itself, it will look at the objects prototype, and so on and so on.



const person = {
  firstName: 'mark',
  lastName: 'johnson'
}

// kind is not on the person object so it will look at the prototype.
// if the prototype points to another object then it will look at that object
// and so on and so on


const animal = {
  kind: 'human'
}

// this links the object person to animal. ONLY IN ES6
person.__proto__ = animal

console.log(animal.isPrototypeOf(person))
if (person.kind === 'human') {
  console.log('whoop! i am a human!')
}

// Own vs inherited properties and the prototype chain.
const animal = { legs: 4, speak() { return `${this.name} makes a sound`; } };
const dog = Object.create(animal);
dog.name = "Rex";
console.log(dog.legs, dog.speak(), dog, Object.getPrototypeOf(dog) === animal, animal.isPrototypeOf(dog));
dog.legs = 3;
console.log(dog.legs, animal.legs, Object.keys(dog), delete dog.legs, dog.legs);
for (const k in dog) console.log(k, dog.hasOwnProperty(k));
Object.setPrototypeOf(dog, { legs: 8 });
console.log(dog.legs, dog.speak);
console.log(Object.getPrototypeOf({}) === Object.prototype, Object.getPrototypeOf(Object.prototype), [].__proto__ === Array.prototype);

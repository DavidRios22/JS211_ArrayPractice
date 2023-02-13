let cars = ['Ford', 'BMW', 'Mercedes', 'Lexus']

let moreCars = ['Toyota', 'Kia', 'Porsche', 'Honda']

let totalCars = cars.concat(moreCars)

let stringOfCars = totalCars.join(" ")

let carsFromString = stringOfCars.split(" ")

let carsInReverse = carsFromString.reverse()

carsInReverse.sort()

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

let reptiles = pets.slice(4, 6)

let removedReptiles = pets.splice(4, 2, 'hamster')

let removedPet = pets.pop()

pets.push(removedPet)

pets.shift(0)

pets.unshift('turtle')

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
    arr[index] = num + 2
}


numbers.forEach(addTwo)

console.log(numbers);
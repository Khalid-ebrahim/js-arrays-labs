//const foods = []

//console.log('Exercise 1 result:', foods)

//const foods = ['pizza', 'cheeseburger']

//console.log('Exercise 2 result:', foods)

//foods.unshift('taco')

//console.log('Exercise 3 result:', foods)

//const foods = ['pizza', 'cheeseburger']

//foods.unshift('taco')

//console.log(foods[0])

//const favFood = foods[1]

//console.log('Exercise 4 result:', favFood)

//const foods = ['pizza', 'cheeseburger']

//foods.unshift('taco')

//foods.splice(2, 0, 'tofu')

//console.log('Exercise 5 result:', foods)

//const foods = ['pizza', 'cheeseburger']

//foods.unshift('taco')

//foods.splice(2, 0, 'tofu')

//foods.splice(1, 1, 'sushi', 'cupcake')

//console.log('Exercise 6 result:', foods)

//const foods = ['pizza', 'cheeseburger']

//foods.unshift('taco')

//foods.splice(2, 0, 'tofu')

//foods.splice(1, 1, 'sushi', 'cupcake')

//const yummy = foods.slice(1, 3)

//console.log('Exercise 7 result:', yummy)

//const foods = ['pizza', 'cheeseburger']

//foods.unshift('taco')

//foods.splice(2, 0, 'tofu')

//foods.splice(1, 1, 'sushi', 'cupcake')

//const yummy = foods.slice(1, 3)

//const soyIdx = foods.indexOf('tofu')

//console.log('Exercise 8 result:', soyIdx)

//const foods = ['pizza', 'cheeseburger']

//foods.unshift('taco')

//foods.splice(2, 0, 'tofu')

//foods.splice(1, 1, 'sushi', 'cupcake')

//const yummy = foods.slice(1, 3)

//const soyIdx = foods.indexOf('tofu')

//const allFoods = foods.join(' -> ')

//console.log('Exercise 9 result:', allFoods)

//const foods = ['pizza', 'cheeseburger']

//foods.unshift('taco')

//foods.splice(2, 0, 'tofu')

//foods.splice(1, 1, 'sushi', 'cupcake')

//const yummy = foods.slice(1, 3)

//const soyIdx = foods.indexOf('tofu')

//const allFoods = foods.join(' -> ')

//const hasSoup = foods.includes('soup')

//console.log('Exercise 10 result:', hasSoup)

//const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
//const odds = []
//for (let i = 0; i < nums.length; i++) {
//if (nums[i] % 2 !== 0) {
//odds.push(nums[i])
//}
//}

//console.log('Exercise 11 result:', odds)

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]

const fizz = []
const buzz = []
const fizzbuzz = []
for (let i = 0; i <= nums.length; i++) {
  if (nums[i] % 3 === 0) {
    fizz.push(nums[i])
  }
  if (nums[i] % 5 === 0) {
    buzz.push(nums[i])
  }
  if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
    fizzbuzz.push(nums[i])
  }
}
console.log('  fizz:', fizz)
console.log('  buzz:', buzz)
console.log('  fizzbuzz:', fizzbuzz)

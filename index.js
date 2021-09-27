var readlineSync = require('readline-sync')
var number = parseInt(readlineSync.question("Enter a number: "))
var primeStatement = true

function primeNumber() {
  if (number === 1) {
    console.log("1 nor prime number nor composite.")
    
    return
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        primeStatement = false
        break
      }
    }
    if (primeStatement) {
      console.log(`${number} Yaa! Number you have writen ia a prime number! :)`)
    } else {
      console.log(`${number} Oops! Number you have return is not a prime number! :(`)
    }
  }
}
primeNumber()
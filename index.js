// Question 1
//Create an array
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
ages.push(7)
console.log(ages)
//loop average ages
let sum = 0
let agesAverage = ages.reduce(function(accumulator, currentValue){
    return (accumulator + currentValue)
});
console.log(agesAverage)


//Question 2
let names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let lengths = names.map(function(element){
    return element.length
});
console.log(lengths)

let namesConcat = (a, b)=> {
let result = ' '
    for(let i=0; i<b; i++){
        result +=a;
    }
    return result;
}
console.log(namesConcat(names, 1))

//Question 3
//Array.index - 1

//Question 4
//array[0]

//Question 5  and 6
let nameLengths = [3,5, 3, 5, 4, 3]
let nameSum = nameLengths.reduce(function(accumulator, currentValue){
    return (accumulator + currentValue)
});
console.log(nameSum)

//Question 7
let someFunction = (a, b) => {
    let result = ' '
    for(let i=0; i<b; i++){
        result += a;
    }
    return result;
}
console.log(someFunction('Tino',  3))

//Question 8
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName('Courtney', 'Rasmussen'))

//Question 9
let greaterThanHundred = []
if (greaterThanHundred > 100) {
    console.log('True')
} else {
    console.log('False')
}

//Question 10
function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  //Question 11
  function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  function getAverage2(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  if (getAverage>getAverage2){
    console.log('True')
  }else {
    console.log('False')
  }


  //Question 12
  function willBuyDrink ('isHotOutside', moneyInPocket)
  if ('isHotOutside', moneyInPocket>10.50){
    console.log("True")
  }else {
    console.log('False')
  }

  //Question 13
  function fullName(firstName, middleName, lastName){
    console.log(firstname, ' ', middleName, ' ', lastName)
  }
console.log('Courtney', 'Catherine', 'Rasmussen')
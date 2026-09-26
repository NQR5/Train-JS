const numbers = [4, 9, 9, 2, 7, 4];
let largest = numbers[0];
let secondLsrgerst = -1
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > largest){
        largest = numbers[i]
    }
}
for (let i = 0; i < numbers.length; i++){
    if (largest> numbers[i] && largest > secondLsrgerst){
        secondLsrgerst = numbers[i]
    }
}
console.log(secondLsrgerst);
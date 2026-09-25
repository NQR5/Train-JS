const numbers = [4, 9, 2, 12, 7];
let largest = numbers[0]
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > largest){
        largest = numbers[i]
    }
}
    console.log(largest);

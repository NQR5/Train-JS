const numbers = [3, 8, 2, 10, 5, 7];
let sum = 0 ;
for (let i = 0 ; i < numbers.length ;i++){
    if (numbers[i] > 5 ){
        sum += numbers[i]
    }
}
console.log(sum);
const numbers = [8, -3, 4, 0, 12, 2, -1];
let smallest = numbers[0]
let IsPositive = false
for (let i =1 ; i < numbers.length; i++){
    let current = numbers[i]
    if(smallest > current && current > 0){
        smallest = current
    } 

}

if (smallest < 0){
    console.log(-1);
}
else {console.log(smallest);}
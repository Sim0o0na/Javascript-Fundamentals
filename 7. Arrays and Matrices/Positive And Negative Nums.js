function positiveNegativeNumbers(input) {
    let numbers = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i]<0){
            numbers.unshift(input[i]);
        }
        if (input[i]>=0){
            numbers.push(input[i]);
        }
    }
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
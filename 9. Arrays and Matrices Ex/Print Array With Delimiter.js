function printArrayWithDelimiter(input) {
    let delimiter = input[input.length-1];
    let arrayToPrint = [];
    for (var i = 0; i < input.length-1; i++) {
        arrayToPrint.push(input[i])
    }
    console.log(arrayToPrint.join(delimiter));
}
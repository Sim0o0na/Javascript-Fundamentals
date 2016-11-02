function splitString(input) {
    let text = input[0];
    let delimiter = input[1];
    let array = text.split(delimiter);
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);

    }
}
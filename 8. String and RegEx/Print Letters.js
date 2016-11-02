function printLetters(input) {
    let inputString = Object.assign([], input[0]);
    for (var i = 0; i < inputString.length; i++) {
        console.log("str[" + i + "] -> "+inputString[i]);
    }
}
function endsWith(input) {
    let text = input[0];
    let substring = input[1];
    let lenght = substring.length;
    if (text.substring(text.length - lenght, text.length) == substring) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}
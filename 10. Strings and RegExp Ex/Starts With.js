function startsWith(input) {
    let text = input[0];
    let substring = input[1];
    let lenght = substring.length;
    if (text.substring(0, lenght) == substring){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
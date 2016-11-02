function splitString(input) {
    let text = input[0];
    let delimiter = input[1];
    let array = text.split(delimiter);
    for (var i = 0; i < array.length; i++) {
       console.log(array[i]);

    }
}



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

function capitalizeWords(input) {
    let words = input[0].split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        words[i] = capitalize(words[i]);
    }
    function capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }
    console.log(words.join(' '));
}

function captureTheNums(input) {
    let pattern = /\d+/g;
    let nums = [];
    for (var i = 0; i < input.length; i++) {
        let num = input[i].match(pattern);
        if(num){
            for (var j = 0; j < num.length; j++) {
                nums.push(num[j]);
            }
        }
    }
    console.log(nums.join(' '));
}

function findVariableNamesInSent(input) {
    let pattern = /_\w+/g;
    let variables = [];
    for (var i = 0; i < input.length; i++) {
        let variable = input[i].match(pattern);
        for (var j = 0; j < variable.length; j++) {
            variable[j] = variable[j].slice(1);
            variables.push(variable[j]);
        }
    }
    console.log(variables.join(','));
}

function wordOccurencies(input) {
    let text = input[0];
    let substring = input[1];
    var pattern1 = new RegExp("\\b" + substring + "\\b", 'ig');
    console.log(pattern1);
    let count = 0;
    let variable = pattern1.exec(text);
    while(variable){
        count++;
        variable = pattern1.exec(text);
    }
    console.log(count);
}S
function extractLinks(input) {
    let pattern =/([w]+){3,}(\.)([a-zA-Z0-9\-]+\.)(([a-z]+)\.){0,}([a-z]+)/g;
    for (var i = 0; i < input.length; i++) {
        let variable = input[i].match(pattern);
        if(variable){
            console.log(variable[0]);
        }
    }
}
function secret(input) {
    let pattern = /(\*[A-Z][a-z]+\s?)|(\+[0-9\-]{10})\s?|(![a-zA-Z0-9]+\s?)|(\_[A-Za-z0-9]+)\s?\n?/g;
    for (let i = 0; i < input.length; i++) {
        let str = input[i];
        let tempMatch = str.match(pattern);
        if(tempMatch!=null){
            tempMatch[0] = tempMatch[0].trim();
            str = str.replace(tempMatch[0],"|".repeat(tempMatch[0].length));
            input[i] = str;
        }
        console.log(input[i]);
    }
}
secret(['Agent *Ivankov was in the room when it all happened.','The person in the room was heavily armed.','Agent *Ivankov had to act quick in order.','He picked up his phone and called some unknown number.','I think it was +555-49-796','I can\'t really remember...','He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21','Then after that he disappeared from my sight.','As if he vanished in the shadows.','A moment, shorter than a second, later, I saw the person flying off the top floor.','I really don\'t know what happened there.','This is all I saw, that night.','I cannot explain it myself...']);
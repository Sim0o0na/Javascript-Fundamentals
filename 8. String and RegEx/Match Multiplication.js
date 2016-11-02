function matchMultiplication(input) {
    let pattern = /([\-0-9]+)(\s+)?(\*)(\s)?([\-0-9.]+)/g;
    for (var i = 0; i < input.length; i++) {
        var match = input[i].match(pattern);
        for (var j = 0; j < match.length; j++) {
            let numbers = match[j].split(/(\s*)?\*(\s*)?/g).filter(function(n){ return n = Number(n)});
            let temp = numbers[0]*numbers[1];
            input[i]=input[i].replace(match[j], temp);
        }
        console.log(input[i]);
    }
}
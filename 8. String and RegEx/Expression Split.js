function exprSplit(input) {
    let pattern = /[\;\(\)\\\.\,\s]/g;
    input = input[0].split(pattern);
    input = input.filter(function(n){ return n != '' });
    for (var i = 0; i < input.length; i++) {
        console.log(input[i])

    }
}
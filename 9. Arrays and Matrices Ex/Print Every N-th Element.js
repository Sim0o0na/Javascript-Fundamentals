function printEveryNelement(input) {
    let step = Number(input[input.length-1]);
    for (var i = 0; i < input.length-1; i+=step) {
        console.log(input[i]);
    }
}
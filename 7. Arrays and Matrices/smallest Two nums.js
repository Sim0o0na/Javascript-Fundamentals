function smallestTwoNums(input) {
    input.sort((a, b) => a-b);
    let small = [];
    for (var i = 0; i < 2; i++) {
        small.push(input[i])
    }
    console.log(small.join(' '));
}
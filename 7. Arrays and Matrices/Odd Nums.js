function oddNums(input) {
    let oddNums = [];
    for (var i = 0; i < input.length; i++) {
        if(i%2==1){
            oddNums.push(Number(input[i])*2);
        }
    }
    oddNums.reverse();
    console.log(oddNums.join(' '));
}
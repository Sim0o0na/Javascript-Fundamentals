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
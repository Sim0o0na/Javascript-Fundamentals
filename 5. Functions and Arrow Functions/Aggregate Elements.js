function aggregateElements(input) {
    let sum = 0;
    let sumInverse = 0;
    let concatenated = "";
    for (let i = 0; i < input.length; i++){
        sum = sum + Number(input[i]);
        sumInverse += 1/Number(input[i]);
        concatenated += input[i];
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concatenated);
}

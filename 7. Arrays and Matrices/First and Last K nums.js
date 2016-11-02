function firstAndLastKNumbers(input) {
    let k = Number(input[0]);
    let firstNumbers = [];
    let lastNumbers = [];
    for (let i = 1; i <= k; i++) {
        firstNumbers.push(Number(input[i]));
    }
    for (let i = k; i >= 1; i--) {
        lastNumbers.push(Number(input[i]));
    }
    console.log(firstNumbers.join(' '));
    console.log(lastNumbers.reverse().join(' '));
}
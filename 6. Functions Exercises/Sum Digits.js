function solve(input) {
    sumDigits(input);
    function sumDigits(input) {
        let sumInitial = 0;
        for (let i = 0; i < input.length; i++) {
            let digit = input[i];
            digit = Number(digit);
            sumInitial += digit;
        }
        console.log(sumInitial);
    }
}
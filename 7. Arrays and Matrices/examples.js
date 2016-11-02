





function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '))
    }
}

biggestElement(['3 5 7 12',
    '-1 4 33 2',
    '8 3 0 4']
)


function sumLastKNumbersSequence([a, b]) {
    let seq = [1];
    let n = Number(a);
    let k = Number(b);
    let nums = [];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = 0;
        for (var i = start; i <= end; i++) {
            sum += seq[i];

        }
        seq[current] = sum;
    }
    console.log(seq.join(' '));
}



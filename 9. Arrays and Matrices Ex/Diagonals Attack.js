function diagonalsAttack(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));

    let sumFirstDiagonal = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + matrix[i][i];
    }
    let sumSecondDiagonal = 0;
    for (var j = 0; j < matrix.length; j++) {
        sumSecondDiagonal = sumSecondDiagonal + matrix[j][matrix.length-1-j];
    }

    if (sumFirstDiagonal == sumSecondDiagonal){
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix.length; col++) {
                if(row!=col && col!=matrix.length-row-1){
                    matrix[row][col] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    }
    else
    {
        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}
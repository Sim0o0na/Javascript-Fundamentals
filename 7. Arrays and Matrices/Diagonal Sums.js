function diagonalSums(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    // printMatrix(matrix);
    let diagonals = [];
    let sumFirstDiagonal = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + matrix[i][i];

    }
    diagonals.push(sumFirstDiagonal);
    let sumSecondDiagonal = 0;
    for (var j = 0; j < matrix.length; j++) {
        sumSecondDiagonal = sumSecondDiagonal + matrix[j][matrix.length-1-j];
    }
    diagonals.push(sumSecondDiagonal);
    console.log(diagonals.join(' '));
}
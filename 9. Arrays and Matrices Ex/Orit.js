function orbit(input) {
    let dimensions = input[0].split(' ').map(Number);
    let rowsCount = dimensions[0];
    let colsCount = dimensions[1];

    let star = input[1].split(' ').map(Number);
    let starRow = star[0];
    let starCol = star[1];

    var matrix = [];
    for(var i=0; i<rowsCount; i++) {
        matrix[i] = [];
        for(var j=0; j<colsCount; j++) {
            matrix[i][j] = undefined;
        }
    }
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            matrix[row][col]=Math.max(Math.abs(starRow - row), Math.abs(starCol-col)) + 1;
        }
    }

    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
    printMatrix(matrix);
}
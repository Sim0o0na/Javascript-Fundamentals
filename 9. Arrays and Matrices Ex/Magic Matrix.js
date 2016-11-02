function magicMatrix(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    let sumRows = 0;
    let sumCols = 0;
    let equalRows = 1; //1 is true, 0 is false
    let equalCols = 1;

    //Sum elements of first row
    let sumOfRow1 = 0;
    for (var c = 0; c < matrixRows.length; c++) {
        sumOfRow1 = sumOfRow1 + Number(matrix[0][c])
    }

    //Sum elements of first col
    let sumOfCol1 = 0;
    for (var r = 0; r < matrixRows.length; r++) {
        sumOfCol1 = sumOfCol1 + Number(matrix[r][0])
    }
    for (var col = 0; col < matrixRows.length; col++) {
        for (var row = 0; row < matrixRows.length; row++){
            sumRows = sumRows + Number(matrix[row][col])
        }
        if(sumRows!=sumOfRow1){
            equalRows=0;
        }
        sumRows=0;
    }

    for (var row1 = 0; row1 < matrixRows.length; row1++) {
        for (var col1 = 0; col1 < matrixRows.length; col1++) {
            sumCols = sumCols + Number(matrix[row1][col1]);
        }
        if(sumCols!=sumOfCol1){
            equalCols=0;
        }
        sumCols=0;
    }
    if (equalRows = equalCols){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
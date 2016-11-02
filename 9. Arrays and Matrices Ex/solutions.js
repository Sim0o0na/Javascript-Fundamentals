





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
function spiralMatrix(input) {
    let splittedInput = input[0].split(' ');
    let rowsCount = splittedInput[0];
    let colsCount = splittedInput[1];
    let matrix = [[]];
    let number = 1;
    let dir = 1;
    for (var row = 0; row < rowsCount; row++) {
        if(dir = 1){
            for (var col = 0; col < colsCount; col++) {
                matrix[row][col] = number;
                number++;
            }
        }
        else{
            for (var col = colsCount-1; col >=0; col--) {
                matrix[row][col] = number;
                number++;
            }
        }
    }
    printMatrix(matrix);
    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}
function generateMatrix(input) {
    let splittedInput = input[0].split(' ');
    let n = splittedInput[0];
    var total = n*n;
    var result= [];

    for(var i=0;i<n;i++) {
        var rs = [];
        for(var j=0;j<n;j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    var x=0;
    var y=0;
    var step = 0;
    for(var i=0;i<total;){
        while(y+step<n){
            i++;
            result[x][y]=i;
            y++;

        }
        y--;
        x++;

        while(x+step<n){
            i++;
            result[x][y]=i;
            x++;
        }
        console.log(result.join(', '))
        x--;
        y--;

        while(y>=step){
            i++;
            result[x][y]=i;
            y--;
        }
        console.log(result.join(', '))
        y++;
        x--;
        step++;

        while(x>=step){
            i++;
            result[x][y]=i;
            x--;
        }
        console.log(result.join(', '))
        x++;
        y++;
    }
    printMatrix(result);
    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}

generateMatrix(['5 5'])
function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '))
    }
}
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

function test(input) {
    let splittedInput = input[0].split(' ');
    let n = splittedInput[0];
    var result= [];

    for(var i=0;i<n;i++) {
        var rs = [];
        for(var j=0;j<n;j++) {
            rs.push(0);
        }
        result.push(rs);
    }
    console.log(result.join(', '))
}

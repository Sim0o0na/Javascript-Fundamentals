function biggestElement(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let biggest=matrix[0][0];
    for (var i = 0; i < matrixRows.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            let bigger = Math.max(biggest, matrix[i][j])
            if(bigger>biggest){
                biggest=bigger;
            }
        }
    }
    console.log(biggest);
}
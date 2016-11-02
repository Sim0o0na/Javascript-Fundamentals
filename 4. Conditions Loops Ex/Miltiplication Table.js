function multiplicationTable(input){
    let n = Number(input);
    console.log("<table border=\"1\">");

    //Header
    let tableHeader = '<tr><th>x\</th>';
    for (let i = 1; i <= n; i++){
        tableHeader += '<th>';
        tableHeader += i;
        tableHeader += '<th>';
    }
    tableHeader+= '<tr>';
    console.log(tableHeader);

    //TableBody
    let bodyRow = '';
    for (let row = 1; row <= n; row++) {
        bodyRow += '<tr>';
        bodyRow += '<th>';
        bodyRow += row;
        bodyRow += '<th>';
        for (let col = 1; col <= n ; col++) {
            bodyRow += '<td>';
            bodyRow += row*col;
            bodyRow += '<td>';
        }
        bodyRow += '<tr>';
        console.log(bodyRow);
        bodyRow = '';
    }
    console.log("</table>");
}
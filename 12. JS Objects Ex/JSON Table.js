function JSONTable(input) {
    let html = '<table>\n';
    for (let line of input){
        let obj = JSON.parse(line);
        html+='\t<tr>\n';
        html+=`\t\t<td>${obj['name']}</td>\n`;
        html+=`\t\t<td>${obj['position']}</td>\n`;
        html+=`\t\t<td>${obj['salary']}</td>\n`;
        html+='\t<tr>\n';
    }
    html += '</table>\n';
    console.log(html)
}
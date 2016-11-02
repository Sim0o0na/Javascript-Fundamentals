function scoreToHTML([scoreJSON]) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";
    let arr = JSON.parse(scoreJSON);
    for (let obj of arr)
        html += `  <tr><td>${htmlEscape(obj['name'])}` +
            `</td><td>${obj['score']}</td></tr>\n`;
    return html + "</table>";

}
function matchTheDates(input) {
    let pattern = /\b[0-9]{1,2}(\-)[A-Z][a-z]{2}(\-)[0-9]{4}\b/g
    for (var i = 0; i < input.length; i++) {
        let match = input[i].match(pattern)
        if(match){
            let dateTokens = match[0].split('-');
            console.log(`${match[0]} (Day: ${dateTokens[0]}, Month: ${dateTokens[1]}, Year: ${dateTokens[2]})`);
        }
    }
}
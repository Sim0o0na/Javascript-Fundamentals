function extractText(input) {
    let text = input[0];
    let drinks = [];
    let scopeIndex = text.indexOf('(');
    while( scopeIndex > -1 ){
        let secondScopeIndex = text.indexOf(')', scopeIndex);
        if (secondScopeIndex == -1){break;}
        drinks.push(text.substring(scopeIndex+1,secondScopeIndex));
        scopeIndex = text.indexOf('(', secondScopeIndex);
    }
    console.log(drinks.join(', '));
}
function countWordsInText(input) {
    let text = input[0].match(/[\w]+/g);
    let words = {};
    for (var i = 0; i < text.length; i++) {
        let word = text[i];
        if (words[word] == undefined){
            words[word] = 1;
        }
        else
        {
            words[word] += 1;
        }
    }
    console.log(JSON.stringify(words));
}
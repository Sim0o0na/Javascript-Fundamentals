function extractUniqueWords(input) {
    let wordPattern = /\w+/g;
    let words = new Set();
    for (let sentence of input){
        let matches = sentence.match(wordPattern);
        matches.forEach(x=>words.add(x.toLowerCase()));
    }
    let output = [];
    for (let word of words){
        output.push(word)
    }
    console.log(output.join(', '))
}
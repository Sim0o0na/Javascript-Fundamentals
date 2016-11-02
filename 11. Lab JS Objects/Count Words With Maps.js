function countWordsWithMaps(input) {
    let text = input[0].match(/[\w_\d]+/g);
    let words = new Map();
    for (var i = 0; i < text.length; i++) {
        let word = text[i].toLowerCase();
        if (words[word] == undefined){
            words[word] = 1;
        }
        else
        {
            words[word] += 1;
        }
    }
    function sortObject(o) {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    }
    words = sortObject(words);
    for (var property in words) {
        console.log(`'${property}' -> ${words[property]} times`)
    }
}
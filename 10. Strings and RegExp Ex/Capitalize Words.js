function capitalizeWords(input) {
    let words = input[0].split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        words[i] = capitalize(words[i]);
    }
    function capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }
    console.log(words.join(' '));
}
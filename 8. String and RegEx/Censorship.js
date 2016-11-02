function censorship(input) {
    let text = input[0];
    for (let i = 1; i < input.length; i++){
        var find = input[i];
        var result = new RegExp(find, 'g');
        text = text.replace(result, '-'.repeat(find.length));
    }
    console.log(text);
}
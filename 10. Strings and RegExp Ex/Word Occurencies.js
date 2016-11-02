function wordOccurencies(input) {
    let text = input[0];
    let substring = input[1];
    var pattern1 = new RegExp("\\b" + substring + "\\b", 'ig');
    console.log(pattern1);
    let count = 0;
    let variable = pattern1.exec(text);
    while(variable){
        count++;
        variable = pattern1.exec(text);
    }
    console.log(count);
}
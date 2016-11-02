function aggregateTable(input) {
    let text = [];
    let towns = [];
    let sumPopulation = 0;
    for (var i = 0; i < input.length; i++) {
        let str = input[i];
        text.push(str);
    }
    for (var i = 0; i < text.length; i++){
        text[i] = text[i].trim();
        console.log(text[i]);
        let start = text[i].indexOf('|');
        if(start > -1){
            let end = text[i].indexOf('|', start+1);
            if (end == -1){break;}
            towns.push(text[i].substring(start+1,end));
            sumPopulation = sumPopulation + Number(text[i].substring(end+1, text[i].length));
        }
    }
    console.log(towns.join(', '));
    console.log(sumPopulation);

}
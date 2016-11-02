function populationsInTowns(input) {
    let towns = {};
    for (var i = 0; i < input.length; i++) {
        let line = input[i].split(/\s?\<\-\>\s?/);
        if (towns[line[0]] == undefined){
            towns[line[0]] = Number(line[1]);
        }
        else
        {
            towns[line[0]] += Number(line[1]);
        }
    }
    for (var property in towns) {
        console.log(`${property} : ${towns[property]}`)
    }
}
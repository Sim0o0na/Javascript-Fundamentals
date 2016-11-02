function townsToJSON(input) {
    let header = input[0].match(/\w+/g);
    let output = [];
    for (var i = 1; i < input.length; i++) {
        let townPropertes = input[i].split(/\s?\|\s?/g);
        townPropertes = townPropertes.filter(function(n){ return n != '' });
        let obj = {[header[0]]: townPropertes[0], [header[1]]: Number(townPropertes[1]), [header[2]]: Number(townPropertes[2])};
        output.push(obj);
        obj = {};
    }
    console.log(JSON.stringify(output))
}
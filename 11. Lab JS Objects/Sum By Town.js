function sumByTown(input) {
    let obj = {};
    for (var i = 0; i < input.length; i+=2) {
        let [town, income] = [input[i], Number(input[i+1])];
        if (obj[town] == undefined){
            obj[town] = income;
        }
        else {
            obj[town] += income;
        }
    }
    console.log(JSON.stringify(obj));
}
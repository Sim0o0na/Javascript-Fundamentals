function cappyJuice(input) {
    let juice = {};
    let output = {};
    for (let line of input) {
        let [fruit, quantity] = line.split(/\s*\=\>\s*/);
        if (juice[fruit] != undefined) {
            juice[fruit] += Number(quantity);
        }
        else {
            juice[fruit] = Number(quantity);
        }
        if (juice[fruit] >= 1000) {
            if (fruit in output) {
                output[fruit] += Number(quantity);
            }
            else {
                output[fruit] = juice[fruit]
            }
        }
    }
    for (let juice in output){
        console.log(`${juice} => ${Math.floor(output[juice]/1000)}`)
    }
}
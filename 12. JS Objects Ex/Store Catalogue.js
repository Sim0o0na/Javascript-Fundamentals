function storeCatalogue(input) {
    function orderKeys(obj) {

        var keys = Object.keys(obj).sort(function keyOrder(k1, k2) {
            if (k1 < k2) return -1;
            else if (k1 > k2) return +1;
            else return 0;
        });

        var i, after = {};
        for (i = 0; i < keys.length; i++) {
            after[keys[i]] = obj[keys[i]];
            delete obj[keys[i]];
        }

        for (i = 0; i < keys.length; i++) {
            obj[keys[i]] = after[keys[i]];
        }
        return obj;
    }
    let firstCatalogue = {};
    for (let line of input){
        let [product, price] = line.split(/\s*:\s*/);
        if (firstCatalogue[product] == undefined){
            firstCatalogue[product] = Number(price);
        }
        else{
            firstCatalogue[product] += Number(price);
        }
    }
    firstCatalogue = orderKeys(firstCatalogue);
    let catalogue = new Map();
    for (let line in firstCatalogue){
        let product = line;
        let price = firstCatalogue[product];
        if (!catalogue.has(product.charAt(0))){
            catalogue.set(product.charAt(0), new Map())
        }
        catalogue.get(product.charAt(0)).set(product, price);
    }

    for (let letter of catalogue.keys()) {
        console.log(`${letter}`);
        for (let product of catalogue.get(letter).keys()) {
            console.log(`  ${product}: ${catalogue.get(letter).get(product)} `)
        }
    }
}
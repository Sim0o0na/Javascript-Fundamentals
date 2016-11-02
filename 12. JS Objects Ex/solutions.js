function heroicInventory(input){
    let heroInformation = [];
    for (let property of input){
        let [heroName, levelNum, items] = property.split(/\s*\/\s*/);
        let inventory = items.split(/\s*,\s*/);
        let hero = {name: heroName, level: Number(levelNum), items:  inventory};
        heroInformation.push(hero);
    }
    console.log(JSON.stringify(heroInformation));
}
function JSONTable(input) {
    let html = '<table>\n';
    for (let line of input){
        let obj = JSON.parse(line);
        html+='\t<tr>\n';
        html+=`\t\t<td>${obj['name']}</td>\n`;
        html+=`\t\t<td>${obj['position']}</td>\n`;
        html+=`\t\t<td>${obj['salary']}</td>\n`;
        html+='\t<tr>\n';
    }
    html += '</table>\n';
    console.log(html)
}
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
function autoEngineeringCompany(input) {
    let information = new Map();
    for (let line of input){
        let [brand, model, quantity] = line.split(/\s*\|\s*/);
        if (!information.has(brand)){
            information.set(brand, new Map());
        }
        if(information.get(brand).has(model)){
            let newQuant = Number(information.get(brand).get(model)) + Number(quantity);
            information.get(brand).set(model, newQuant)
        }
        else{
            information.get(brand).set(model, quantity);
        }
    }
    for (let brand of information.keys()){
        console.log(brand);
        for (let car of information.get(brand).keys()){
            console.log(`###${car} -> ${information.get(brand).get(car).valueOf()}`)
        }
    }
}
function usernames(input) {
    let usernames = new Set();
    for (let username of input){
        usernames.add(username);
    }
    let usernamesArray = [];
    for (let username of usernames){
        usernamesArray.push(username);
    }

    function sorting(a, b) {
        if (a.length!=b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }
    usernamesArray = usernamesArray.sort(sorting);


    for (let username of usernamesArray){
        console.log(username);
    }
}
function systemComponents(input) {
    let information = new Map();
    function sorting(a, b) {
        if(Object.keys(information.get(a)).length === Object.keys(information.get(b)).length) {
            if(a > b) return 1;
            if(a < b) return -1;
        } else {
            return Object.keys(information.get(a)).length < Object.keys(information.get(b)).length;
        }
    }

    for(let element of input){
        let [system, component, subcomponent] = element.split(/\s*\|\s*/);
        if (!information.has(system)){
            information.set(system, {})
        }
        if(!information.get(system).hasOwnProperty(component)){
            information.get(system)[component] = [];
        }
        information.get(system)[component].push(subcomponent);
    }
    let sortedSystemKeys = [...information.keys()].sort(sorting);
    for (let systemName of sortedSystemKeys){
        console.log(systemName); //gets system key
        let system = information.get(systemName); //gets system object with props
        let componentsKeys = Object.keys(system); //gets system components
        let sortedComponentKeys = componentsKeys.sort((a,b) => {
            return system[a].length < system[b].length});
        for (let componentKey of sortedComponentKeys){
            console.log(`|||${componentKey}`);
            for (let subcomponent of system[componentKey]){
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}
// systemComponents(["SULS | Main Site | Home Page","SULS | Main Site | Login Page","SULS | Main Site | Register Page","SULS | Judge Site | Login Page","SULS | Judge Site | Submittion Page","Lambda | CoreA | A23","SULS | Digital Site | Login Page","Lambda | CoreB | B24","Lambda | CoreA | A24","Lambda | CoreA | A25","Lambda | CoreC | C4","Indice | Session | Default Storage","Indice | Session | Default Security"]);
function uniqueSequences(input) {
    let uniqueSequences = new Map();
    for (let line of input) {
        let lineArray = JSON.parse(line).map(Number); // get array from input line
        lineArray = lineArray.sort((a, b)=> {
            return b - a;
        });
        let toStore = `[${lineArray.join(', ').toString()}]`
        if (!uniqueSequences.has(toStore)) {
            uniqueSequences.set(toStore, lineArray.length);
        }
    }
    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    console.log([...uniqueSequences.keys()].sort((a, b) => customSort(a, b, uniqueSequences)).join('\n'));
}
uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]","[10, 1, -17, 0, 2, 13]","[4, -3, 3, -2, 2, -1, 1, 0]"]);



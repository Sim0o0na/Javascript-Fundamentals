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
function htmlEscape(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
function scoreToHTML([scoreJSON]) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";
    let arr = JSON.parse(scoreJSON);
    for (let obj of arr)
        html += `  <tr><td>${htmlEscape(obj['name'])}` +
            `</td><td>${obj['score']}</td></tr>\n`;
    return html + "</table>";
    
}
function JSONToTable([json]) {
    function escapeHtml(text) {
        if(typeof text === 'string'){
            return text
                .replace(/&/g, '&amp;')
                .replace(/>/g, '&gt;')
                .replace(/</g, '&lt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }
        else{
            return text;
        }
    }
    let html = "<table>\n";
    let arr = JSON.parse(json);
    // console.log(arr);
    html+="\t<tr>";
    for(let key of Object.keys(arr[0])){
        html+=`<th>${escapeHtml(key)}</th>`;
    }
    html+="</tr>";

    for(let obj of arr){
        html+=`\n\t<tr>`;
        for (let key of Object.keys(obj)){
            html+=`<td>${escapeHtml(obj[key])}</td>`;
        }
        html+=`</tr>`;
    }

    html+=`\n</table>`;
    console.log(html);
}
// JSONToTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
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
function countWordsInText(input) {
    let text = input[0].match(/[\w]+/g);
    let words = {};
    for (var i = 0; i < text.length; i++) {
        let word = text[i];
        if (words[word] == undefined){
            words[word] = 1;
        }
        else
        {
            words[word] += 1;
        }
    }
    console.log(JSON.stringify(words));
}
function countWordsWithMaps(input) {
    let text = input[0].match(/[\w_\d]+/g);
    let words = new Map();
    for (var i = 0; i < text.length; i++) {
        let word = text[i].toLowerCase();
        if (words[word] == undefined){
            words[word] = 1;
        }
        else
        {
            words[word] += 1;
        }
    }
    function sortObject(o) {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    }
    words = sortObject(words);
    for (var property in words) {
        console.log(`'${property}' -> ${words[property]} times`)
    }
}
//countWordsWithMaps(['Far too slow, you\'re far too slow.'])
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
// populationsInTowns(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']);
function cityMarkets(sales) {
    let townsWithProducts = new Map();
    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);
        if (!townsWithProducts.has(town))
            townsWithProducts.set(town, new Map());
        let income = quantity * price;
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome) income += oldIncome;
        townsWithProducts.get(town).set(product, income);
    }
    for (let town of townsWithProducts.keys()) {
        console.log(`Town - ${town}`);
        for (let product of townsWithProducts.get(town).keys()) {
            console.log(`$$$${product} : ${townsWithProducts.get(town).get(product).valueOf()}`)
        }
    }
}
// cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
// 'Sofia -> Raspberry -> 200000 : 1500',
// 'Sofia -> Audi Q7 -> 200 : 100000',
// 'Montana -> Portokals -> 200000 : 1',
// 'Montana -> Qgodas -> 20000 : 0.2',
// 'Montana -> Chereshas -> 1000 : 0.3']);
function lowestPricesInCities(input) {
    let townsWithProducts = new Map();
    for (let sale of input) {
        let [town, product, price] = sale.split(/\s*\|\s*/);
        if (!townsWithProducts.has(product)) {
            townsWithProducts.g.set(town, new Map());
        }
        products.set(product, price);
        townsWithProducts.get(town).set(product, price);
    }

    for (let [product, towns] of townsWithProducts) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';
        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}



function extractUniqueWords(input) {
    let wordPattern = /\w+/g;
    let words = new Set();
    for (let sentence of input){
        let matches = sentence.match(wordPattern);
        matches.forEach(x=>words.add(x.toLowerCase()));
    }
    let output = [];
    for (let word of words){
        output.push(word)
    }
    console.log(output.join(', '))
}

extractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);
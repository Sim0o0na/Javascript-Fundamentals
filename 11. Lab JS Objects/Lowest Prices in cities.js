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
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
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
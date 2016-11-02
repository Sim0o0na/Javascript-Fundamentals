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
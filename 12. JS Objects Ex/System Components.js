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
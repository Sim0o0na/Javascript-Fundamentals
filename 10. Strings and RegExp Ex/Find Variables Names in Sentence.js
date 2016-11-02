function findVariableNamesInSent(input) {
    let pattern = /_\w+/g;
    let variables = [];
    for (var i = 0; i < input.length; i++) {
        let variable = input[i].match(pattern);
        for (var j = 0; j < variable.length; j++) {
            variable[j] = variable[j].slice(1);
            variables.push(variable[j]);
        }
    }
    console.log(variables.join(','));
}
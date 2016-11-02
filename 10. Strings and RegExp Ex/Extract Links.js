function extractLinks(input) {
    let pattern =/([w]+){3,}(\.)([a-zA-Z0-9\-]+\.)(([a-z]+)\.){0,}([a-z]+)/g;
    for (var i = 0; i < input.length; i++) {
        let variable = input[i].match(pattern);
        if(variable){
            console.log(variable[0]);
        }
    }
}
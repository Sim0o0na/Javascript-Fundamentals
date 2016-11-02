function addRemoveElements(input) {
    let number = 1;
    let elements = [];
    for (let i = 0; i < input.length; i++) {
        if(input[i]=="add"){
            elements.push(number);
            number++;
        }
        if(input[i]=="remove"){
            elements.pop();
            number++;
        }
    }
    if (elements.length>0){
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i]);
        }
    }
    else {
        console.log("Empty");
    }
}
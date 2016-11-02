function cookingByNumbers(input) {
    let size = input[0];
    for (let i = 1; i < input.length; i++){
        if (input[i] == "chop"){
            size = size/2;
        }
        if (input[i] == "dice"){
            size = Math.sqrt(size);
        }
        if (input[i] == "spice"){
            size = size+1;
        }
        if (input[i] == "bake") {
            size = size * 3;
        }
        if (input[i] == "fillet"){
            size = size - size*0.20;
        }
        console.log(size);
    }
}

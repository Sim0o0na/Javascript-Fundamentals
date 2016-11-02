function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let distanceBetweenPoints = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let distance1 = Math.sqrt(Math.pow(x1,2) + Math.pow(y1, 2));
    let distance2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    if (distance1%1==0){
        console.log("{" + x1 + ", " + y1 + "} to {0, 0} is valid");
    }
    else{
        console.log("{" + x1 + ", " + y1 + "} to {0, 0} is invalid");
    }

    if (distance2%1==0){
        console.log("{" + x2 + ", " + y2 + "} to {0, 0} is valid");
    }
    else{
        console.log("{" + x2 + ", " + y2 + "} to {0, 0} is invalid");
    }

    if (distanceBetweenPoints%1==0){
        console.log("{" + x1 + ", " + y1 + "} to {" + x2+ ", " + y2 + "} is valid");
    }
    else{
        console.log("{" + x1 + ", " + y1 + "} to {" + x2+ ", " + y2 + "} is invalid");
    }
}
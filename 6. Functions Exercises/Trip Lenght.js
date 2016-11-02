function tripLenght(input) {
    input.map(Number);
    let point1 = {x:Number(input[0]), y:Number(input[1])};
    let point2 = {x:Number(input[2]), y:Number(input[3])};
    let point3 = {x:Number(input[4]), y:Number(input[5])};

    let distance1to2 = Math.sqrt(Math.pow(point1.y,2) + Math.pow(point2.x, 2));
    let distance1to3 = Math.sqrt(Math.pow(point1.y,2) + Math.pow(point3.x, 2));
    let distance3to2 = Math.sqrt(Math.pow(distance1to3,2) - (Math.pow(point1.y,2)))*2;

    if ((distance1to2 <= distance1to3) && (distance1to3 => distance3to2)) {
        let a = distance1to2 + distance3to2;
        console.log('1->2->3: ' + a);
    }
    else if ((distance1to2 <= distance3to2) && (distance1to3 < distance3to2)) {
        let b = distance1to3 + distance1to2;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance3to2 + distance1to3;
        console.log('1->3->2: ' + c);
    }
}
function dist([x0,y0,z0,x1,y1,z1]){

    deltaX = x1 - x0;
    deltaY = y1 - y0;
    deltaZ = z1 - z0;

    distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    console.log(distance);

}
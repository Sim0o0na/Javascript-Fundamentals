function triangleArea([a, b, c]){
    let param = (Number(a) + Number(b) + Number(c))/2;
    let area = Math.sqrt(param*(param-a)*(param-b)*(param-c));
    console.log(area);
}
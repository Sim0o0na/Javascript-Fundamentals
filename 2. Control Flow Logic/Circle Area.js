function circleArea(r) {
    let area = Math.PI * r * r;
    console.log(area); // 78.53981633974483
    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded); // 78.54
}
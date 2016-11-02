function rounding([input, n]){
    var multiplier = Math.pow(10, n);
    console.log(Math.round(input * multiplier) / multiplier);
}
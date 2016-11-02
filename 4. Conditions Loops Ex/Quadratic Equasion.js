function quad([a, b, c]) {
    var first = a;
    var secind = b;
    var third = c;

    var d=(Math.pow(b,2)-(4*a*c));
    var x1=(-b + Math.sqrt(d)) / (2*a);
    var x2=(-b - Math.sqrt(d)) / (2*a);

    if (d < 0) {
        console.log("No real roots");
    } else if (d == 0) {
        console.log("X = "  + x1);
    } else {
        console.log(x2);
        console.log(x1);
    }
}
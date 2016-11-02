function cone([h, r]){
    let slant = Math.sqrt(r*r + h*h);
    let base = Math.PI*r*r;
    let volume = (base*h)/3;
    let lateral = Math.PI*r*slant;
    let totalSurface = Math.PI*r*(r+slant);
    console.log("volume = " + volume);
    console.log("area = " + totalSurface);
}
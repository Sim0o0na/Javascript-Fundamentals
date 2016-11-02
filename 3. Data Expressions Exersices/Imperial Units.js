function imperialUnits(input) {
    let inches = Math.floor(input/12);
    console.log("%s'-%s\"", inches, input-inches*12);
}
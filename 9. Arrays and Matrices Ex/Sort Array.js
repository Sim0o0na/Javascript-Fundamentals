function sortArray(input) {
    input.sort((a,b)=>a.localeCompare(b));
    input.sort((a,b)=>a.length-b.length);
    for (var i = 0; i < input.length; i++) {
        console.log(input[i])
    }
}
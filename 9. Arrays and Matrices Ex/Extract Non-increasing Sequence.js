function extractNonInscreasingSequence(input) {
    let biggestNumber = Number(input[0]);
    for (var i = 0; i < input.length; i++) {
        if(input[i]>=biggestNumber){
            console.log(input[i]);
            biggestNumber = Number(input[i]);
        }
    }
}
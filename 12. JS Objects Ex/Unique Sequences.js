function uniqueSequences(input) {
    let uniqueSequences = new Map();
    for (let line of input) {
        let lineArray = JSON.parse(line).map(Number); // get array from input line
        lineArray = lineArray.sort((a, b)=> {
            return b - a;
        });
        let toStore = `[${lineArray.join(', ').toString()}]`
        if (!uniqueSequences.has(toStore)) {
            uniqueSequences.set(toStore, lineArray.length);
        }
    }
    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    console.log([...uniqueSequences.keys()].sort((a, b) => customSort(a, b, uniqueSequences)).join('\n'));
}
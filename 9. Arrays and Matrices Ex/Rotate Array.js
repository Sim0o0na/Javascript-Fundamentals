function rotateArray(input) {
    let last = Number(input[input.length-1]);
    input.pop();
    let rotations = last % Number(input.length);
    arrayRotate(input,rotations);
    function arrayRotate(arr, rotations){
        for (var i = 0; i < rotations; i++) {
            arr.unshift(arr.pop());
        }
        return arr;
    }
    console.log(input.join(' '))
}
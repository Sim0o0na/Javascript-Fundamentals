
function concatenateAndReverse(input) {
    let inputString = Object.assign([], input);

    let concatenated= "";
    for (var i = 0; i < inputString.length; i++) {
        concatenated += inputString[i];
    }
    reverse(concatenated);
    function reverse(s) {
        var o = '';
        for (var i = s.length - 1; i >= 0; i--)
            o += s[i];
        console.log(o);
    }
}
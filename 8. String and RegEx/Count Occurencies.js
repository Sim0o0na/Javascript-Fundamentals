function countOccurencies(input){
    let stringToCheck = input[0];
    let inputToCheck = input[1];
    searchFor = stringToCheck;
    count = 0,
        pos = inputToCheck.indexOf(searchFor);

    while (pos > -1) {
        ++count;
        pos = inputToCheck.indexOf(searchFor, ++pos);
    }

    console.log(count);
}
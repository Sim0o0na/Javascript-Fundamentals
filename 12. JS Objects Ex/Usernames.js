unction usernames(input) {
    let usernames = new Set();
    for (let username of input){
        usernames.add(username);
    }
    let usernamesArray = [];
    for (let username of usernames){
        usernamesArray.push(username);
    }

    function sorting(a, b) {
        if (a.length!=b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }
    usernamesArray = usernamesArray.sort(sorting);


    for (let username of usernamesArray){
        console.log(username);
    }
}
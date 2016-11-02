function usernames(input) {
    let usernames = [];
    for (var i = 0; i < input.length; i++) {
        let username = "";
        let email = input[i];
        let first = email.split('@')[0];
        username += first;
        let second = email.split('@')[1];
        let domain = second.split('.')[0];
        let site = second.split('.')[1];
        for (var j = 0; j < 1; j++) {
            username += ".";
            username += domain[j];
            username += site[j];
        }
        usernames.push(username);
    }
    console.log(usernames.join(', '));
}
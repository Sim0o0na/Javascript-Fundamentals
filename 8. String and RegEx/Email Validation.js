function emailValidation(input){
    let email = input[0];
    var re = /([a-z0-9\-]+)@(([a-zA-Z]+)(\.)([a-z])+)/g;
    if(re.test(email)){
        console.log("Valid")
    }else{
        console.log("Invalid")
    }
}
function calculator([n1, n2, act]) {
    let num1 = Number(n1);
    let num2 = Number(n2);
    let action = act;

    if (action == "+"){
        return num1+num2;
    }
    if (action == "/"){
        return num1/num2;
    }
    if (action == "*"){
        return num1*num2;
    }
    if (action == "-"){
        return num1-num2;
    }
}
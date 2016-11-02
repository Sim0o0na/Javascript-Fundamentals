function modifyAverage(input) {
    let num = String(input);
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    while (sum/num.length<=5){
        num=num+9;
        sum=0;
        for (let i = 0; i < num.length; i++){
            sum += Number(num[i]);
        }
    }
    console.log(num);
}
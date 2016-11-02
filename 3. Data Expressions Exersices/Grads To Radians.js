function GradsToDegrees([input]){
    let grads = Number(input);
    let minValue=0;
    let maxValue=360;
    let degrees = grads*0.9;
    //console.log(degrees);
    while(degrees>=maxValue){
        degrees = degrees-maxValue;
    }
    if(degrees<minValue){
        degrees = maxValue+degrees;
    }
    console.log(degrees);
}
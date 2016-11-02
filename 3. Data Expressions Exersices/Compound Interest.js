function compoundInterest([s, r, p, t]){
    let sum = Number(s);
    let rate = Number(r);
    let period = Number(p);
    let timespan = Number(t);
    let compoundingFreq = 12/period;
    let interestPerc = rate/100;
    let sqrt = compoundingFreq*timespan;
    let interest = sum*Math.pow((1+interestPerc/compoundingFreq), sqrt);
    console.log(interest);
}
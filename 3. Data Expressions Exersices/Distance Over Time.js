function distanceOverTime([v1, v2, t]){
    let speed1 = (Number(v1)/3600)*1000;
    let speed2 = (Number(v2)/3600)*1000;
    let time = Number(t);
    let dist1 = speed1*time;
    let dist2 = speed2*time;
    let delta = Math.abs(dist1-dist2);
    console.log(delta);
}
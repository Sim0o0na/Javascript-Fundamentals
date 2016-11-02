function roadRadar([speed, zone]) {
    var dictionary = {"residential": 20,"city": 50, "interstate": 90, "motorway": 130};
    if (dictionary[zone] != undefined){
        if(dictionary[zone]<speed){
            let difference=speed-dictionary[zone];
            if(difference>0 && difference<=20){
                console.log("speeding")
            }
            if(difference>20 && difference<=40){
                console.log("excessive speeding");
            }
            else if(difference>40){
                console.log("reckless driving");
            }
        }
    }
}
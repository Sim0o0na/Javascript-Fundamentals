function dayOfWeek([day]) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var x = 0;
    for (let i = 0; i < days.length; i++){
        if (days[i]==day){
            x = 1;
            console.log(days.indexOf(day)+1)
        }
    }
    if (x == 0){
        console.log("error")
    }
}
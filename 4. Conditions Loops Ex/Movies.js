function moviePrices([title, day]) {
    let titl = title.toLowerCase();
    let dayy = day.toLowerCase();
    if (titl=="the godfather"){
        switch (dayy){
            case "monday": console.log(12); break;
            case "tuesday": console.log(10); break;
            case "wednesday": console.log(15); break;
            case "thursday": console.log(12.50); break;
            case "friday": console.log(15); break;
            case "saturday": console.log(25); break;
            case "sunday": console.log(30); break;
            default: console.log("error");
        }
    }
    if (titl=="schindler's list"){
        switch (dayy){
            case "monday": console.log(8.50); break;
            case "tuesday": console.log(8.50); break;
            case "wednesday": console.log(8.50); break;
            case "thursday": console.log(8.50); break;
            case "friday": console.log(8.50); break;
            case "saturday": console.log(15); break;
            case "sunday": console.log(15); break;
            default: console.log("error");
        }
    }
    if (titl=="casablanca"){
        switch (dayy){
            case "monday": console.log(8); break;
            case "tuesday": console.log(8); break;
            case "wednesday": console.log(8); break;
            case "thursday": console.log(8); break;
            case "friday": console.log(8); break;
            case "saturday": console.log(10); break;
            case "sunday": console.log(10); break;
            default: console.log("error");
        }
    }
    if (titl=="the wizard of oz"){
        switch (dayy){
            case "monday": console.log(10); break;
            case "tuesday": console.log(10); break;
            case "wednesday": console.log(10); break;
            case "thursday": console.log(10); break;
            case "friday": console.log(10); break;
            case "saturday": console.log(15); break;
            case "sunday": console.log(15); break;
            default: console.log("error");
        }
    }
}
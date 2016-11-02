/**
 * Created by acer on 02-Nov-16.
 */
function restaurantBill(input) {
    let cost = 0;
    let products = [];
    for (var i = 0; i < input.length; i++) {
        if(i%2==0){
            products.push(input[i]);
        }
        else if (i%2==1){
            cost += Number(input[i]);
        }
    }
    console.log("You purchased " + products.join(', ')+ " for a total sum of " + cost)
}
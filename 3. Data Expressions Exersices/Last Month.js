function lastMonth([d, m, y]) {
    let inputDate = new Date();
    inputDate.setDate(d);
    inputDate.setFullYear(y);
    inputDate.setMonth(m-1);

    var lastDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), 0);
    console.log(lastDay.getDate());
}
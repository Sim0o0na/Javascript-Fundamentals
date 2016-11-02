function helix(input) {
    let n = Number(input[0]);
    let sequence = "ATCGTTAGGG";
    let count  = 0;
    let seqArray = ['**AT**', '*C--G*', 'T----T', '*A--G*', '**GG**', '*A--T*', 'C----G', '*T--T*', '**AG**', '*G--G*'];
    if(n<=seqArray.length){
        while(count<n){
            console.log(seqArray[count]);
            count++;
        }
    }
    if(n>seqArray.length){
        let help = 0;
        while(help<n){
            console.log(seqArray[count]);
            count++;
            help++;
            if(count==10){
                count=0;
            }
        }
    }
}
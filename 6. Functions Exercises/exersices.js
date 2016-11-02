
















function radioCrystals(input) {
    input = input.map(Number);
    let desired = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        let crystalToProcess = input[i];
        console.log("Processing chunk " + crystalToProcess + " microns");
        crystalToProcess = cut(crystalToProcess);
        // console.log("After cut: "+crystalToProcess);
        crystalToProcess = lap(crystalToProcess);
        // console.log("After lap: "+crystalToProcess);
        crystalToProcess = grind(crystalToProcess);
        // console.log("After grind: " + crystalToProcess);
        crystalToProcess = etch(crystalToProcess);
        // console.log("After etch: " + crystalToProcess);
        if (crystalToProcess == desired){
            console.log("Finished crystal " + crystalToProcess + " microns");
        }
    }
    
    function cut(crystal) {
        let count = 0;
        while(crystal>desired){
            let temp = crystal - crystal*0.75;
            if (temp<desired){
                console.log("Cut x" + count);
                wash(crystal);
                return crystal;
            }
            if(temp>=desired){
                crystal = temp;
                count++;
            }
            if(desired - (temp - temp*0.75) == 1){
                crystal = temp - 2;
                count++;
                console.log("Etch x" + count);
                crystal = wash(crystal);
                crystal = xray(crystal);
                break;
            }
            if(temp==desired){
                crystal=temp;
                console.log("Cut x" + count);
                crystal = wash(crystal);
                break;
            }
        }
        return crystal;
    }

    function lap(crystal) {
        let count = 0;
        while(crystal>desired){
            let temp = crystal - crystal*0.2;
            if (temp<desired){
                console.log("Lap x" + count);
                crystal = wash(crystal);
                return crystal;
            }
            if(temp>desired){
                crystal = temp;
                count++;
            }
            if(desired - (temp - temp*0.2) == 1){
                crystal = temp - 2;
                count++;
                console.log("Etch x" + count);
                crystal = wash(crystal);
                crystal = xray(crystal);
                break;
            }
        }
        return crystal;
    }

    function grind(crystal) {
        let count = 0;
        while(crystal>desired){
            let temp = crystal - 20;
            if (temp<desired){
                console.log("Grind x" + count);
                wash(crystal);
                return crystal;
            }
            if(temp>=desired){
                crystal = temp;
                count++;
            }
            if(desired - (temp - 20) == 1){
                crystal = temp - 2;
                count++;
                console.log("Etch x" + count);
                crystal = wash(crystal);
                crystal = xray(crystal);
                break;
            }
        }
        return crystal;
    }

    function etch(crystal) {
        let count = 0;
        while(crystal>desired){
            let temp = crystal - 2;
            if (temp<desired){
                console.log("Etch x" + count);
                crystal = wash(crystal);
                return crystal;
            }
            if(temp>desired){
                crystal = temp;
                count++;
            }
            if(desired - (temp - 2) == 1){
                crystal = temp - 2;
                count++;
                console.log("Etch x" + count);
                crystal = wash(crystal);
                crystal = xray(crystal);
                break;
            }
        }
        return crystal;
    }
    function xray(crystal) {
        crystal = crystal+1;
        console.log("Xray x1");
        return crystal;
    }
    function wash(crystal){
        console.log("Transporting and washing");
        crystal = Math.floor(crystal);
        return crystal;
    }
}

function helix(input) {
    let n = Number(input[0]);
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



















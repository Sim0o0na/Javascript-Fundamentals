function radioCrystal(input){
    input = input.map(Number);
    let targetSize = input[0];
    for(let i = 1; i < input.length; i++){
        let size = input[i];
        console.log(`Processing chunk ${size} microns`)
        processChunk(targetSize, size);
    }

    function processChunk(targetSize, size){
        if(size - targetSize > 1) {
            let cycles = 0;
            //CUT
            let cutSize = cut(size);
            while (cutSize >= targetSize || targetSize - parseInt(targetSize) == 1) {
                size = cutSize;
                cutSize = cut(size);
                cycles++;
            }
            if (cycles > 0) {
                console.log(`Cut x${cycles}`);
                size = wash(size);
                cycles = 0;
            }
            //LAP
            let lapSize = lap(size);
            while (lapSize >= targetSize || targetSize - parseInt(lapSize) == 1) {
                size = lapSize;
                lapSize = lap(size);
                cycles++;
            }
            if (cycles > 0) {
                console.log(`Lap x${cycles}`);
                size = wash(size);
                cycles = 0;
            }
            //GRIND
            let grindSize = grind(size);
            while (grindSize >= targetSize || targetSize - parseInt(grindSize) == 1) {
                size = grindSize;
                grindSize = grind(size);
                cycles++;
            }
            if (cycles > 0) {
                console.log(`Grind x${cycles}`);
                size = wash(size);
                cycles = 0;
            }
            //ETCH
            let etchSize = etch(size);
            while (etchSize >= targetSize || targetSize - parseInt(etchSize) == 1) {
                size = etchSize;
                etchSize = etch(size);
                cycles++;
            }
            if (cycles > 0) {
                console.log(`Etch x${cycles}`);
                size = wash(size);
            }
            //X-RAY
            if (targetSize - size == 1) {
                console.log(`X-ray x1`);
            }
        }else{
            wash(size);
        }

        console.log(`Finished crystal ${targetSize} microns`);

        function cut(size){
            return size/4;
        }
        function lap(size){
            return size * 0.8;
        }
        function grind(size){
            return size - 20;
        }
        function etch(size){
            return size - 2;
        }
        function wash(size){
            console.log("Transporting and washing");
            return Math.floor(size);
        }
    }
}/**
 * Created by acer on 02-Nov-16.
 */

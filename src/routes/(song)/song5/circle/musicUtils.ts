
export const tones: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const intervals: any[] = [
    {index: 1, name: "Root"},
    {index: 2, name: "Flat 2nd"},
    {index: 3, name: "2nd"},
    {index: 4, name: "Flat 3rd"},
    {index: 5, name: "3rd"},
    {index: 6, name: "Perfect 4th"},
    {index: 7, name: "Tritone"},
    {index: 8, name: "Perfect 5th"},
    {index: 9, name: "Flat 6th"},
    {index: 10, name: "6th"},
    {index: 11, name: "Flat 7th"},
    {index: 12, name: "7th"}
];

export const chromaticScale: any[] = [
    {index: 1, degree: 1, name: "A"}, 
    {index: 2, degree: 2, name: "A#"}, 
    {index: 3, degree: 3, name: "B"}, 
    {index: 4, degree: 4, name: "C"}, 
    {index: 5, degree: 5, name: "C#"}, 
    {index: 6, degree: 6, name: "D"}, 
    {index: 7, degree: 7, name: "D#"}, 
    {index: 8, degree: 8, name: "E"}, 
    {index: 9, degree: 9, name: "F"}, 
    {index: 10, degree: 10, name: "F#"}, 
    {index: 11, degree: 11, name: "G"}, 
    {index: 12, degree: 12, name: "G#"}];

export const mmScale: any[] = [
    {index: 1, degree: 1, name: "Ionian"}, 
    {index: 2, degree: 3, name: "Dorian"}, 
    {index: 3, degree: 5, name: "Phrygian"}, 
    {index: 4, degree: 6, name: "Lydian"}, 
    {index: 5, degree: 8, name: "Mixolydian"}, 
    {index: 6, degree: 10, name: "Aeolian"}, 
    {index: 7, degree: 12, name: "Locrian"}];

export const pentaScale: any[] = [
    {index: 1, degree: 1, name: "First"}, 
    {index: 2, degree: 3, name: "Second"}, 
    {index: 3, degree: 5, name: "Third"}, 
    {index: 4, degree: 8, name: "Forth"}, 
    {index: 5, degree: 10, name: "Fifth"}];

    
export const mmHeptChord: any[] = [
    {diatonic: 1, offset: 0},
    {diatonic: 2, offset: 0},
    {diatonic: 3, offset: 0},
    {diatonic: 4, offset: 0},
    {diatonic: 5, offset: 0},
    {diatonic: 6, offset: 0},
    {diatonic: 7, offset: 0}];

export const firstTriadChord: any[] = [
    {diatonic: 1, offset: 0},
    {diatonic: 3, offset: 0},
    {diatonic: 5, offset: 0}];


const rotate = (arr: any[], count: number = 1) => {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
};

const padScaleBlanks = (scale: any[]) => {

    let scaleTmp: any[] = [];
    
    //Pad scale with blanks where there are spaces 
    for (let i = 0; i < 12; i++) {
        scaleTmp[i] = {index: -1, degree: -1, name: ""};
    }

    for (let i = 0; i < scale.length; i++) {
        scaleTmp[scale[i].degree-1] = scale[i];
    }

    return scaleTmp;

}

export const findScaleDiatonicsForChrome = (key: number, scale: any[], mode: number) => {

    //Here we're going to compare the chromatic scale against the scale and 
    //mark which notes match the mode positions

    //To do this, we rotate the chromatic notes so the key is at the beginning of the array,
    // we pad the scale to same length as the chromatic notes,
    // then we roate the scale so the mode is at the beginning of the array.
    // We can then loop through and check if each value has a match 

    //Rotate to the key and mode to start comparison
    const chromeTmp = [...rotate(chromaticScale, chromaticScale.findIndex((x) => x.index == key))];

    //Pad to the same length to allow comparison with chromeTmp
    let scaleTmp = padScaleBlanks(scale);
    scaleTmp = [...rotate(scaleTmp, scaleTmp.findIndex((x) => x.index == mode))];


    //Build results
    let result: any[] = [];

    for (let i = 0; i < chromeTmp.length; i++) {
        let diatonic: boolean = scaleTmp[i].index != -1;
        result = [...result, {chromatic: chromeTmp[i], mode: scaleTmp[i], diatonic: diatonic}];
    }

    //returns an adjusted chrome scale and intervals flagged with the diatonic    
    return result;
};

export const findScaleDiatonicsForIntervals = (root: number, scale: any[], mode: number) => {

    const intervalTmp = [...rotate(intervals, intervals.findIndex((x) => x.index == root))];

    //Pad to the same length to allow comparison with chromeTmp
    let scaleTmp = padScaleBlanks(scale);
    scaleTmp = [...rotate(scaleTmp, scaleTmp.findIndex((x) => x.index == mode))];

    //Build results
    let result: any[] = [];

    for (let i = 0; i < intervalTmp.length; i++) {
        let diatonic: boolean = scaleTmp[i].index != -1;
        result = [...result, {intervals: intervalTmp[i], mode: scaleTmp[i], diatonic: diatonic}];
    }

    //returns an adjusted chrome scale and intervals flagged with the diatonic    
    return result;

}

export const findChordDiatonicsForIntervals = (key: number, scale: any[], mode: number, pattern: any[], root: number) => {

    
    //Rotate to the key and mode to start comparison
    let intervalTmp = [...rotate(intervals, intervals.findIndex((x) => x.index == key+(root-1)))];

    //Pad to the same length to allow comparison 
    let scaleTmp = padScaleBlanks(scale);

    scaleTmp = [...rotate(scaleTmp, scaleTmp.findIndex((x) => x.index == mode))];

    scaleTmp = [...rotate(scaleTmp, root-key)];

    //Renumber the scale degree from the mode
    let degree: number = 1;

    for (let i = 0; i < scaleTmp.length; i++) {

        scaleTmp[i].diatonic = false;

        if(scaleTmp[i].index != -1) {
            //We have a scale item 

            let part = pattern.find((x)=>x.diatonic == degree);
            //Matched the degree with the chord
            let n = i;
            if(part) {
                n = i + Number.parseInt(part.offset); 
                scaleTmp[n].diatonic = true; 
            }

            degree = degree + 1;
        }

    }

    intervalTmp = [...rotate(intervalTmp, intervalTmp.findIndex((x) => x.index == (key-(root+1))*-1))];

    //Build results
    let result: any[] = [];

    for (let i = 0; i < intervalTmp.length; i++) {
        let diatonic: boolean = scaleTmp[i].diatonic && scaleTmp[0].diatonic;
        intervalTmp[i].index = i+1;
        result = [...result, {intervals: intervalTmp[i], mode: scaleTmp[i], diatonic: diatonic}];
    }

    return result;

}


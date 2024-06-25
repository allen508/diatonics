import * as ttet from "./twelveTetPitches.json";

export type Pitch = {
    pitch?: null | string,
    note: string,
    octave: number,
    accidental: string,
    relIndex?: null | number,
    index?: null | number,
    knownAs?: null | string
};



export const getRangeAbsolute = (firstPitch : Pitch, length: number) : Array<Pitch> => {


    if(firstPitch.accidental == null){
        firstPitch.accidental = "";
    }

    if(firstPitch.octave == null){
        
        firstPitch.octave = 1;
    }

    let startIndex = ttet.pitches.findIndex((p) => { return (p.note == firstPitch.note && p.octave == firstPitch.octave && p.accidental == firstPitch.accidental)});
    
    let range = ttet.pitches.slice(startIndex, startIndex + length);
    return range;

}


export const getRange = (firstPitch : string, length: number) : Array<Pitch> => {

    let pitch : Pitch = toPitch(firstPitch);
    return getRangeAbsolute(pitch, length);

}

export const getAll = () : Array<Pitch> => {
    return ttet.pitches;
}



export const toPitch = (value: string) : Pitch => {

    let regex = RegExp(/^([A-Za-z])(\d)?([#b])?/);

    let matches = regex.exec(value);

    if(matches != null){

        let octave = 1;
        let accidental = "";

        if(matches[3] != null) {
            accidental = matches[3];
        }

        if(matches[3] != null) {
            accidental = matches[3];
        }

        return {note: matches[1], octave: Number.parseInt(matches[2]), accidental: matches[3]}
    }

    throw new Error("Not able to match input string to pitch");

}

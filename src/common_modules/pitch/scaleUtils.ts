import * as chromeScale from "./chromaticScaleNotes.json";

export type NoteReference = {
    name: string
} 

export const getScale = () : Array<string> => {
    return chromeScale.notes;
}

export const getScaleRange = (firstNote : string, length: number) : Array<string> => {

    let scale = getScale();

    //TODO: optimize the repetition of the scale
    scale = repeatArray(scale, 20);

    let startIndex = scale.findIndex((p) => { return (p == firstNote)});
    
    let range = scale.slice(startIndex, startIndex + length);
    return range;

}

let repeatArray = function(toRepeat: Array<any>, times: number){
    let arr : Array<any>= [];

    for (let i = 0; i <= times; i++) {
        arr = arr.concat(toRepeat);
    };

    return arr;
};


import type { Pitch } from '.';
import { pitchUtils, scaleUtils } from '.';

export const createPitchMatrix = (strings: number, frets: number, tuning: string) : [number, number, Pitch][] => {

    let matrix : [number, number, Pitch][] = [];

    let tunings = tuning.split(',');

    const buildMatrix = () => {

        for (let s = 1; s <= strings; s++) {
            let stringPitches = pitchUtils.getRange(tunings[s-1], frets);
            for (let f = 0; f < frets; f++) {
                matrix.push([s, f, stringPitches[f]]);
            }
        }
    }

    buildMatrix();

    return matrix;
}


export const createScaleMatrix = (strings: number, frets: number, tuning: string) : [number, number, string][] => {

    let matrix : [number, number, string][] = [];

    let tunings = tuning.split(',');

    const buildMatrix = () => {

        for (let s = 1; s <= strings; s++) {
            let stringScaleNotes = scaleUtils.getScaleRange(tunings[s-1], frets);
            for (let f = 0; f < frets; f++) {
                matrix.push([s, f, stringScaleNotes[f]]);
            }
        }
    }

    buildMatrix();

    return matrix;

}


export const filterToString = (matrix : [number, number, any][], string: number) : [number, number, any][] => {

    const find = (string: number) => {

        let result : [number, number, any][] = [];

        for (let i = 0; i < matrix.length; i++) {
            if(matrix[i][0] == string){
                result.push(matrix[i]);
            }
        }

        return result;
    }

    return find(string);

}


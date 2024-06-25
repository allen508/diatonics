<script lang="ts">

    const tet: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];

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

    const chromaticScale: any[] = [
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

    const mmScale: any[] = [
        {index: 1, degree: 1, name: "Ionian"}, 
        {index: 2, degree: 3, name: "Dorian"}, 
        {index: 3, degree: 5, name: "Phrygian"}, 
        {index: 4, degree: 6, name: "Lydian"}, 
        {index: 5, degree: 8, name: "Mixolydian"}, 
        {index: 6, degree: 10, name: "Aeolian"}, 
        {index: 7, degree: 12, name: "Locrian"}];



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

    const diatonicWithScale = (scale: any[], tetIndex: number) => {
        return scale[tetIndex].index != -1;
    }


    const calcDiatonics = (key: number, mode: number, root: number) => {
        
        let newMajMin = padScaleBlanks(mmScale);
        let newChrome = rotate(chromaticScale, key-1+(root-1));
        newMajMin = rotate(newMajMin, newMajMin.findIndex((x: any) => x.degree == mode)+(root-1));

        let results: any[] = [];

        for (let i = 0; i < tet.length; i++) {

            let chromeDiatonic = diatonicWithScale(newChrome, i);
            let majMinDiatonic = diatonicWithScale(newMajMin, i);
            let intDiatonic = diatonicWithScale(newMajMin, i);

            let chorme = newChrome[i];
            let majMin = newMajMin[i];
            let int = intervals[i];


            let result = {
                tet: tet[i], 
                chormatic: {index:  chorme.index, name: chorme.name, diatonic: chromeDiatonic}, 
                majMin: {index: majMin.index, name: majMin.name, diatonic: majMinDiatonic},
                interval: {index: int.index, name: int.name, diatonic: intDiatonic}
            };
            
            results = [...results, result];

        }

    }

    calcDiatonics(1, 1, 1);

</script>

<table>
    <tr>
        <td></td>
    </tr>
</table>

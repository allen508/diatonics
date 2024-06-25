<script lang="ts">

    let posInfo: number[] = [75,105,135,165,195,225,255,285,315,345,15,45];

    let notes: any[] = [
        {index: 1, name: "C"},
        {index: 2, name: "C#"},
        {index: 3, name: "D"},
        {index: 4, name: "D#"},
        {index: 5, name: "E"},
        {index: 6, name: "F"},
        {index: 7, name: "F#"},
        {index: 8, name: "G"},
        {index: 9, name: "G#"},
        {index: 10, name: "A"},
        {index: 11, name: "A#"},
        {index: 12, name: "B"}];

    let modes: number[] = [1,0,2,0,3,4,0,5,0,6,0,7];
    let intervals: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
    let intervalModes: number[] = [];

    let triad: any[] = [{diatonic:1, offset:0}, {diatonic: 3, offset: 0}, {diatonic: 5, offset: 0}];

    let selectedKey: any;
    let selectedMode: number;
    let intervalRootIndex: number;


    const rotate = (arr: any[], count: number = 1) => {
        return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
    };

    let model: any[] = []; 

    const buildModel = () => {

        model = [];
        modesAdjustedToIntervalRoot();

        let chordPattern = triad;

        for(let i = 0; i < 12; i++) {

            model[i] = {
                index: i+1,
                posInfo: {angle: posInfo[i]}, 
                note: {
                    note: notes[i],
                    diatonic: modes[i] != 0
                },
                mode: {mode: modes[i]},
                interval: {
                    interval: intervals[i],
                    chordDiatonic: false
                },
                intervalMode: {
                    intervalMode: intervalModes[i]
                }
            };

        }

        for(let i = 0; i < 12; i++) {

            let chordPart = chordPattern.find((obj) => obj.diatonic == intervalModes[i]);

            let n = i;

            if(chordPart) {
                n = i + chordPart.offset;
            }

            model[n].interval.chordDiatonic = 
                chordPart && // Is part of a chord
                (intervals.indexOf(1) == intervalModes.indexOf(1)); // Makes sure we're on a mode 

        }

        selectedKey = notes[0];
        selectedMode = modes[0];

    };


    const modesAdjustedToIntervalRoot = () => {

        intervalModes = [];
        intervalRootIndex = intervals.indexOf(1);

        //let tempInt = [...rotate(intervals, intervalRootIndex)];
        let tempMode = [...rotate(modes, intervalRootIndex)];

        let n = 1;
        for(let i = 0; i < 12; i++) {

            if(tempMode[i] != 0){
                intervalModes = [...intervalModes, n]
                n=n+1;
            }
            else {
                intervalModes = [...intervalModes, 0]
            }

        }

        intervalModes = [...rotate(intervalModes, intervalRootIndex * -1)];

    };


    const shiftNotesUp = () => {
        notes = [...rotate(notes, 1)];
        buildModel();
    }

    const shiftModesUp = () => {
        modes = [...rotate(modes, 1)];
        buildModel();
    }

    const shiftIntervalsUp = () => {
        intervals = [...rotate(intervals, 1)];
        buildModel();
    }

    const shiftNotesDown = () => {
        notes = [...rotate(notes, -1)];
        buildModel();
    }

    const shiftModesDown = () => {
        modes = [...rotate(modes, -1)];
        buildModel();
    }

    const shiftIntervalsDown = () => {
        intervals = [...rotate(intervals, -1)];
        buildModel();
    }


    let changeKeySelect: number;

    const changeKey = () => {
        notes = [...rotate(notes, notes.findIndex((x) => x.index == changeKeySelect))];
        buildModel();
    }

    let changeModeSelect: number;
    
    const changeMode = () => {
        modes = [...rotate(modes, modes.findIndex((x) => x == changeModeSelect))];
        buildModel();
    }

    let changeRootSelect: number;
    
    const changeRoot = () => {

        let noteIndex = notes.findIndex((x) => x.index == changeRootSelect);
        let rootIndex = intervals.findIndex((x) => x == 1);

        console.log(changeRootSelect + " - noteIndex " + noteIndex + " - rootIndex " + rootIndex);
        intervals = [...rotate(intervals, rootIndex - noteIndex)];
        buildModel();
    }

    buildModel();

</script>

<div><p>Selected Key = {selectedKey.name}</p></div>
<div><p>Selected Mode = {selectedMode}</p></div>
<div><p>Interval Root Index = {intervalRootIndex}</p></div>

<div>
    <select bind:value={changeKeySelect} on:change={changeKey}>
        <option value="1">C</option>
        <option value="2">C#</option>
        <option value="3">D</option>
        <option value="4">D#</option>
        <option value="5">E</option>
        <option value="6">F</option>
        <option value="7">F#</option>
        <option value="8">G</option>
        <option value="9">G#</option>
        <option value="10">A</option>
        <option value="11">A#</option>
        <option value="12">B</option>
    </select>
</div>

<div>
    <select bind:value={changeModeSelect} on:change={changeMode}>
        <option value="1">Ionian</option>
        <option value="2">Dorian</option>
        <option value="3">Phrygian</option>
        <option value="4">Lydian</option>
        <option value="5">Mixolydian</option>
        <option value="6">Aeolian</option>
        <option value="7">Locrian</option>
    </select>
</div>

<div>
    <select bind:value={changeRootSelect} on:change={changeRoot}>
        <option value="1">C</option>
        <option value="2">C#</option>
        <option value="3">D</option>
        <option value="4">D#</option>
        <option value="5">E</option>
        <option value="6">F</option>
        <option value="7">F#</option>
        <option value="8">G</option>
        <option value="9">G#</option>
        <option value="10">A</option>
        <option value="11">A#</option>
        <option value="12">B</option>
    </select>
</div>


<table class="table">
    <tr>
        <td>Index</td>
        <td>Angle</td>
        <td>Note</td>
        <td>Note</td>
        <td>Mode</td>
        <td>Interval</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><button on:click={shiftNotesUp}>Up</button></td>
        <td></td>
        <td><button on:click={shiftModesUp}>Up</button></td>
        <td><button on:click={shiftIntervalsUp}>Up</button></td>
    </tr>
    {#each model as item}
    <tr>
        <td>{item.index}</td>
        <td>{item.posInfo.angle}</td>
        <td class:highlight={item.note.note.index == 1}>{item.note.note.index}</td>
        <td class:diatonic-note={item.note.diatonic}>{item.note.note.name}</td>
        <td class:diatonic-scale={item.mode.mode!=0}>{item.mode.mode}</td>
        <td class:diatonic-interval={item.interval.chordDiatonic}>{item.interval.interval}</td>
    </tr>
    {/each}
    <tr>
        <td></td>
        <td></td>
        <td><button on:click={shiftNotesDown}>Down</button></td>
        <td></td>
        <td><button on:click={shiftModesDown}>Down</button></td>
        <td><button on:click={shiftIntervalsDown}>Down</button></td>
    </tr>
</table>


<style>

    .table {
        margin: 40px;
    }

    .table tr td {
        padding: 10px;
    }

    .highlight {
        background-color: aquamarine;
    }

    .diatonic-note {
        background-color: burlywood;
    }

    .diatonic-scale {
        background-color: cadetblue;
    }

    .diatonic-interval {
        background-color: coral;
    }

</style>
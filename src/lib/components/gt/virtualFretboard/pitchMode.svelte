<script lang="ts">

    import type { Pitch } from '$common_modules/pitch';
    import { fretboardModel } from '$common_modules/pitch';

    export let frets : number;
    export let strings : number;
    export let tuning : string;

    let selectedPitch : Pitch = { accidental: "", note: "", octave: 0}; 
    
    export const setPitch = (pitch: Pitch) => {
        selectedPitch = pitch;
    };

    let matrix = fretboardModel.createPitchMatrix(strings, frets, tuning);

    let notes1 = fretboardModel.filterToString(matrix, 1);
    let notes2 = fretboardModel.filterToString(matrix, 2);
    let notes3 = fretboardModel.filterToString(matrix, 3);
    let notes4 = fretboardModel.filterToString(matrix, 4);
    let notes5 = fretboardModel.filterToString(matrix, 5);
    let notes6 = fretboardModel.filterToString(matrix, 6);

</script>


{#each notes1 as note, index}
<circle r="5" cx="{index * 20 }" cy="70" class:notecircle={true} />
<circle r="5" cx="{index * 20 }" cy="70" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental} />
<text text-anchor="middle" dominant-baseline="central" x="{index * 20 }" y="70" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental}>{note[2].note + note[2].octave + note[2].accidental}</text>
{/each}

{#each notes2 as note, index}
<circle r="5" cx="{index * 20 }" cy="60" class:notecircle={true} />
<circle r="5" cx="{index * 20 }" cy="60" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental} />
<text text-anchor="middle" dominant-baseline="central" font-size="5pt" x="{index * 20 }" y="60" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental}>{note[2].note + note[2].octave + note[2].accidental}</text>
{/each}

{#each notes3 as note, index}
<circle r="5" cx="{index * 20 }" cy="50" class:notecircle={true} />
<circle r="5" cx="{index * 20 }" cy="50" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental} />
<text text-anchor="middle" dominant-baseline="central" font-size="5pt" x="{index * 20 }" y="50" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental}>{note[2].note + note[2].octave + note[2].accidental}</text>
{/each}

{#each notes4 as note, index}
<circle r="5" cx="{index * 20 }" cy="40" class:notecircle={true} />
<circle r="5" cx="{index * 20 }" cy="40" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental} />
<text text-anchor="middle" dominant-baseline="central" font-size="5pt" x="{index * 20 }" y="40" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental}>{note[2].note + note[2].octave + note[2].accidental}</text>
{/each}

{#each notes5 as note, index}
<circle r="5" cx="{index * 20 }" cy="30" class:notecircle={true} />
<circle r="5" cx="{index * 20 }" cy="30" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental} />
<text text-anchor="middle" dominant-baseline="central" font-size="5pt" x="{index * 20 }" y="30" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental}>{note[2].note + note[2].octave + note[2].accidental}</text>
{/each}

{#each notes6 as note, index}
<circle r="5" cx="{index * 20 }" cy="20" class:notecircle={true} />
<circle r="5" cx="{index * 20 }" cy="20" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental} />
<text text-anchor="middle" dominant-baseline="central" font-size="5pt" x="{index * 20 }" y="20" class:highlight={note[2].note == selectedPitch.note && note[2].octave == selectedPitch.octave && note[2].accidental == selectedPitch.accidental}>{note[2].note + note[2].octave + note[2].accidental}</text>
{/each}


<style>

    text.highlight {
        font-weight: bold;
    }

    text {
        font-size: 3pt;
        fill: white;
    }

    circle.notecircle {
        stroke-width: 0.2;
        fill: cadetblue;
        stroke: transparent;
    }

    circle {
        stroke-width: 0;
        fill: transparent;
        stroke: transparent;
    }
    
    circle.highlight {
        stroke-width: 0.5;
        fill: orange;
        stroke: transparent;
    }
</style>



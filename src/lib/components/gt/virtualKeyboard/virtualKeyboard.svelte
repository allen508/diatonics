<script lang="ts" context="module">

    import * as Tone from 'tone';

    import type { Pitch } from '$common_modules/pitch';
    import { pitchUtils } from '$common_modules/pitch';

    const pitches = pitchUtils.getAll();

    type Key = {
        pitch: Pitch
        isSharp: boolean
        index: number
    }

</script>

<script lang="ts">

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let container;

    let keys : Array<Key> = [];

    let keyIndex = 0;
    for (let i = 0; i < pitches.length; i++) {

        if(pitches[i].accidental == "") {
            keyIndex = keyIndex+1;
        }      

        keys.push( { 
            index : keyIndex,
            pitch : pitches[i], 
            isSharp : pitches[i].accidental == "#"
        } )
    }

    let selectedPitch: Pitch = { note : "", octave: 0, accidental: ""};


    const soundNote = (pitch : Pitch) => {

        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        // trigger the attack immediately
        synth.triggerAttack(pitch.note + pitch.accidental + pitch.octave, now);
        // wait one second before triggering the release
        synth.triggerRelease(now + 1)

    }


    export const handleClick = (pitch : Pitch) => {
        selectedPitch = pitch;
        dispatch('key', pitch);
        soundNote(pitch);
    }

</script>

<p>{pitches.length}</p>
<svg viewBox="950 0 100 450" xmlns="http://www.w3.org/2000/svg" bind:this={container}>
    {#each keys as key}
        {#if !key.isSharp}
            <rect class="key" x="{3 + (key.index * 30)}" y="40" width="30" height="200" on:click={() => handleClick(key.pitch)} on:keyup={()=>{}} role="button" tabindex="{key.index}" class:highlight={key.pitch.note == selectedPitch.note && key.pitch.octave == selectedPitch.octave && key.pitch.accidental == selectedPitch.accidental} />
            <text x="{7 + (key.index * 30)}" y="260" class:highlight={key.pitch.note == selectedPitch.note && key.pitch.octave == selectedPitch.octave && key.pitch.accidental == selectedPitch.accidental}>{key.pitch.note + key.pitch.octave + key.pitch.accidental}</text>
        {/if}
    {/each}

    {#each keys as key}
        {#if key.isSharp}
            <rect class="key sharp" x="{25 + (key.index * 30)}" y="40" width="15" height="150" on:click={() => handleClick(key.pitch)} on:keyup={()=>{}} role="button" tabindex="{key.index}" class:highlight={key.pitch.note == selectedPitch.note && key.pitch.octave == selectedPitch.octave && key.pitch.accidental == selectedPitch.accidental} />
            <text x="{20 + (key.index * 30)}" y="20" class:highlight={key.pitch.note == selectedPitch.note && key.pitch.octave == selectedPitch.octave && key.pitch.accidental == selectedPitch.accidental}>{key.pitch.note + key.pitch.octave + key.pitch.accidental}</text>
        {/if}
    {/each}


</svg>


<style>
svg {
    background-color: white;
    width: 100%;
    height: 300px;
}

rect.key {
    fill: white;
    stroke: black;
}

rect.key.sharp {
    fill: black;
    stroke: black;
}

rect.highlight {
    fill: greenyellow;
}

rect.key.sharp.highlight {
    fill: greenyellow;
    stroke: black;
}


text.highlight {
    font-weight: bold;
}

</style>



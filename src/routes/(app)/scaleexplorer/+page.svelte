
<script lang="ts">

    //FEATURES:
    // - SHOW VIRTUAL KEYBOARD
    // - SHOW VIRTUAL FRET BOARD
    // - SYNC PITCH
    // - SYNC NOTE

    import * as VirtualKeyboard from "$lib/components/gt/virtualKeyboard/virtualKeyboard.svelte";
    import { VirtualFretboard, PitchMode, ScaleMode } from "$lib/components/gt/virtualFretboard";

    let pitch : PitchMode;
    let scale : ScaleMode;

    const updatePitch = (event : any) => {
        pitch.setPitch(event.detail);
        scale.setNote(event.detail.note + event.detail.accidental);
    };

</script>

<VirtualKeyboard.default on:key={updatePitch}></VirtualKeyboard.default>

<VirtualFretboard strings={6} frets={20} >
    <PitchMode strings={6} frets={20} tuning="E2,A2,D3,G3,B3,E4" bind:this={pitch}></PitchMode>
</VirtualFretboard>

<VirtualFretboard strings={6} frets={20} >
    <ScaleMode strings={6} frets={20} tuning="E,A,D,G,B,E" bind:this={scale}></ScaleMode>
</VirtualFretboard>


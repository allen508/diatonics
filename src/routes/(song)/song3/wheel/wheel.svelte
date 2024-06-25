<script lang="ts">

    import NoteWheel from './noteWheel/noteWheel.svelte';
    import IntervalWheel from './intervalWheel/intervalWheel.svelte';
    import ScaleWheel from './scaleWheel/scaleWheel.svelte';

    let cx=400, cy=400;

    let noteWheel: NoteWheel;
    let intervalWheel: IntervalWheel;
    let scaleWheel: ScaleWheel;

    let currentAAngle = 0;

    export const changeKey = (target: number) => {
        currentAAngle = noteWheel.rotateToTop(target);
        intervalWheel.rotateToPosition(target, currentAAngle);
    };

    export const changeMode = (target: number) => {
        scaleWheel.rotateToTop(target);
    };

    export const changeRoot = (target: number) => {
        intervalWheel.rotateToPosition(target, currentAAngle);
    };

    const noteClicked = (target: number) => {
        changeRoot(target);
    }

</script>

<svg width="800" height="800">
    <ScaleWheel bind:this={scaleWheel} cx={cx} cy={cy}></ScaleWheel>
    <NoteWheel bind:this={noteWheel} cx={cx} cy={cy} clicked={noteClicked}></NoteWheel>
    <IntervalWheel bind:this={intervalWheel} cx={cx} cy={cy}></IntervalWheel>
</svg>

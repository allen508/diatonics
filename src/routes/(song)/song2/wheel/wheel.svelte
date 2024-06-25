<script lang="ts">
    import { onMount, setContext } from 'svelte';

    import ScaleClickAnnulus from './scaleClickAnnulus/scaleClickAnnulus.svelte';
    import ClickAnnulus from './clickAnnulus/clickAnnulus.svelte'; 
    import IntClickAnnulus from './intClickAnnulus/intClickAnnulus.svelte';
    import NoteAnnulus from './noteAnnulus/noteAnnulus.svelte';
    import IntervalAnnulus from './intervalAnnulus/intervalAnnulus.svelte';
    import ScaleAnnulus from './scaleAnnulus/scaleAnnulus.svelte';

    let cx=400, cy=400;

    let selectedKey = 0;

    let noteDonut: any;
    let noteDonutPosition: number = 1;

    let intervalDonut: any;
    let intervalDonutPosition: number = 1;

    let scaleDonut: any;
    let scaleDonutPosition: number = 1;


    let onClick = (selectedPosition: number) => {
        

        console.log("WH KEY - CUR=" + noteDonutPosition + " SEL=" + (selectedPosition+selectedKey));

        noteDonut.changeSelection(noteDonutPosition, selectedPosition+selectedKey);
        noteDonutPosition = selectedPosition+selectedKey;

        intervalDonut.changeSelection(intervalDonutPosition, selectedPosition+selectedKey);
        intervalDonutPosition = selectedPosition+selectedKey;

    };

    let onIntClick = (selectedPosition: number) => {
        
        console.log("WH INT - CUR=" + intervalDonutPosition + " SEL=" +  selectedPosition);

        intervalDonut.changeSelection(intervalDonutPosition, selectedPosition);
        intervalDonutPosition = selectedPosition;
        
    };

    let onScaleClick = (selectedPosition: number) => {
        
        console.log("WH SCALE - CUR=" + scaleDonutPosition + " SEL=" +  selectedPosition);

        scaleDonut.changeSelection(selectedPosition, 1);
        scaleDonutPosition = selectedPosition;

        noteDonut.changeSelection(noteDonutPosition, 1);
        noteDonutPosition = 1;

        intervalDonut.changeSelection(intervalDonutPosition, 1);
        intervalDonutPosition = 1;


    };

</script>


<svg width="800" height="800">
    <ScaleAnnulus bind:this={scaleDonut} cx={cx} cy={cy} bind:currentPosition={scaleDonutPosition}></ScaleAnnulus>
    <NoteAnnulus bind:this={noteDonut} cx={cx} cy={cy} bind:currentPosition={noteDonutPosition}></NoteAnnulus>
    <IntervalAnnulus bind:this={intervalDonut} cx={cx} cy={cy} bind:currentPosition={intervalDonutPosition}></IntervalAnnulus>
    <ScaleClickAnnulus cx={cx} cy={cy} bind:onClick={onScaleClick}></ScaleClickAnnulus>
    <ClickAnnulus cx={cx} cy={cy} bind:onClick={onClick}></ClickAnnulus>
    <IntClickAnnulus cx={cx} cy={cy} bind:onClick={onIntClick}></IntClickAnnulus>
</svg>

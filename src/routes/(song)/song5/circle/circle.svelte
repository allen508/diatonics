<script lang="ts">
    import { onMount } from "svelte";

    import * as musicUtils from "./musicUtils";
    import Annulus from "./svg/annulus.svelte";
    import HighlightSector from "./svg/highlightSector.svelte";

    const 
        height: number = 800, 
        width: number = 800; 

    let cx = height / 2;
    let cy = width / 2;

    let modeRing: Annulus;
    let noteRing: Annulus;
    let intervalRing: Annulus;

    export let key: number; 
    export let mode: number; 

    const modeShapeDataMap = (mode: any) => {
        return {
            degree: mode.degree,
            radialAngle: (mode.degree * 30) + 60,
            spreadAngle: 30,
            text: mode.name
        };
    };

    const chromeShapeDataMap = (chrome: any) => {
        return {
            degree: chrome.degree,
            radialAngle: (chrome.degree * 30) + 60,
            spreadAngle: 30,
            text: chrome.name
        };
    };

    const intervalShapeDataMap = (interval: any) => {
        return {
            degree: interval.index,
            radialAngle: (interval.index * 30) + 60,
            spreadAngle: 30,
            text: interval.name
        };
    };

    const modeShapeData: any[] = musicUtils.mmScale.map((x) => modeShapeDataMap(x));
    const noteShapeData: any[] = musicUtils.chromaticScale.map((x) => chromeShapeDataMap(x));
    const intervalShapeData: any[] = musicUtils.intervals.map((x) => intervalShapeDataMap(x));

    let noteCurrentAngle: number = 0;
    let intervalCurrentAngle: number = 0;
    let modeCurrentAngle: number = 0;

    export const rotateToPosition = (ring: any, source: number, destination: number=1, startAngle: number): number => {

        //Angles are in increments of 30 deg (TODO, work from actual angles in the shape data)
        //TODO, find shortest path
        //Positions are clockwise
        let from = startAngle;
        let to = startAngle - ((((destination-1)*30)*-1) + ((source-1) * 30)) - startAngle;
        ring.rotate(from, to);

        //The resulting angle it rotated to
        return to;
    };

    export const changeMode = (target: number) => {

        mode = target;

        let modeDegree = musicUtils.mmScale.find((x)=>x.index == mode);

        modeCurrentAngle = rotateToPosition(modeRing, modeDegree.degree, 1, modeCurrentAngle);

        highlightChromeModeDiatonic(key, mode);
        highlightIntervalChordDiatonic(key, mode, 1);
    }

    export const changeKey = (target: number) => {

        key = target;

        noteCurrentAngle = rotateToPosition(noteRing, target, 1, noteCurrentAngle);
        intervalCurrentAngle = rotateToPosition(intervalRing, 1, 1, intervalCurrentAngle);

        highlightChromeModeDiatonic(key, mode);
        highlightIntervalChordDiatonic(key, mode, 1);

    };

    const onNoteClick = (item: any) => {
        intervalCurrentAngle = rotateToPosition(intervalRing, key, item.degree, intervalCurrentAngle);

        highlightIntervalChordDiatonic(key, mode, item.degree);
    };

    const onIntervalClick = (item: any) => {

    };

    const onModeClick = (item: any) => {
    };

    onMount(()=>{
    });


    export const highlightChromeModeDiatonic = (key: number, mode: number) => {
        
        noteRing.clearHighlight();

        const matches = musicUtils.findScaleDiatonicsForChrome(key, musicUtils.mmScale, mode);

        for (let i = 0; i < matches.length; i++) {
            if(matches[i].diatonic == true) {
                noteRing.highlight(matches[i].chromatic.degree-1, "#e0e1dd");
            }
        }
    }


    export const highlightIntervalChordDiatonic = (key: number, mode: number, root: number) => {
        
        intervalRing.clearHighlight();

        const matches = musicUtils.findChordDiatonicsForIntervals(key, musicUtils.mmScale, mode, musicUtils.firstTriadChord, root);

        for (let i = 0; i < matches.length; i++) {
            if(matches[i].diatonic == true) {
                intervalRing.highlight(matches[i].intervals.index-1, "#778da9");
            }
        }
    }

</script>

<svg width={width} height="100%" viewBox="0 0 800 800">
    <Annulus bind:this={modeRing} cx={cx} cy={cy} innerRadius={300} outerRadius={330} data={modeShapeData} clicked={onModeClick} type="modes" fontSize={18}></Annulus>
    <Annulus bind:this={noteRing} cx={cx} cy={cy} innerRadius={240} outerRadius={300} data={noteShapeData} clicked={onNoteClick} type="notes" fontSize={42}></Annulus>
    <Annulus bind:this={intervalRing} cx={cx} cy={cy} innerRadius={200} outerRadius={240} data={intervalShapeData} clicked={onIntervalClick} type="intervals" fontSize={20}></Annulus>
    <HighlightSector cx={cx} cy={cy} innerRadius={240} outerRadius={330} radialAngle={90} spreadAngle={30}></HighlightSector>
</svg>

<script lang="ts">

import * as pathData from '../pathData';
import { onMount } from 'svelte';

let annPath: SVGPathElement;
let arcPath: SVGPathElement;

export let cx: number;
export let cy: number;
export let innerRadius: number;
export let outerRadius: number; 
export let noteText: string;
export let position: number;
export let diatonic: boolean;

let textPathId: string = "";
textPathId = "sTextPath" + position;

onMount(() => {

    let pos = pathData.positionMap[position-1];

    annPath.setAttribute("d", pathData.annularSector(cx, cy, pos.startAngle + 2, pos.endAngle - 2, innerRadius, outerRadius));
    arcPath.setAttribute("d", pathData.arcPath(cx, cy, pos.startAngle, pos.endAngle, 310));
});

</script>

<path bind:this={annPath} class="annular" class:diatonic={diatonic} />

<path bind:this={arcPath} id="{textPathId}" class="textPath" />

<use xlink:href="#{textPathId}"></use>
<text class="text" class:diatonicText={diatonic}>
    <textPath text-anchor="middle" startOffset="50%" xlink:href="#{textPathId}">{noteText}</textPath>
</text>

<style>

.annular {
    stroke-width: 1pt;
    fill: none;
    stroke: none;
}

.diatonic {
    fill: #446688;
}

.diatonicText {
    stroke: #FFFFFF;
}

.textPath {
    fill: none;
    stroke: none;
}

.text {
    font-size: 10pt;
}

</style>
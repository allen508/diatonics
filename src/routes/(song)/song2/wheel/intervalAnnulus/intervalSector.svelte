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

let textPathId: string = "";
textPathId = "iTextPath" + position;


onMount(() => {

    let pos = pathData.positionMap[position-1];

    annPath.setAttribute("d", pathData.annularSector(cx, cy, pos.startAngle, pos.endAngle, innerRadius, outerRadius));
    arcPath.setAttribute("d", pathData.arcPath(cx, cy, pos.startAngle, pos.endAngle, 208));
});

</script>

<path bind:this={annPath} class="annular" class:root={position==1} class:fifth={position==8} class:fourth={position==6} />

<path bind:this={arcPath} id="{textPathId}" class="textPath" />

<use xlink:href="#{textPathId}"></use>
<text class="text">
    <textPath text-anchor="middle" startOffset="50%" xlink:href="#{textPathId}">{noteText}</textPath>
</text>

<style>

.annular {
    stroke-width: 1pt;
    fill: #FFFFFF;
    stroke: #446688;
}

.textPath {
    fill: none;
    stroke: none;
}

.text {
    font-size: 18pt;
}

.root {
    fill: #a5c3e0;
}

.fourth {
    fill: #adc8e1;
}


.fifth {
    fill: #9cb1c5;
}


</style>
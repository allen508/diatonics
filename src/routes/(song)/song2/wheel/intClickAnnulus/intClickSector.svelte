<script lang="ts">

import * as pathData from '../pathData';
import { onMount } from 'svelte';

let annPath: SVGPathElement;
let arcPath: SVGPathElement;

export let cx: number;
export let cy: number;
export let innerRadius: number;
export let outerRadius: number; 
export let position: number;

export let onClick: any;

function clicked () 
{
    onClick(position);
}

onMount(() => {

    let pos = pathData.positionMap[position-1];
    annPath.setAttribute("d", pathData.annularSector(cx, cy, pos.startAngle, pos.endAngle, innerRadius, outerRadius));
});

</script>

<path bind:this={annPath} class="annular" on:click={clicked} />

<style>

.annular {
    stroke-width: 1pt;
    fill: #FFFFFF;
    stroke: #446688;
    fill-opacity:0;
    stroke-opacity:0;
}

</style>
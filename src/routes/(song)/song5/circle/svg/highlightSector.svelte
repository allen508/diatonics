<svelte:options accessors/>
<script lang="ts">

    import { onMount } from "svelte";
    import * as shapeUtils from "./shapeUtils";

    export let 
        fillColour: string = "none",
        cx: number,
        cy: number,
        radialAngle: number,
        spreadAngle: number,
        innerRadius: number,
        outerRadius: number

    let sectorPath : SVGPathElement;

    let startRadialAngle: number = (radialAngle-(spreadAngle/2));
    let endRadialAngle: number = (radialAngle+(spreadAngle/2));


    onMount(() => {
        sectorPath.setAttribute("d", shapeUtils.annularSectorPathData(cx, cy, startRadialAngle, endRadialAngle, innerRadius, outerRadius));
    });

</script>

<path bind:this={sectorPath} fill={fillColour} class="annular" />

<style>

    .annular {
        stroke-width: 3pt;
        stroke: red;
        cursor: pointer;
    }
    
</style>
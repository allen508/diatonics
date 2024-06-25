<svelte:options accessors/>
<script lang="ts">

    import { onMount } from "svelte";
    import * as shapeUtils from "./shapeUtils";

    export let 
        fillColour: string = "#FFFFFF",
        fontSize: number,
        cx: number,
        cy: number,
        radialAngle: number,
        spreadAngle: number,
        innerRadius: number,
        outerRadius: number,
        text: string,
        type: string;

    export let clicked: any;

    let fontSizePt: number = ((outerRadius - innerRadius) * 0.74999943307122)/1.2;

    let sectorPath : SVGPathElement;
    let textPath : SVGPathElement;

    let textPathId: string = "";
    textPathId = type + "TextPath" + radialAngle;

    let startRadialAngle: number = (radialAngle-(spreadAngle/2));
    let endRadialAngle: number = (radialAngle+(spreadAngle/2));


    onMount(() => {
        sectorPath.setAttribute("d", shapeUtils.annularSectorPathData(cx, cy, startRadialAngle, endRadialAngle, innerRadius, outerRadius));
        textPath.setAttribute("d", shapeUtils.arcPathData(cx, cy, startRadialAngle, endRadialAngle, innerRadius+10));
    });

</script>

<path bind:this={sectorPath} fill={fillColour} class="annular" on:click={clicked} />
<path bind:this={textPath} id="{textPathId}" class="textPath" />

<use xlink:href="#{textPathId}"></use>
<text class="text" font-size={fontSize} on:click={clicked}>
    <textPath text-anchor="middle" startOffset="50%" xlink:href="#{textPathId}">{text}</textPath>
</text>

<style>

    .annular {
        stroke-width: 1pt;
        stroke: #446688;
        cursor: pointer;
    }

    .textPath {
        fill: none;
        stroke: none;
    }

    .text {
        user-select:none;
        cursor: pointer;
    }
</style>
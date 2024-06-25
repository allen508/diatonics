<script lang="ts">

    import { onMount } from 'svelte';
    import * as shapeData from './shapeData';
    import * as shapeUtils from './shapeUtils';

    let annPath: SVGPathElement;
    let arcPath: SVGPathElement;

    export let cx: number;
    export let cy: number;
    export let innerRadius: number;
    export let outerRadius: number; 
    export let type: string;
    export let text: string = "";
    export let position: number;

    export let fillColour: string = "#FFFFFF";  

    export let clicked: any;

    let fontSizePt: number = ((outerRadius - innerRadius) * 0.74999943307122)/1.2;

    let textPathId: string = "";
    textPathId = type + "TextPath" + position;

    onMount(() => {

        let pos = shapeData.sectionPositions[position-1];

        annPath.setAttribute("d", shapeUtils.annularSectorPathData(cx, cy, pos.startAngle, pos.endAngle, innerRadius, outerRadius));
        arcPath.setAttribute("d", shapeUtils.arcPathData(cx, cy, pos.startAngle, pos.endAngle, innerRadius+10));
    });

    const onClick = () => {
        //console.log("Sector Clicked " + position);
        clicked(position);
    };



</script>

<path bind:this={annPath} class="annular" on:click={onClick} style="--fill-colour: {fillColour}"/>

<path bind:this={arcPath} id="{textPathId}" class="textPath" />

<use xlink:href="#{textPathId}"></use>
<text class="text" font-size={fontSizePt} on:click={onClick}>
    <textPath text-anchor="middle" startOffset="50%" xlink:href="#{textPathId}">{text}</textPath>
</text>

<style>

.annular {
    stroke-width: 1pt;
    fill: var(--fill-colour);
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
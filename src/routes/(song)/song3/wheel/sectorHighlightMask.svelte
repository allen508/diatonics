<script lang="ts">

  import { onMount } from 'svelte';
  import * as shapeData from './shapeData';
  import * as shapeUtils from './shapeUtils';

  export let cx: number;
  export let cy: number;

  export let outerRadius: number;        
  export let innerRadius: number;

  export let position: number;

  export let colour: string = "#446688";

  let pathElement: SVGPathElement;

  onMount(() => {
    let pos = shapeData.sectionPositions[position-1];
    pathElement.setAttribute("d", shapeUtils.annularSectorPathData(cx, cy, pos.startAngle, pos.endAngle, innerRadius, outerRadius));
  });

</script>

<path bind:this={pathElement} class="highlight" style="--stroke-colour: {colour}" />

<style>

  .highlight {
    stroke: var(--stroke-colour);
    stroke-width: 2pt;
    fill: none;
  }


</style>

<script lang="ts">

  import { onMount } from 'svelte';
  import * as shapeData from './shapeData';
  import * as shapeUtils from './shapeUtils';

    export let cx: number;
    export let cy: number;

    export let outerRadius: number;        
    export let innerRadius: number;

    export let position: number;
    export let onClick: any;

    let pathElement: SVGPathElement;

    onMount(() => {
      let pos = shapeData.sectionPositions[position-1];
      pathElement.setAttribute("d", shapeUtils.annularSectorPathData(cx, cy, pos.startAngle, pos.endAngle, innerRadius, outerRadius));
    });


    function clicked () {
      onClick(position);
    }

</script>

<path bind:this={pathElement} class="clickMask" on:click={clicked} />

<style>

  .clickMask {
    opacity: 0%;
    cursor: pointer;
  }

  .clickMask:hover {
    opacity: 50%;
    fill: red;
  }


</style>

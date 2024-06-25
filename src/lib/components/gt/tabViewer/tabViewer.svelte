<script lang="ts">

    import * as tablang from '$common_modules/tablang';
    import * as tablangsvg from '$common_modules/tablang-svg';
    import * as d3 from 'd3';
    import { onMount } from 'svelte';

    let svgContainer : SVGElement;

    export const update = (tabString: string) => {

        let tabData = tablang.parse(tabString);

        svgContainer.innerHTML = "";

        if (tabData.parserErrors.length == 0) {
            const select = d3.select(svgContainer);
            tablangsvg.createSvg(select, tabData.parsingResult);
        } 
    }

</script>

<svg class="w-full h-full" bind:this={svgContainer}></svg>

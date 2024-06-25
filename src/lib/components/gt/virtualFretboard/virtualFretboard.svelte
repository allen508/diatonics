<script lang="ts">

    export let frets : number;
    export let strings : number;

</script>


<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
   
	<!--STRINGS-->
	<path d="M 10 20 H 500" class="string string-6" />
	<path d="M 10 30 H 500" class="string string-5" />
	<path d="M 10 40 H 500" class="string string-4" />
	<path d="M 10 50 H 500" class="string string-3" />
	<path d="M 10 60 H 500" class="string string-2" />
	<path d="M 10 70 H 500" class="string string-1" />

    <!-- FRET 0 -->
    <path d="M 10 19.45 V 70" class="fret fret-0" />

    <!-- REMAINING FRETS -->
    {#each {length: frets -1} as _, i}
    <path d="M {30 + (20 * i)} 20 V 70" class="fret" />

    {#if i == 5}
    <text font-size="5pt" x="{-2 + (20 * i)}" y="85">5</text>
    {/if}
    {#if i == 7}
    <text font-size="5pt" x="{-2 +(20 * i)}" y="85">7</text>
    {/if}
    {#if i == 9}
    <text font-size="5pt" x="{-2 +(20 * i)}" y="85">9</text>
    {/if}
    {#if i == 12}
    <text font-size="5pt" x="{-4 +(20 * i)}" y="85">12</text>
    {/if}


    {/each}
    
    <slot></slot>

</svg>

<style>

    svg {
        background-color: white;
        width: 100%;
        height: 500px;
    }

    path.fret {
        stroke-width: 0.1;
        fill: transparent;
        stroke: black;
    }

    path.fret-0 {
        stroke-width: 2;
    }

    path.string {
        fill: transparent;
        stroke: black;
    }

    path.string-1 {
        stroke-width: 1.108900518089757;
    }

    path.string-2 {
        stroke-width: 0.6853526069776;
    }

    path.string-3 {
        stroke-width: 0.4235801032;
    }

    path.string-4 {
        stroke-width: 0.2617924;
    }

    path.string-5 {
        stroke-width: 0.1618;
    }

    path.string-6 {
        stroke-width: 0.1;
    }
</style>



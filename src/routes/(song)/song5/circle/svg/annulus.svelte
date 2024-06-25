<script lang="ts">

    import RotateAnim from "./rotateAnim.svelte";
    import Sector from "./sector.svelte";

    export let 
        cx: number, 
        cy: number,
        innerRadius: number,
        outerRadius: number,
        backgroundColour: string = "#FFFFFF",
        fontSize: number,
        data: any[],
        type: string;

    export let clicked: any;

    let anim : RotateAnim;

    let sectors : Sector[] = [];

    const onClick = (item: any) => {
        clicked(item);
    }

    export const clearHighlight = () => {
        for (let i = 0; i < data.length; i++) {
            sectors[i].fillColour = backgroundColour;
        }
    }

    export const highlight = (index: number, colour: string) => {
        sectors[index].fillColour = colour;
    }

    export const rotate = (from: number, to: number) => {
        anim.rotate(from, to, cx, cy);
    };

</script>

<g>
    <RotateAnim bind:this={anim}></RotateAnim>

    {#each data as item, index}
        <Sector
            bind:this={sectors[index]}
            cx={cx} 
            cy={cy} 
            innerRadius={innerRadius} 
            outerRadius={outerRadius} 
            radialAngle={item.radialAngle} 
            spreadAngle={item.spreadAngle} 
            fillColour={backgroundColour}
            fontSize={fontSize}
            clicked={() => {onClick(item)}}
            text={item.text}
            type={type}
        ></Sector>
    {/each}

</g>

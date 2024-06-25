<script lang="ts">
    import { onMount } from 'svelte';

    import ClickSector from './scaleClickSector.svelte';

    export let cx: number;
    export let cy: number;

    let outerRadius: number = 330;        
    let innerRadius: number = 300;      

    onMount(()=> {
    });

    export let onClick: any;

    let onClick1: any = (targetPosition: number) => {
        onClick(targetPosition)
    }

</script>

<g>

    <ClickSector position={1} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={2} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={3} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={4} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={5} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={6} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={7} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={8} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={9} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={10} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={11} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>
    <ClickSector position={12} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} onClick={onClick1}></ClickSector>

</g>

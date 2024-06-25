<script lang="ts">
    import { onMount } from 'svelte';

    import IntervalSector from './intervalSector.svelte';

    export let cx: number;
    export let cy: number;

    let outerRadius: number = 240;        
    let innerRadius: number = 200;        

    let anim: SVGAnimateTransformElement;


    onMount(()=> {
    });

    export const changeSelection = (sourcePosition: number, targetPosition: number) => {
        console.log("  INT CHANGE SP=" + sourcePosition + " : TP=" + targetPosition);
        scrollToPosition(sourcePosition, targetPosition);
    }

    let currentAngle: number = 0;
    export let currentPosition: number = 0;

    const scrollToPosition = (sourcePosition: number, targetPosition: number) => {

        let sourceAngle : number = currentAngle;
        let targetAngle : number = ((targetPosition-sourcePosition) * 30) + currentAngle;

        anim.setAttribute("from", sourceAngle + " 400 400");
        anim.setAttribute("to", targetAngle + " 400 400");

        anim.beginElement();

        currentPosition = targetPosition;
        currentAngle = targetAngle;

    }

</script>

<g>

    <animateTransform
        bind:this={anim}
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1s"
        begin="none"
        repeatCount="1" 

        keySplines="
            0.1 0.8 0.2 1;
            0.1 0.8 0.2 1;
            0.1 0.8 0.2 1;
            0.1 0.8 0.2 1;
            0.1 0.8 0.2 1;
            0.1 0.8 0.2 1"
        keyTimes="
            0;0.22;0.33;0.55;0.66;0.88;1"
        calcMode="spline"
        fill="freeze" 
    />
    <IntervalSector position={1} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="Root"></IntervalSector>
    <IntervalSector position={2} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="2nd b"></IntervalSector>
    <IntervalSector position={3} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="2nd"></IntervalSector>
    <IntervalSector position={4} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="3rd b"></IntervalSector>
    <IntervalSector position={5} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="3rd"></IntervalSector>
    <IntervalSector position={6} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="4th"></IntervalSector>
    <IntervalSector position={7} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="Tritone"></IntervalSector>
    <IntervalSector position={8} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="5th"></IntervalSector>
    <IntervalSector position={9} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="6th b"></IntervalSector>
    <IntervalSector position={10} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="6th"></IntervalSector>
    <IntervalSector position={11} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="7th b"></IntervalSector>
    <IntervalSector position={12} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="7th"></IntervalSector>
</g>

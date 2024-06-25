<script lang="ts">
    import { onMount } from 'svelte';

    import NoteSector from './noteSector.svelte';

    export let cx: number;
    export let cy: number;

    let outerRadius: number = 300;        
    let innerRadius: number = 240;        

    let anim: SVGAnimateTransformElement;

    onMount(()=> {
    });

    export const changeSelection = (sourcePosition: number, targetPosition: number) => {
        console.log("  NOTE CHANGE SP=" + sourcePosition + " : TP=" + targetPosition);
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
    <NoteSector position={1} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="A"></NoteSector>
    <NoteSector position={2} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="A#"></NoteSector>
    <NoteSector position={3} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="B"></NoteSector>
    <NoteSector position={4} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="C"></NoteSector>
    <NoteSector position={5} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="C#"></NoteSector>
    <NoteSector position={6} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="D"></NoteSector>
    <NoteSector position={7} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="D#"></NoteSector>
    <NoteSector position={8} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="E"></NoteSector>
    <NoteSector position={9} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="F"></NoteSector>
    <NoteSector position={10} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="F#"></NoteSector>
    <NoteSector position={11} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="G"></NoteSector>
    <NoteSector position={12} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} noteText="G#"></NoteSector>
</g>

<script lang="ts">
    import { onMount } from 'svelte';

    import ScaleSector from './scaleSector.svelte';

    export let cx: number;
    export let cy: number;

    let outerRadius: number = 330;        
    let innerRadius: number = 300;        

    let anim: SVGAnimateTransformElement;

    onMount(()=> {
    });

    export const changeSelection = (sourcePosition: number, targetPosition: number) => {
        console.log("  SCALE CHANGE SP=" + sourcePosition + " : TP=" + targetPosition);
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
    <ScaleSector position={1} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={true} noteText="Ionian"></ScaleSector>
    <ScaleSector position={2} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={false} noteText=""></ScaleSector>
    <ScaleSector position={3} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={true} noteText="Dorian"></ScaleSector>
    <ScaleSector position={4} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={false} noteText=""></ScaleSector>
    <ScaleSector position={5} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={true} noteText="Phrygian"></ScaleSector>
    <ScaleSector position={6} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={true} noteText="Lydian"></ScaleSector>
    <ScaleSector position={7} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={false} noteText=""></ScaleSector>
    <ScaleSector position={8} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={true} noteText="Mixolydian"></ScaleSector>
    <ScaleSector position={9} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={false} noteText=""></ScaleSector>
    <ScaleSector position={10} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={true} noteText="Aeolian"></ScaleSector>
    <ScaleSector position={11} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={false} noteText=""></ScaleSector>
    <ScaleSector position={12} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} diatonic={true} noteText="Locrian"></ScaleSector>
</g>

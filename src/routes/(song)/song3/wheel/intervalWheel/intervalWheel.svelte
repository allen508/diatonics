<script lang="ts">

    import Sector from "../sector.svelte";
    import SectorHighlightMask from "../sectorHighlightMask.svelte";

    export let cx: number;
    export let cy: number;

    let outerRadius: number = 240;        
    let innerRadius: number = 200;  

    let type: string = "interval";

    let anim: SVGAnimateTransformElement;

    const rotate = (fromAngle: number, toAngle: number) => {

        anim.setAttribute("from", fromAngle.toString() + " " + cx + " " + cy);
        anim.setAttribute("to", toAngle.toString() + " " + cx + " " + cy);

        anim.beginElement();

    };

    let currentAngle = 0;

    export const rotateToPosition = (target: number, angleOffSet: number) => {
        //Angles are in increments of 30 deg
        let from = currentAngle;
        let to = currentAngle + (angleOffSet + ((target-1) * 30)) - currentAngle;

        //console.log(target + " " + angleOffSet);
        currentAngle = to;

        rotate(from, to);
    };

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

    <Sector position={1} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="Root" type={type} clicked={()=>{}} fillColour="#CFCFCF"></Sector>
    <Sector position={2} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="b 2nd" type={type} clicked={()=>{}}></Sector>
    <Sector position={3} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="2nd" type={type} clicked={()=>{}}></Sector>
    <Sector position={4} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="b 3rd" type={type} clicked={()=>{}}></Sector>
    <Sector position={5} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="3rd" type={type} clicked={()=>{}}></Sector>
    <Sector position={6} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="4th" type={type} clicked={()=>{}}></Sector>
    <Sector position={7} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="TT" type={type} clicked={()=>{}}></Sector>
    <Sector position={8} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="5th" type={type} clicked={()=>{}}></Sector>
    <Sector position={9} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="b 6th" type={type} clicked={()=>{}}></Sector>
    <Sector position={10} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="6th" type={type} clicked={()=>{}}></Sector>
    <Sector position={11} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="b 7th" type={type} clicked={()=>{}}></Sector>
    <Sector position={12} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="7th" type={type} clicked={()=>{}}></Sector>

</g>



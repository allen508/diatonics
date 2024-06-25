<script lang="ts">

    import Sector from "../sector.svelte";

    export let cx: number;
    export let cy: number;

    export const scale: number[] = [1,3,5,6,8,10,12];

    let outerRadius: number = 330;        
    let innerRadius: number = 300;  

    let type: string = "scale";

    let anim: SVGAnimateTransformElement;

    const rotate = (fromAngle: number, toAngle: number) => {

        anim.setAttribute("from", fromAngle.toString() + " " + cx + " " + cy);
        anim.setAttribute("to", toAngle.toString() + " " + cx + " " + cy);

        anim.beginElement();

    };

    let currentAngle = 0;

    export const rotateToTop = (target: number): number => {
        //Angles are in increments of 30 deg
        let from = currentAngle;
        let to = currentAngle - ((target-1)*30) - currentAngle;
        
        currentAngle = to;
        //console.log("RotateToTop from=" + from + " to=" + to + "; currentAngle="+currentAngle);
        rotate(from, to);

        return currentAngle;

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

    <Sector position={1} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="Ionian" type={type} clicked={()=>{}}></Sector>
    <Sector position={3} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="Dorian" type={type} clicked={()=>{}}></Sector>
    <Sector position={5} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="Phrygian" type={type} clicked={()=>{}}></Sector>
    <Sector position={6} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="Lydian" type={type} clicked={()=>{}}></Sector>
    <Sector position={8} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="Mixolydian" type={type} clicked={()=>{}}></Sector>
    <Sector position={10} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="Aeolian" type={type} clicked={()=>{}}></Sector>
    <Sector position={12} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="Locrian" type={type} clicked={()=>{}}></Sector>

</g>



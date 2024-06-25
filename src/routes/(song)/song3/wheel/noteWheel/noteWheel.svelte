<script lang="ts">

    import Sector from "./../sector.svelte";
    import SectorHighlightMask from "./../sectorHighlightMask.svelte";

    export let cx: number;
    export let cy: number;

    let outerRadius: number = 300;        
    let innerRadius: number = 240;  

    let type: string = "note";

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

    const noteClicked: any = (targetPosition: number) => {
        //console.log("Section clicked - Type=" + type + " TP=" + targetPosition)
        clicked(targetPosition);
    }

    export let clicked: any;


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

    <Sector position={1} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="A" type={type} clicked={noteClicked}></Sector>
    <Sector position={2} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="A#" type={type} clicked={noteClicked}></Sector>
    <Sector position={3} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="B" type={type} clicked={noteClicked}></Sector>
    <Sector position={4} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="C" type={type} clicked={noteClicked}></Sector>
    <Sector position={5} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="C#" type={type} clicked={noteClicked}></Sector>
    <Sector position={6} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="D" type={type} clicked={noteClicked}></Sector>
    <Sector position={7} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="D#" type={type} clicked={noteClicked}></Sector>
    <Sector position={8} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="E" type={type} clicked={noteClicked}></Sector>
    <Sector position={9} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="F" type={type} clicked={noteClicked}></Sector>
    <Sector position={10} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="F#" type={type} clicked={noteClicked}></Sector>
    <Sector position={11} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="G" type={type} clicked={noteClicked}></Sector>
    <Sector position={12} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} text="G#" type={type} clicked={noteClicked}></Sector>

</g>

<SectorHighlightMask position={1} cx={cx} cy={cy} outerRadius={outerRadius} innerRadius={innerRadius} colour="red"></SectorHighlightMask>


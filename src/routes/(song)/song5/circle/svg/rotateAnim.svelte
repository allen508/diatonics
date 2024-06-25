<script lang="ts">

    let anim : SVGAnimateTransformElement;

    export const rotate = (fromAngle: number, toAngle: number, cx: number, cy: number) => {

        anim.setAttribute("from", fromAngle.toString() + " " + cx + " " + cy);
        anim.setAttribute("to", toAngle.toString() + " " + cx + " " + cy);

        anim.beginElement();

    };

</script>

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


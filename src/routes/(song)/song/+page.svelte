<script lang="ts">

    import { onMount } from 'svelte';

    function deg2rad(deg :number) {
        return deg * Math.PI / 180;
    }

    function annularSector(centerX:number, centerY:number, startAngle:number, endAngle:number, innerRadius:number, outerRadius:number) {
        startAngle = deg2rad(startAngle + 180);
        endAngle = deg2rad(endAngle + 180);
        
        var p = [
              [centerX + innerRadius * Math.cos(startAngle),	centerY + innerRadius * Math.sin(startAngle)]
            , [centerX + outerRadius * Math.cos(startAngle),	centerY + outerRadius * Math.sin(startAngle)]
            , [centerX + outerRadius * Math.cos(endAngle),		centerY + outerRadius * Math.sin(endAngle)]
            , [centerX + innerRadius * Math.cos(endAngle),		centerY + innerRadius * Math.sin(endAngle)]
            ];
        
        var angleDiff = endAngle - startAngle
            , largeArc = (angleDiff % (Math.PI * 2)) > Math.PI ? 1 : 0;
        
        var commands = [];
        
        commands.push("M" + p[0].join());
        commands.push("L" + p[1].join());
        commands.push("A" + [outerRadius, outerRadius].join() + " 0 " + largeArc + " 1 " + p[2].join());
        commands.push("L" + p[3].join());
        commands.push("A" + [innerRadius, innerRadius].join() + " 0 " + largeArc + " 0 " + p[0].join());
        commands.push("z");
        
        return commands.join(" ");
    }

    function arcPath(centerX:number, centerY:number, startAngle:number, endAngle:number, radius:number) {
        startAngle = deg2rad(startAngle + 180);
        endAngle = deg2rad(endAngle + 180);
        
        var p = [
              [centerX + radius * Math.cos(startAngle),	centerY + radius * Math.sin(startAngle)]
            , [centerX + radius * Math.cos(endAngle),		centerY + radius * Math.sin(endAngle)]
            ];
        
        var angleDiff = endAngle - startAngle, largeArc = (angleDiff % (Math.PI * 2)) > Math.PI ? 1 : 0;
        
        var commands = [];
        
        commands.push("M" + p[0].join());
        commands.push("A" + [radius, radius].join() + " 0 " + largeArc + " 1 " + p[1].join());
        
        return commands.join(" ");
    }


    function orbitCircle(centerX:number, centerY:number, startAngle:number, endAngle:number, radius:number) {
        startAngle = deg2rad(startAngle + 180);
        endAngle = deg2rad(endAngle + 180);
        
        var p = [
              [centerX + radius * Math.cos(startAngle),	centerY + radius * Math.sin(startAngle)]
            , [centerX + radius * Math.cos(endAngle),		centerY + radius * Math.sin(endAngle)]
            ];
        
        var angleDiff = endAngle - startAngle, largeArc = (angleDiff % (Math.PI * 2)) > Math.PI ? 1 : 0;
        
        var commands = [];
        
        commands.push("M" + p[0].join());
        commands.push("A" + [radius, radius].join() + " 0 " + largeArc + " 1 " + p[1].join());
        
        return commands.join(" ");
    }




    let annPath1: SVGPathElement;
    let annPath2: SVGPathElement;
    let annPath3: SVGPathElement;
    let annPath4: SVGPathElement;
    let annPath5: SVGPathElement;
    let annPath6: SVGPathElement;
    let annPath7: SVGPathElement;
    let annPath8: SVGPathElement;
    let annPath9: SVGPathElement;
    let annPath10: SVGPathElement;
    let annPath11: SVGPathElement;
    let annPath12: SVGPathElement;

    let arcPath1: SVGPathElement;
    let arcPath2: SVGPathElement;
    let arcPath3: SVGPathElement;
    let arcPath4: SVGPathElement;
    let arcPath5: SVGPathElement;
    let arcPath6: SVGPathElement;
    let arcPath7: SVGPathElement;
    let arcPath8: SVGPathElement;
    let arcPath9: SVGPathElement;
    let arcPath10: SVGPathElement;
    let arcPath11: SVGPathElement;
    let arcPath12: SVGPathElement;

    let annM1: SVGPathElement;
    let annM2: SVGPathElement;
    let annM3: SVGPathElement;
    let annM4: SVGPathElement;
    let annM5: SVGPathElement;
    let annM6: SVGPathElement;
    let annM7: SVGPathElement;
    let annM8: SVGPathElement;

    let arcMPathR: SVGPathElement;
    let arcMPath2: SVGPathElement;
    let arcMPath3: SVGPathElement;
    let arcMPath4: SVGPathElement;
    let arcMPathTT: SVGPathElement;
    let arcMPath5: SVGPathElement;
    let arcMPath6: SVGPathElement;
    let arcMPath7: SVGPathElement;


    let annS1: SVGPathElement;
    let annS2: SVGPathElement;
    let annS3: SVGPathElement;
    let annS4: SVGPathElement;
    let annS5: SVGPathElement;
    let annS6: SVGPathElement;
    let annS7: SVGPathElement;



    let animNotes: SVGAnimateTransformElement;
    let animIntervals: SVGAnimateTransformElement;


    onMount(() => {

        let cx: number = 400;
        let cy: number = 400;

        let outerRadius: number = 300;        
        let innerRadius: number = 240;        

        annPath1.setAttribute("d", annularSector(cx, cy, 75, 105, innerRadius, outerRadius));
        annPath2.setAttribute("d", annularSector(cx, cy, 105, 135, innerRadius, outerRadius));
        annPath3.setAttribute("d", annularSector(cx, cy, 135, 165, innerRadius, outerRadius));
        annPath4.setAttribute("d", annularSector(cx, cy, 165, 195, innerRadius, outerRadius));
        annPath5.setAttribute("d", annularSector(cx, cy, 195, 225, innerRadius, outerRadius));
        annPath6.setAttribute("d", annularSector(cx, cy, 225, 255, innerRadius, outerRadius));
        annPath7.setAttribute("d", annularSector(cx, cy, 255, 285, innerRadius, outerRadius));
        annPath8.setAttribute("d", annularSector(cx, cy, 285, 315, innerRadius, outerRadius));
        annPath9.setAttribute("d", annularSector(cx, cy, 315, 345, innerRadius, outerRadius));
        annPath10.setAttribute("d", annularSector(cx, cy, 345, 15, innerRadius, outerRadius));
        annPath11.setAttribute("d", annularSector(cx, cy, 15,  45, innerRadius, outerRadius));
        annPath12.setAttribute("d", annularSector(cx, cy, 45, 75, innerRadius, outerRadius));

        arcPath1.setAttribute("d", arcPath(cx, cy, 75, 105, 253));
        arcPath2.setAttribute("d", arcPath(cx, cy, 105, 135, 253));
        arcPath3.setAttribute("d", arcPath(cx, cy, 135, 165, 253));
        arcPath4.setAttribute("d", arcPath(cx, cy, 165, 195, 253));
        arcPath5.setAttribute("d", arcPath(cx, cy, 195, 225, 253));
        arcPath6.setAttribute("d", arcPath(cx, cy, 225, 255, 253));
        arcPath7.setAttribute("d", arcPath(cx, cy, 255, 285, 253));
        arcPath8.setAttribute("d", arcPath(cx, cy, 285, 315, 253));
        arcPath9.setAttribute("d", arcPath(cx, cy, 315, 345, 253));
        arcPath10.setAttribute("d", arcPath(cx, cy, 345, 15, 253));
        arcPath11.setAttribute("d", arcPath(cx, cy, 15,  45, 253));
        arcPath12.setAttribute("d", arcPath(cx, cy, 45, 75, 253));

        let outerRadius1: number = 240;        
        let innerRadius1: number = 200;        

        annM1.setAttribute("d", annularSector(cx, cy, 75, 105, innerRadius1, outerRadius1));
        annM2.setAttribute("d", annularSector(cx, cy, 105, 165, innerRadius1, outerRadius1));
        annM3.setAttribute("d", annularSector(cx, cy, 165, 225, innerRadius1, outerRadius1));
        annM4.setAttribute("d", annularSector(cx, cy, 225, 255, innerRadius1, outerRadius1));
        annM5.setAttribute("d", annularSector(cx, cy, 255, 285, innerRadius1, outerRadius1));
        annM6.setAttribute("d", annularSector(cx, cy, 285, 315, innerRadius1, outerRadius1));
        annM7.setAttribute("d", annularSector(cx, cy, 315, 15, innerRadius1, outerRadius1));
        annM8.setAttribute("d", annularSector(cx, cy, 15, 75, innerRadius1, outerRadius1));


        arcMPathR.setAttribute("d", arcPath(cx, cy, 75, 105, 213));
        arcMPath2.setAttribute("d", arcPath(cx, cy, 105, 165, 213));
        arcMPath3.setAttribute("d", arcPath(cx, cy, 165, 225, 213));
        arcMPath4.setAttribute("d", arcPath(cx, cy, 225, 255, 213));
        arcMPathTT.setAttribute("d", arcPath(cx, cy, 255, 285, 213));
        arcMPath5.setAttribute("d", arcPath(cx, cy, 285, 315, 213));
        arcMPath6.setAttribute("d", arcPath(cx, cy, 315, 15, 213));
        arcMPath7.setAttribute("d", arcPath(cx, cy, 15, 75, 213));


        let outerRadius2: number = 320;        
        let innerRadius2: number = 300;  

        annS1.setAttribute("d", annularSector(cx, cy, 80, 100, innerRadius2, outerRadius2));
        annS2.setAttribute("d", annularSector(cx, cy, 140, 160, innerRadius2, outerRadius2));
        annS3.setAttribute("d", annularSector(cx, cy, 200, 220, innerRadius2, outerRadius2));
        annS4.setAttribute("d", annularSector(cx, cy, 230, 250, innerRadius2, outerRadius2));
        annS5.setAttribute("d", annularSector(cx, cy, 290, 310, innerRadius2, outerRadius2));
        annS6.setAttribute("d", annularSector(cx, cy, 350, 10, innerRadius2, outerRadius2));
        annS7.setAttribute("d", annularSector(cx, cy, 50, 70, innerRadius2, outerRadius2));


    });


    let noteDeg = 0;

    function noteClick() {
        console.log("Note clicked")

        noteDeg = noteDeg + 30;
        animNotes.setAttribute("from", noteDeg - 30 + " 400 400");
        animNotes.setAttribute("to", noteDeg + " 400 400");
        animNotes.beginElement();

        console.log(annPath1);

    }


    let intDeg = 0;

    function intervalClick() {
        console.log("Note clicked")

        intDeg = intDeg + 30;
        animIntervals.setAttribute("from", intDeg - 30 + " 400 400");
        animIntervals.setAttribute("to", intDeg + " 400 400");
        animIntervals.beginElement();
    }


</script>


<div class="grid space-y-2">

    <label for="hs-select-label" class="block text-sm font-medium mb-2 dark:text-white">Scale</label>
    <select id="hs-select-label" class="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
      <option selected="">Major/Minor</option>
      <option>Minor Harmonic</option>
      <option>Blues</option>
      <option>Pentatonic</option>
      <option>Chromatic</option>
    </select>
    
    <label for="hs-vertical-radio-in-form" class="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
      <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-vertical-radio-in-form">
      <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">KEY</span>
    </label>
  
    <label for="hs-vertical-radio-checked-in-form" class="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
      <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked="">
      <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">INTERVAL</span>
    </label>
  </div>





<svg width="800" height="800">
    <g class="noteGroup" id="">
        <animateTransform
            bind:this={animNotes}
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 400 400"
            to="30 400 400"
            dur="1s"
            repeatCount="1" 
            additive="sum"
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
            begin="none"
        />
  
        <path bind:this={annPath1} on:click={noteClick} />
        <path bind:this={annPath2} />
        <path bind:this={annPath3} />
        <path bind:this={annPath4} />
        <path bind:this={annPath5} />
        <path bind:this={annPath6} />
        <path bind:this={annPath7} />
        <path bind:this={annPath8} />
        <path bind:this={annPath9} />
        <path bind:this={annPath10} />
        <path bind:this={annPath11} />
        <path bind:this={annPath12} />
        <g id="noteText">
            <path bind:this={arcPath1} id="path1" />
            <use xlink:href="#path1"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path1">A</textPath>
            </text>

            <path bind:this={arcPath2} id="path2" />
            <use xlink:href="#path2"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path2">A#</textPath>
            </text>

            <path bind:this={arcPath3} id="path3" />
            <use xlink:href="#path3"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path3">B</textPath>
            </text>

            <path bind:this={arcPath4} id="path4" />
            <use xlink:href="#path4"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path4">C</textPath>
            </text>

            <path bind:this={arcPath5} id="path5" />
            <use xlink:href="#path5"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path5">C#</textPath>
            </text>

            <path bind:this={arcPath6} id="path6" />
            <use xlink:href="#path6"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path6">D</textPath>
            </text>

            <path bind:this={arcPath7} id="path7" />
            <use xlink:href="#path7"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path7">D#</textPath>
            </text>

            <path bind:this={arcPath8} id="path8" />
            <use xlink:href="#path8"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path8">E</textPath>
            </text>

            <path bind:this={arcPath9} id="path9" />
            <use xlink:href="#path9"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path9">F</textPath>
            </text>

            <path bind:this={arcPath10} id="path10" />
            <use xlink:href="#path10"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path10">F#</textPath>
            </text>

            <path bind:this={arcPath11} id="path11" />
            <use xlink:href="#path11"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path11">G</textPath>
            </text>

            <path bind:this={arcPath12} id="path12" />
            <use xlink:href="#path12"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#path12">G#</textPath>
            </text>
        </g>

    </g>

    <g class="qualGroup" id="">


        <animateTransform
            bind:this={animIntervals}
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 400 400"
            to="60 400 400"
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


        <path bind:this={annM1} class="rootAnn" on:click={intervalClick}/>
        <path bind:this={annM2} />
        <path bind:this={annM3} />
        <path bind:this={annM4} />
        <path bind:this={annM5} />
        <path bind:this={annM6} />
        <path bind:this={annM7} />
        <path bind:this={annM8} />

        <g id="qualText">
            <path bind:this={arcMPathR} id="arcMPathR" />
            <use xlink:href="#arcMPathR"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#arcMPathR">Root</textPath>
            </text>


            <path bind:this={arcMPath2} id="arcMPath2" />
            <use xlink:href="#arcMPath2"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#arcMPath2">2nd</textPath>
            </text>


            <path bind:this={arcMPath3} id="arcMPath3" />
            <use xlink:href="#arcMPath3"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#arcMPath3">3rd</textPath>
            </text>


            <path bind:this={arcMPath4} id="arcMPath4" />
            <use xlink:href="#arcMPath4"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#arcMPath4">P4th</textPath>
            </text>


            <path bind:this={arcMPathTT} id="arcMPathTT" />
            <use xlink:href="#arcMPathTT"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#arcMPathTT">Tri</textPath>
            </text>


            <path bind:this={arcMPath5} id="arcMPath5" />
            <use xlink:href="#arcMPath5"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#arcMPath5">P5th</textPath>
            </text>


            <path bind:this={arcMPath6} id="arcMPath6" />
            <use xlink:href="#arcMPath6"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#arcMPath6">6th</textPath>
            </text>

            <path bind:this={arcMPath7} id="arcMPath7" />
            <use xlink:href="#arcMPath7"></use>
            <text>
                <textPath text-anchor="middle" startOffset="50%" xlink:href="#arcMPath7">7th</textPath>
            </text>

        </g>

    </g>

    <g class="scale">
        <path bind:this={annS1} class="selectedMode" />
        <path bind:this={annS2} />
        <path bind:this={annS3} />
        <path bind:this={annS4} />
        <path bind:this={annS5} />
        <path bind:this={annS6} />
        <path bind:this={annS7} />

        <!-- <path bind:this={arcPath1} id="path1" />

        <use xlink:href="#path1"></use>
        <text>
            <textPath text-anchor="middle" startOffset="50%" xlink:href="#path1">A#</textPath>
        </text> -->
    
    </g>

</svg>




<style>

.noteGroup > path {
    stroke-width: 1pt;
    fill: #FFFFFF;
    stroke: #446688;
    cursor: pointer;
}



#noteGroup1 {
    transform-origin:center;
    -webkit-animation-name: rotate; 
    -webkit-animation-duration: 10s; 
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: rotate; 
    -moz-animation-duration: 10s; 
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    animation-name: rotate; 
    animation-duration: 10s; 
    animation-iteration-count: infinite;
    animation-timing-function: linear;

}

@-webkit-keyframes rotate {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
}

@-moz-keyframes rotate {
    from {-moz-transform: rotate(0deg);}
    to {-moz-transform: rotate(360deg);}
}

@keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

#noteText > path {
    fill: none;
    stroke: none;
}

#noteText > text {
    stroke-width: 1pt;
    font-size: 28pt;
    cursor: pointer;
}


.qualGroup > .rootAnn {
    fill: #6688AA;
}

.qualGroup > path {
    stroke-width: 1pt;
    fill: #FFFFFF;
    stroke: #446688;
    cursor: pointer;
}


.qualGroup > text {
    stroke-width: 1pt;
    font-size: 18pt;
    cursor: pointer;
}

#qualText > path {
    fill: none;
    stroke: none;
}

.scale > .selectedMode {
    fill: #d81313;
}

.scale > path:hover {
  fill: #d81313;
  cursor: pointer;
}

.scale > path {

}



</style>





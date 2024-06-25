

function deg2rad(deg :number) {
    return deg * Math.PI / 180;
}

export function annularSectorPathData(centerX:number, centerY:number, startAngle:number, endAngle:number, innerRadius:number, outerRadius:number) {
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
    
    var commands: any[] = [];
    
    commands.push("M" + p[0].join());
    commands.push("L" + p[1].join());
    commands.push("A" + [outerRadius, outerRadius].join() + " 0 " + largeArc + " 1 " + p[2].join());
    commands.push("L" + p[3].join());
    commands.push("A" + [innerRadius, innerRadius].join() + " 0 " + largeArc + " 0 " + p[0].join());
    commands.push("z");
    
    return commands.join(" ");
}



export function arcPathData(centerX:number, centerY:number, startAngle:number, endAngle:number, radius:number) {

    startAngle = deg2rad(startAngle + 180);
    endAngle = deg2rad(endAngle + 180);

    var p = [
          [centerX + radius * Math.cos(startAngle),	centerY + radius * Math.sin(startAngle)]
        , [centerX + radius * Math.cos(endAngle),		centerY + radius * Math.sin(endAngle)]
        ];
    
    var angleDiff = endAngle - startAngle, largeArc = (angleDiff % (Math.PI * 2)) > Math.PI ? 1 : 0;
    
    var commands: any[] = [];
    
    commands.push("M" + p[0].join());
    commands.push("A" + [radius, radius].join() + " 0 " + largeArc + " 1 " + p[1].join());
    
    return commands.join(" ");
}


export function orbitCircle(centerX:number, centerY:number, startAngle:number, endAngle:number, radius:number) {
    startAngle = deg2rad(startAngle + 180);
    endAngle = deg2rad(endAngle + 180);
    
    var p = [
          [centerX + radius * Math.cos(startAngle),	centerY + radius * Math.sin(startAngle)]
        , [centerX + radius * Math.cos(endAngle),		centerY + radius * Math.sin(endAngle)]
        ];
    
    var angleDiff = endAngle - startAngle, largeArc = (angleDiff % (Math.PI * 2)) > Math.PI ? 1 : 0;
    
    var commands: any[] = [];
    
    commands.push("M" + p[0].join());
    commands.push("A" + [radius, radius].join() + " 0 " + largeArc + " 1 " + p[1].join());
    
    return commands.join(" ");
}
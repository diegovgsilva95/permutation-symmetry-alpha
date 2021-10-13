"use strict";

// Generated using generation/index.js with AMOUNT = 3, AMOUNT = 4 and AMOUNT = 5
const sequences = `

Symmetric 0    1    2 
Symmetric 0    2    1 
Symmetric 1    0    2 
Symmetric 2    1    0 

Non-Symmetric 1    2    0 
Non-Symmetric 2    0    1 





Symmetric 0    1    2    3 
Symmetric 0    1    3    2 
Symmetric 0    2    1    3 
Symmetric 0    3    2    1 
Symmetric 1    0    2    3 
Symmetric 1    0    3    2 
Symmetric 2    1    0    3 
Symmetric 2    3    0    1 
Symmetric 3    1    2    0 
Symmetric 3    2    1    0 

Non-Symmetric 0    2    3    1
Non-Symmetric 0    3    1    2 
Non-Symmetric 1    2    0    3 
Non-Symmetric 1    2    3    0 
Non-Symmetric 1    3    0    2 
Non-Symmetric 1    3    2    0 
Non-Symmetric 2    0    1    3 
Non-Symmetric 2    0    3    1 
Non-Symmetric 2    1    3    0 
Non-Symmetric 2    3    1    0 
Non-Symmetric 3    0    1    2 
Non-Symmetric 3    0    2    1 
Non-Symmetric 3    1    0    2 
Non-Symmetric 3    2    0    1 






Symmetric 0    1    2    3    4 
Symmetric 0    1    2    4    3 
Symmetric 0    1    3    2    4 
Symmetric 0    1    4    3    2 
Symmetric 0    2    1    3    4 
Symmetric 0    2    1    4    3 
Symmetric 0    3    2    1    4 
Symmetric 0    3    4    1    2 
Symmetric 0    4    2    3    1 
Symmetric 0    4    3    2    1 
Symmetric 1    0    2    3    4 
Symmetric 1    0    2    4    3 
Symmetric 1    0    3    2    4 
Symmetric 1    0    4    3    2 
Symmetric 2    1    0    3    4 
Symmetric 2    1    0    4    3 
Symmetric 2    3    0    1    4 
Symmetric 2    4    0    3    1 
Symmetric 3    1    2    0    4 
Symmetric 3    1    4    0    2 
Symmetric 3    2    1    0    4 
Symmetric 3    4    2    0    1 
Symmetric 4    1    2    3    0 
Symmetric 4    1    3    2    0 
Symmetric 4    2    1    3    0 
Symmetric 4    3    2    1    0 



Non-Symmetric 0    1    3    4    2 
Non-Symmetric 0    1    4    2    3 
Non-Symmetric 0    2    3    1    4 
Non-Symmetric 0    2    3    4    1 
Non-Symmetric 0    2    4    1    3 
Non-Symmetric 0    2    4    3    1 
Non-Symmetric 0    3    1    2    4 
Non-Symmetric 0    3    1    4    2 
Non-Symmetric 0    3    2    4    1 
Non-Symmetric 0    3    4    2    1 
Non-Symmetric 0    4    1    2    3 
Non-Symmetric 0    4    1    3    2 
Non-Symmetric 0    4    2    1    3 
Non-Symmetric 0    4    3    1    2 
Non-Symmetric 1    0    3    4    2 
Non-Symmetric 1    0    4    2    3 
Non-Symmetric 1    2    0    3    4 
Non-Symmetric 1    2    0    4    3 
Non-Symmetric 1    2    3    0    4 
Non-Symmetric 1    2    3    4    0 
Non-Symmetric 1    2    4    0    3 
Non-Symmetric 1    2    4    3    0 
Non-Symmetric 1    3    0    2    4 
Non-Symmetric 1    3    0    4    2 
Non-Symmetric 1    3    2    0    4 
Non-Symmetric 1    3    2    4    0 
Non-Symmetric 1    3    4    0    2 
Non-Symmetric 1    3    4    2    0 
Non-Symmetric 1    4    0    2    3 
Non-Symmetric 1    4    0    3    2 
Non-Symmetric 1    4    2    0    3 
Non-Symmetric 1    4    2    3    0 
Non-Symmetric 1    4    3    0    2 
Non-Symmetric 1    4    3    2    0 
Non-Symmetric 2    0    1    3    4 
Non-Symmetric 2    0    1    4    3 
Non-Symmetric 2    0    3    1    4 
Non-Symmetric 2    0    3    4    1 
Non-Symmetric 2    0    4    1    3 
Non-Symmetric 2    0    4    3    1 
Non-Symmetric 2    1    3    0    4 
Non-Symmetric 2    1    3    4    0 
Non-Symmetric 2    1    4    0    3 
Non-Symmetric 2    1    4    3    0 
Non-Symmetric 2    3    0    4    1 
Non-Symmetric 2    3    1    0    4 
Non-Symmetric 2    3    1    4    0 
Non-Symmetric 2    3    4    0    1 
Non-Symmetric 2    3    4    1    0 
Non-Symmetric 2    4    0    1    3 
Non-Symmetric 2    4    1    0    3 
Non-Symmetric 2    4    1    3    0 
Non-Symmetric 2    4    3    0    1 
Non-Symmetric 2    4    3    1    0 
Non-Symmetric 3    0    1    2    4 
Non-Symmetric 3    0    1    4    2 
Non-Symmetric 3    0    2    1    4 
Non-Symmetric 3    0    2    4    1 
Non-Symmetric 3    0    4    1    2 
Non-Symmetric 3    0    4    2    1 
Non-Symmetric 3    1    0    2    4 
Non-Symmetric 3    1    0    4    2 
Non-Symmetric 3    1    2    4    0 
Non-Symmetric 3    1    4    2    0 
Non-Symmetric 3    2    0    1    4 
Non-Symmetric 3    2    0    4    1 
Non-Symmetric 3    2    1    4    0 
Non-Symmetric 3    2    4    0    1 
Non-Symmetric 3    2    4    1    0 
Non-Symmetric 3    4    0    1    2 
Non-Symmetric 3    4    0    2    1 
Non-Symmetric 3    4    1    0    2 
Non-Symmetric 3    4    1    2    0 
Non-Symmetric 3    4    2    1    0 
Non-Symmetric 4    0    1    2    3 
Non-Symmetric 4    0    1    3    2 
Non-Symmetric 4    0    2    1    3 
Non-Symmetric 4    0    2    3    1 
Non-Symmetric 4    0    3    1    2 
Non-Symmetric 4    0    3    2    1 
Non-Symmetric 4    1    0    2    3 
Non-Symmetric 4    1    0    3    2 
Non-Symmetric 4    1    2    0    3 
Non-Symmetric 4    1    3    0    2 
Non-Symmetric 4    2    0    1    3 
Non-Symmetric 4    2    0    3    1 
Non-Symmetric 4    2    1    0    3 
Non-Symmetric 4    2    3    0    1 
Non-Symmetric 4    2    3    1    0 
Non-Symmetric 4    3    0    1    2 
Non-Symmetric 4    3    0    2    1 
Non-Symmetric 4    3    1    0    2 
Non-Symmetric 4    3    1    2    0 
Non-Symmetric 4    3    2    0    1 






`.trim().split("\n").filter(v=>v.trim().length>0).map(v=>{
    let [title, ...sequence] = v.trim().replace(/ +/g," ").split(" ");
    sequence = sequence.map(x=>parseInt(x));
    return {title, sequence};
});


const 
    canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    H = canvas.height = 720,
    W = canvas.width = Math.ceil(16 * H / 9);

// For recording purposes:
// let rec = new MediaRecorder(canvas.captureStream(60), {mimeType: 'video/webm', videoBitsPerSecond: 4500000});

let seqIdx = 0;



const connectLines = function(hue1, hue2, s1, s2, v1, v2, x1, y1, x2, y2){
    let grd = ctx.createLinearGradient(0, y1, 0, y2);
    grd.addColorStop(0, `hsl(${hue1}deg, ${s1}%, ${v1}%)`);
    grd.addColorStop(1, `hsl(${hue2}deg, ${s2}%, ${v2}%)`);
    ctx.strokeStyle = grd;
    ctx.lineWidth = Math.ceil(H / 75);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.fillStyle = `hsl(${hue1}deg, ${s1}%, ${v1}%)`;
    ctx.beginPath();
    ctx.arc(x1, y1, Math.ceil(H / 50), 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = `hsl(${hue2}deg, ${s2}%, ${v2}%)`;
    ctx.beginPath();
    ctx.arc(x2, y2, Math.ceil(H / 50), 0, Math.PI * 2);
    ctx.fill();

};


const drawShadowedText = function(text, x, y){
    ctx.filter = "blur(2px)";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText(text, x, y);
    ctx.fillText(text, x, y);

    ctx.filter = "none";
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText(text, x, y);
}

const draw = function(){
    let 
        currSeq = sequences[seqIdx], 
        l = currSeq.sequence.length, // Amount of items in the sequence
        L = l + 1, // Amount + 1
        wl = W / L, // Rectangle width
        OfS = (W / L / 2), // Left margin
        gap = H / 5, // Gap between rows
        RH = H / 8, // Row height
        offset = H / 10, // Top margin
        dif = 0, // Sigma S
        dhh = 0, // Sigma M
        u = currSeq.title == "Symmetric" ? 120 : 0; // Green if symmetric, red otherwise.
    

    ctx.save();

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0,0,W,H);

    ctx.font = `${Math.ceil(H / 15)}px Hack`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    

    ctx.strokeStyle = `hsla(${u}deg, 70%, 70%, 0.25)`;
    ctx.lineWidth = H / 20;
    ctx.lineJoin = "round";
    ctx.strokeRect(OfS, offset + gap * 2 + RH * 2, l*wl, RH);


    for(let i = 0; i < l; i++){
        let 
            x = OfS + i * wl, //Rectangle left position
            hi = currSeq.sequence.indexOf(i), 
            nx = OfS + (hi) * wl,
            si = currSeq.sequence[i],
            ni = currSeq.sequence[si];

        dif += Math.abs(i - ni);
        dhh += Math.max(0,ni - si);

        // First row: order
        ctx.fillStyle = `hsl(0deg, 0%, ${100 * (i+1) / L}%)`;
        ctx.fillRect(x, offset, wl, RH);

        drawShadowedText(i, x + wl/2, offset + RH/2);



        // Second row: sequence
        ctx.fillStyle = `hsl(0deg, 0%, ${100 * (si+1) / L}%)`;
        ctx.fillRect(x, offset + gap + RH, wl, RH);

        drawShadowedText(si, x + wl/2, offset + gap + RH + RH/2);



        // Third row: reconstruction
        ctx.fillStyle = `hsl(${u}deg, 60%, ${100 * (ni+1) / L}%)`;
        ctx.fillRect(x, offset + gap * 2 + RH * 2 , wl, RH);

        drawShadowedText(ni, x + wl/2, offset + gap * 2 + RH * 2 + RH / 2);
        drawShadowedText(currSeq.sequence.length + " elements", W/2,  Math.ceil(H / 20));
        drawShadowedText(currSeq.title , W/2,  H - Math.ceil(H / 20));


        // Lines above and below
        connectLines(
            260, 140, //hue
            0, 0,
            100 * (i+1) / L, 100 * (i+1) / L,  //value
            x + wl/2, offset + RH,
            nx + wl/2, offset + gap + RH

        );

        connectLines(
            140, u, //hue
            0, 60,
            100 * (si+1) / L, 100 * (si+1) / L,  //value
            x + wl/2, offset + gap + RH * 2,
            nx + wl/2, offset + gap * 2 + RH * 2

        );
    }

    drawShadowedText("Σs=" + dif, offset, offset + gap + RH * 2 + gap/2)
    drawShadowedText("Σm=" + dhh, W - offset, offset + gap + RH * 2 + gap/2)

    ctx.restore();
};

const trigger = function(){
    draw();

    seqIdx = (seqIdx + 1);
    if(seqIdx >= sequences.length){
        // rec.stop();
    }
    else {
        let currSeq = sequences[seqIdx];
        setTimeout(trigger, 1000/(currSeq.sequence.length));
    }
};


// For recording purposes:

// let chunks = [];
// rec.ondataavailable = function(e) {
//     chunks.push(e.data);
// };
// rec.onstop = function(e){
//     let blob = new Blob(chunks, { 'type' : 'video/webm' });
//     let burl = window.URL.createObjectURL(blob);
//     let anch = document.createElement("a");
//     document.body.appendChild(anch);
//     anch.download = `${Date.now()}.webm`;
//     anch.href = burl;
//     anch.click();
// };
// rec.start();



trigger();
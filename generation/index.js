"use strict" ;

const 
    chalk = require("chalk"),
    AMOUNT = 5,
    SYMMETRIC = true,
    BLACKLIST = [],
    order = Array(AMOUNT).fill(0).map((_,i) => i);

const shuffle = seq => [...seq].sort(_ => Math.sign(Math.random() - 0.5));
const print = function(seq, colorHue = 270){
    let lineToPrint = [];
    for(let item of seq){
        let colorValue = Math.floor((100 * item / (AMOUNT - 1)) / 2);
        lineToPrint.push(chalk.bgHsl(colorHue, 60, colorValue)(String(item).padStart(4, " ").padEnd(5, " ")))
    }
    console.log(lineToPrint.join(""));
};
const reorder = function(seq){
    let 
        o = Array(seq.length).fill(0), 
        i = 0;

    for(let v of order)
        o[seq.indexOf(v)] = seq[i++];
    return o;
};
const find_blocked = function(seq){
    for(let blSeq of BLACKLIST){
        let correlation = 0;
        for(let i = 0; i < blSeq.length; i++){
            if(seq[i] != blSeq[i]) break; 
            correlation++;
        }
        if(correlation == blSeq.length) // Is blocked.
            return true;
    }
    return false; // Not blocked.
};
const findRandomSequence = () => {
    let 
        shuffledSeq = shuffle(order),
        reorderedSeq = reorder(shuffledSeq),
        correlation = 0;
    
    for(let i = 0; i < reorderedSeq.length; i++)
        if(reorderedSeq[i] == order[i])
            correlation++;

    if( (SYMMETRIC && correlation == reorderedSeq.length) || (!SYMMETRIC && correlation != reorderedSeq.length) ){
        if(!find_blocked(shuffledSeq)){
            print(shuffledSeq);
            BLACKLIST.push([...shuffledSeq]);
        }
    }
}; 

// Main

console.log(`Look for: ${SYMMETRIC ? "":"as"}symmetric permutations. Use Ctrl+C to quit.`);

const iterate = function(){
    for(let i = 0; i < 1000; i++)
        findRandomSequence();
    
    setTimeout(iterate, 1000/60);
};
iterate();
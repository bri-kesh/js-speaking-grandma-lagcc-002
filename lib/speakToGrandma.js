'use strict';

let speakToGrandma = function(speak){
 const isCaps = (speak) => speak === speak.toUpperCase();

 if(isCaps(speak)){
    return "NO, NOT SINCE 1938!";
 } else {
    return "HUH?! SPEAK UP, SONNY!";
 }
};

module.exports = speakToGrandma;
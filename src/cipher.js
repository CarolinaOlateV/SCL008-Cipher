window.cipher = {
    encode: (displace, text) => {
        let result = '';
        for(let i=0; i<text.length; i++){
            let ascii = text.charCodeAt(i);
            if(ascii >=65 && ascii <=90){
                let converted=(ascii- 65 + parseInt(displace))%26 + 65;
                result += String.fromCharCode(converted);
            }  
        else if (ascii === 32) {
            result += ' ';
        }
        
    }
    return result;
},

    decode: (displace, text) => {
        let result = '';
        for(let i=0; i<text.length; i++){
            let ascii = text.charCodeAt(i);
            if(ascii >=65 && ascii <=90){
                let converted=(ascii- 65 - parseInt(displace))%26 + 65;
                if (converted <65){
                    converted +=26;
            }
            result += String.fromCharCode(converted);
        }
        else if (ascii === 32) {
            result += ' ';
        }
    }
    return result;
}
};
  

window.cipher = {
    encode: (displace, text) => {
        let result = '';
        for(let i=0; i<text.length; i++){
            let asciiNumber = text.charCodeAt(i);
            if(asciiNumber >=65 && asciiNumber <=90){
                let convertedLetter=(asciiNumber- 65 + parseInt(displace))%26 + 65;
                result += String.fromCharCode(convertedLetter);
            }  
        }
        return result;
    }
    
};
  

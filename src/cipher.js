window.cipher = {
    encode: (displace,text) => {
      /* Acá va tu código */
      let result = '';
      for (let i=0; i<text.length; i++){ 
        let ascii = text.charCodeAt(i); 
        if (ascii >= 65 && ascii <= 90 ) { 
          let converted=(ascii-65+parseInt(displace))%26+65;
    
          result += String.fromCharCode(converted); 
        
        }
            else if (ascii >= 97 && ascii <= 122 ) {
              let converted=(ascii-97+parseInt(displace))%26+97;
    
              result += String.fromCharCode(converted);
            }else{
              result += String.fromCharCode(ascii);
      
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
        else if (ascii >= 97 && ascii <= 122){
            let converted=(ascii-97-parseInt(displace))%26+97;
            if(converted <97)
            converted +=26;

            result += String.fromCharCode(converted);
        }else{
            result += String.fromCharCode(ascii);
        }
    }
    return result;
}
};

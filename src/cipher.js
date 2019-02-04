window.cipher = {
  //Cifrar
  encode: (displace,capLetter) => {
    /* Acá va tu código */
    let result = '';
    for (let i=0; i<capLetter.length; i++){ //i=0 me devuelve la letra desde la posicion 0, i< me verifica 
      let asciiNumber = capLetter.charCodeAt(i); //charcodeat devuelve la posicion de cada letra
      if (asciiNumber >= 65 && asciiNumber <= 90 ) { //para saber si la letra mayúscula se encuentra en este rango
        let convertedLetter=(asciiNumber-65+parseInt(displace))%26+65; //parse es para obtener el valor numerico del string
  
        result += String.fromCharCode(convertedLetter); //+=es para traerme la cadena completa
      }
    }
    return result;
  }
  };
  

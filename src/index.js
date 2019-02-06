document.getElementById('btnIngresar').addEventListener('click', (evento) =>{
    evento.preventDefault();

    document.getElementById('pagUno').style.display='none';
    document.getElementById('pagDos').style.display='block';

})

document.getElementById('btnEncode').addEventListener('click', () =>{
    //evento.preventDefault();

    let text = document.getElementById('mensaje').value;
    let displace = document.getElementById('numero').value;

    let result = window.cipher.encode(displace, text);
    document.getElementById('resultado').innerHTML = result;
})

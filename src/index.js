document.getElementById('btn-ingresar').addEventListener('click', (evento) =>{
    evento.preventDefault();

    document.getElementById('pag-uno').style.display='none';
    document.getElementById('pag-dos').style.display='block';

})

document.getElementById('btn-encode').addEventListener('click', () =>{
    //evento.preventDefault();

    let text = document.getElementById('mensaje').value;
    let displace = document.getElementById('numero').value;

    let result = window.cipher.encode(displace, text);
    document.getElementById('resultado').innerHTML = result;
})

document.getElementById('btn-decode').addEventListener('click', () =>{
    let text = document.getElementById('mensaje').value;
    let displace = document.getElementById('numero').value;

    let result = window.cipher.decode(displace, text);
    document.getElementById('resultado').innerHTML = result;
})

document.getElementById('btn-start').addEventListener('click', (evento) =>{
    evento.preventDefault();

    document.getElementById('pag-dos').style.display='none';
    document.getElementById('pag-uno').style.display='block';
})

document.getElementById('btn-reset').addEventListener('click', () =>{
    document.getElementById('mensaje').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('numero').value = '';
})
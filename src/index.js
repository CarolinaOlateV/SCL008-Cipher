document.getElementById('btn-come').addEventListener('click', (evento) =>{
    evento.preventDefault();

    document.getElementById('one').style.display='none';
    document.getElementById('two').style.display='block';

})

document.getElementById('btn-encode').addEventListener('click', () =>{
    //evento.preventDefault();

    let text = document.getElementById('message').value;
    let displace = document.getElementById('numbers').value;

    let result = window.cipher.encode(displace, text);
    document.getElementById('result').innerHTML = result;
})

document.getElementById('btn-decode').addEventListener('click', () =>{
    let text = document.getElementById('message').value;
    let displace = document.getElementById('numbers').value;

    let result = window.cipher.decode(displace, text);
    document.getElementById('result').innerHTML = result;
})

document.getElementById('btn-start').addEventListener('click', (evento) =>{
    evento.preventDefault();

    document.getElementById('two').style.display='none';
    document.getElementById('one').style.display='block';
})

document.getElementById('btn-reset').addEventListener('click', () =>{
    document.getElementById('message').value = '';
    document.getElementById('result').value = '';
    document.getElementById('numbers').value = '';
})
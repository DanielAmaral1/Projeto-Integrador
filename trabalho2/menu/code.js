document.getElementById('descer2').addEventListener('click', function() {
    document.getElementById('secao2').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('descer').addEventListener('click', function() {
    document.getElementById('secao3').scrollIntoView({
        behavior: 'smooth'
    });
});


function irParaPagina() {
    window.location.href = "calculo.html";
}
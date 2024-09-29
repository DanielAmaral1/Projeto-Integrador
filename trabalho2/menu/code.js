document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('secao2').scrollIntoView({
        behavior: 'smooth'
    });
});

function abrirMenu() {
    document.getElementById("menuLateral").style.width = "250px";
}

function fecharMenu() {
    document.getElementById("menuLateral").style.width = "0";
}
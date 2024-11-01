const resultado = document.getElementById("resultado");

function calculo() {
    // Captura os valores de forcai e forcaf dentro da função
    const forcai = parseFloat(document.getElementById("forcai").value);
    const forcaf = parseFloat(document.getElementById("forcaf").value);
    


    console.log(`Carga: ${forcai}, Distancia: ${forcaf}`);

    // Verifica se os valores são válidos (não vazios ou NaN)
    if (forcai <= 0 || forcaf <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o IMC
     const declinio = ((forcai - forcaf)/forcai).toFixed(2);
     console.log(`declinio: ${declinio}`);

    // Exibe o resultado
    resultado.textContent = `O valor do Declínio de Força foi de ${declinio}%`;
}

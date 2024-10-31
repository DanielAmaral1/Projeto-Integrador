const resultado = document.getElementById("resultado");

function calculo() {
    // Captura os valores de peso e altura dentro da função
    const carga = parseFloat(document.getElementById("carga").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const tempo = parseFloat(document.getElementById("tempo").value);


    console.log(`Carga: ${carga}, Distancia: ${distancia},  Tempo: ${tempo}`);

    // Verifica se os valores são válidos (não vazios ou NaN)
    if (carga <= 0 || distancia <= 0 || tempo <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o IMC
     const wingate = ((carga * distancia)/tempo).toFixed(2);
     console.log(`wingate: ${wingate}`);

    // Exibe o resultado
    resultado.textContent = `O valor da Potência Anaeróbia de Wingate  foi de ${wingate} W`;
}

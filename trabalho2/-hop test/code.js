const resultado = document.getElementById("resultado");

function calculoHopTest() {
    // Captura os valores de distância e tempo
    const distancia = parseFloat(document.getElementById("distancia").value);
    const tempo = parseFloat(document.getElementById("tempo").value);

    console.log(`Distância: ${distancia}, Tempo: ${tempo}`);

    // Verifica se os valores são válidos (não vazios, NaN ou negativos)
    if (isNaN(distancia) || isNaN(tempo) || distancia <= 0 || tempo <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula a performance do Hop Test
    const performance = (distancia / tempo).toFixed(2);
    console.log(`Performance: ${performance}`);

    // Exibe o resultado
    resultado.textContent = `A performance no Hop Test é de ${performance} m/s`;
}
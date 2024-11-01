const resultado = document.getElementById("resultado");

function calculo() {
    // Captura os valores de peso e altura dentro da função
    const forca = parseFloat(document.getElementById("forca").value);
    const distancia = parseFloat(document.getElementById("distancia").value);

    console.log(`Força: ${forca}, Distância: ${distancia}`);

    // Verifica se os valores são válidos (não vazios ou NaN)
    if (forca <= 0 || distancia <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o IMC
     const torque = (forca * distancia).toFixed(2);
     console.log(`torque: ${torque}`);

    // Exibe o resultado
    resultado.textContent = `O valor do Torque foi de ${torque}`;
}

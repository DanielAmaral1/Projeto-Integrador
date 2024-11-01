const resultado = document.getElementById("resultado");

function calculoTorque() {
    // Captura os valores de força, distancia e angulo dentro da função
    const forca = parseFloat(document.getElementById("forca").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const anguloGraus = parseFloat(document.getElementById("angulo").value);

    console.log(`Força: ${forca}, Distância: ${distancia}, Ângulo: ${anguloGraus}`);

    // Verifica se os valores são válidos (não vazios, NaN ou negativos)
    if (forca <= 0 || distancia <= 0 || isNaN(anguloGraus)) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Converte o ângulo de graus para radianos
    const anguloRadianos = anguloGraus * (Math.PI / 180);

    // Calcula o torque
    const torque = (forca * distancia * Math.sin(anguloRadianos)).toFixed(2);
    console.log(`Torque: ${torque}`);

    // Exibe o resultado
    resultado.textContent = `O valor do Torque é de ${torque} N·m`;
}

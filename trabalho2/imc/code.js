const resultado = document.getElementById("resultado");

function calculo() {
    // Captura os valores de peso e altura dentro da função
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    console.log(`Peso: ${peso}, Altura: ${altura}`);

    // Verifica se os valores são válidos (não vazios ou NaN)
    if (peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o IMC
     const imc = ((peso / (altura * altura))* 10000).toFixed(2);
     console.log(`imc: ${imc}`);

    // Exibe o resultado
    resultado.textContent = `O valor do IMC foi de ${imc}`;
}

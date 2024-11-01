const resultado = document.getElementById("resultado");

function calculoFlexibilidade() {
    // Captura os valores de altura e alcance
    const altura = parseFloat(document.getElementById("altura").value);
    const alcance = parseFloat(document.getElementById("alcance").value);

    console.log(`Altura: ${altura}, Alcance: ${alcance}`);

    // Verifica se os valores são válidos (não vazios, NaN ou negativos)
    if (altura <= 0 || alcance < 0 || isNaN(altura) || isNaN(alcance)) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula a flexibilidade
    const flexibilidade = (alcance - altura).toFixed(2);
    console.log(`Flexibilidade: ${flexibilidade}`);

    // Exibe o resultado
    resultado.textContent = `O valor da Flexibilidade é de ${flexibilidade} cm`;
}
const resultado = document.getElementById("resultado");

function calculo() {
    // Captura os valores de IMC e idade dentro da função
    const imc = parseFloat(document.getElementById("imc").value);
    const idade = parseFloat(document.getElementById("idade").value);

    console.log(`Imc: ${imc}, Idade: ${idade}`);

    // Verifica se os valores são válidos (não vazios ou NaN)
    if (isNaN(imc) || imc <= 0 || isNaN(idade) || idade <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o percentual gordura
    const percgordura = ((1.20 * imc) + (0.23 * idade) - 16.2).toFixed(2);
    console.log(`Percentual de gordura: ${percgordura}`);

    // Exibe o resultado
    resultado.textContent = `O valor do Percentual de Gordura foi de ${percgordura}%`;
}

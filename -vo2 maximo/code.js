const resultado = document.getElementById("resultado");

function calculoVO2() {
    // Captura os valores de idade e frequência cardíaca de repouso
    const idade = parseInt(document.getElementById("idade").value);
    const fcRep = parseFloat(document.getElementById("fcRep").value);
    
    console.log(`Idade: ${idade}, FC Repouso: ${fcRep}`);

    // Verifica se os valores são válidos
    if (idade <= 0 || fcRep <= 0 || isNaN(idade) || isNaN(fcRep)) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula a frequência cardíaca máxima
    const fcMax = 220 - idade;

    // Calcula o VO2 máximo usando a fórmula de Åstrand
    const vo2Maximo = (15.3 * (fcMax / fcRep)).toFixed(2);
    console.log(`VO2 Máximo: ${vo2Maximo}`);

    // Exibe o resultado
    resultado.textContent = `O valor do VO2 Máximo é de ${vo2Maximo} ml/kg/min`;
}
const resultado = document.getElementById("resultado");

function calculoDeclinioForca() {
    // Captura os valores de força inicial e força final
    const forcaInicial = parseFloat(document.getElementById("forcaInicial").value);
    const forcaFinal = parseFloat(document.getElementById("forcaFinal").value);

    console.log(`Força Inicial: ${forcaInicial}, Força Final: ${forcaFinal}`);

    // Verifica se os valores são válidos
    if (forcaInicial <= 0 || forcaFinal < 0 || isNaN(forcaInicial) || isNaN(forcaFinal)) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o declínio de força em percentual
    const declinio = ((forcaInicial - forcaFinal) / forcaInicial * 100).toFixed(2);
    console.log(`Declínio de Força: ${declinio}%`);

    // Exibe o resultado
    resultado.textContent = `O declínio de força é de ${declinio}%`;
}

document.getElementById("form-calculadora").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém o peso do produto
    const peso = parseFloat(document.getElementById("peso").value);

    // Obtém o tipo de tubo escolhido
    const tipoTubo = document.getElementById("tipoTubo").value;

    // Define o custo por kg com base na seleção
    let custoPorKg;

    if (tipoTubo === "16x16") {
        custoPorKg = 13.70; // Preço por kg do tubo 16mm x 16mm
    } else if (tipoTubo === "20x20") {
        custoPorKg = 10.61; // Preço por kg do tubo 20mm x 20mm
    } else {
        custoPorKg = 12.00; // Preço padrão por kg
    }

    // Valida a entrada
    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, insira um peso válido maior que zero.");
        return;
    }

    // Calcula o custo
    const custo = peso * custoPorKg;

    // Gera a tabela com os custos finais para diferentes margens
    const margens = [1.0, 2.0, 3.0, 4.0, 5.0];
    let tabelaResultados = `
        <table>
            <thead>
                <tr>
                    <th>Margem de Lucro (%)</th>
                    <th>Valor Final (R$)</th>
                </tr>
            </thead>
            <tbody>
    `;
    margens.forEach((margem) => {
        const valorFinal = custo * (1 + margem);
        tabelaResultados += `
            <tr>
                <td>${(margem * 100).toFixed(0)}%</td>
                <td>R$ ${valorFinal.toFixed(2)}</td>
            </tr>
        `;
    });
    tabelaResultados += `
            </tbody>
        </table>
    `;

    // Exibe o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Peso:</strong> ${peso.toFixed(2)} kg</p>
        <p><strong>Custo por kg:</strong> R$ ${custoPorKg.toFixed(2)}</p>
        <p><strong>Custo Total:</strong> R$ ${custo.toFixed(2)}</p>
        ${tabelaResultados}
    `;
    resultadoDiv.style.display = "block";
});

document.getElementById("form-calculadora").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém o peso do produto
    const peso = parseFloat(document.getElementById("peso").value);

    // Valida a entrada
    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, insira um peso válido maior que zero.");
        return;
    }

    // Calcula o custo
    const custo = peso * 12;

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
        <p><strong>Custo:</strong> R$ ${custo.toFixed(2)}</p>
        ${tabelaResultados}
    `;
    resultadoDiv.style.display = "block";
});


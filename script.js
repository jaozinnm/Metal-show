document.getElementById("form-calculadora").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém o peso do produto
    const peso = parseFloat(document.getElementById("peso").value);

    // Obtém o tipo de tubo selecionado
    const tipoTubo = document.getElementById("tubo").value;

    // Valida a entrada de peso
    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, insira um peso válido maior que zero.");
        return;
    }

    // Definir os custos por quilo com base no tipo de tubo
    let custoPorQuilo;
    if (tipoTubo === "16") {
        custoPorQuilo = 13.70; // Custo do tubo 16mm
    } else {
        custoPorQuilo = 10.61; // Custo do tubo 20mm
    }

    // Calcula o custo baseado no peso e no tubo selecionado
    const custo = peso * custoPorQuilo;

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
        <p><strong>Tipo de Tubo:</strong> ${tipoTubo === "16" ? "Tubo 16mm x 16mm" : "Tubo 20mm x 20mm"}</p>
        <p><strong>Custo:</strong> R$ ${custo.toFixed(2)}</p>
        ${tabelaResultados}
    `;
    resultadoDiv.style.display = "block";
});

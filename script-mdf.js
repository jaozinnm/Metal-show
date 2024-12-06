document.getElementById("form-mdf").addEventListener("submit", function (e) {
    e.preventDefault();

    // Valores fixos da chapa de MDF
    const larguraChapa = 2.75; // largura em metros
    const alturaChapa = 1.83; // altura em metros
    const precoChapa = 300.00; // preço total da chapa

    // Obtém as dimensões do tampão
    const larguraTampao = parseFloat(document.getElementById("largura").value) / 100; // converte para metros
    const alturaTampao = parseFloat(document.getElementById("altura").value) / 100; // converte para metros

    // Valida as dimensões
    if (isNaN(larguraTampao) || isNaN(alturaTampao) || larguraTampao <= 0 || alturaTampao <= 0) {
        alert("Por favor, insira dimensões válidas.");
        return;
    }

    // Calcula a área da chapa e do tampão
    const areaChapa = larguraChapa * alturaChapa;
    const areaTampao = larguraTampao * alturaTampao;

    // Calcula a quantidade de tampões possíveis e o custo por tampão
    const quantidadeTampoes = Math.floor(areaChapa / areaTampao);
    const custoPorTampao = precoChapa / quantidadeTampoes;

    // Calcula o preço final com 100% de lucro
    const precoFinalComLucro = custoPorTampao * 2; // 100% de lucro = custo * 2

    // Exibe o resultado
    const resultadoDiv = document.getElementById("resultado-mdf");
    resultadoDiv.innerHTML = `
        <p><strong>Dimensões da chapa:</strong> ${larguraChapa}m x ${alturaChapa}m</p>
        <p><strong>Dimensões do tampão:</strong> ${larguraTampao.toFixed(2)}m x ${alturaTampao.toFixed(2)}m</p>
        <p><strong>Quantidade de tampões possíveis:</strong> ${quantidadeTampoes}</p>
        <p><strong>Custo por tampão:</strong> R$ ${custoPorTampao.toFixed(2)}</p>

        <h3>Preço Final com Lucro</h3>
        <table>
            <tr>
                <th>Percentual de Lucro</th>
                <th>Preço Final</th>
            </tr>
            <tr>
                <td>100%</td>
                <td>R$ ${precoFinalComLucro.toFixed(2)}</td>
            </tr>
        </table>
    `;
    resultadoDiv.style.display = "block";
});


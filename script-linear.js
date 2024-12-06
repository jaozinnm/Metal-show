document.getElementById("form-linear").addEventListener("submit", function (e) {
    e.preventDefault();

    // Preço dos tubos por 6 metros
    const precoTubo16 = 37.00; // Preço do tubo de 16mm (por 6 metros)
    const precoTubo20 = 35.00; // Preço do tubo de 20mm (por 6 metros)

    // Calcula o preço por metro
    const precoPorMetro16 = precoTubo16 / 6;
    const precoPorMetro20 = precoTubo20 / 6;

    // Obtém os dados inseridos pelo usuário
    const tipoTubo = document.getElementById("tipo-tubo").value;
    const quantidadeMetros = parseFloat(document.getElementById("quantidade-metros").value);

    // Valida a entrada
    if (isNaN(quantidadeMetros) || quantidadeMetros <= 0) {
        alert("Por favor, insira uma quantidade válida de metros.");
        return;
    }

    // Calcula o custo por metro e o número de tubos necessários
    let precoUnitario = tipoTubo === "16" ? precoPorMetro16 : precoPorMetro20;
    let custoTotal = precoUnitario * quantidadeMetros;
    let quantidadeTubo = Math.ceil(quantidadeMetros / 6); // arredonda para cima o número de tubos

    // Calcula os valores finais com percentuais adicionados
    let custoComPercentual = {
        "100%": custoTotal * 2,   // Custo total + 100%
        "200%": custoTotal * 3,   // Custo total + 200%
        "300%": custoTotal * 4,   // Custo total + 300%
        "400%": custoTotal * 5,   // Custo total + 400%
        "500%": custoTotal * 6    // Custo total + 500%
    };

    // Exibe o resultado
    const resultadoDiv = document.getElementById("resultado-linear");
    resultadoDiv.innerHTML = `
        <p><strong>Custo por metro de tubo:</strong> R$ ${precoUnitario.toFixed(2)}</p>
        <p><strong>Quantidade de metros desejada:</strong> ${quantidadeMetros} metros</p>
        <p><strong>Quantidade de tubos necessários:</strong> ${quantidadeTubo} tubos</p>
        <p><strong>Custo Total:</strong> R$ ${custoTotal.toFixed(2)}</p>

        <h3>Custos Finais com Porcentagens Adicionais</h3>
        <table>
            <tr>
                <th>Percentual</th>
                <th>Valor Final</th>
            </tr>
            <tr>
                <td>100%</td>
                <td>R$ ${custoComPercentual["100%"].toFixed(2)}</td>
            </tr>
            <tr>
                <td>200%</td>
                <td>R$ ${custoComPercentual["200%"].toFixed(2)}</td>
            </tr>
            <tr>
                <td>300%</td>
                <td>R$ ${custoComPercentual["300%"].toFixed(2)}</td>
            </tr>
            <tr>
                <td>400%</td>
                <td>R$ ${custoComPercentual["400%"].toFixed(2)}</td>
            </tr>
            <tr>
                <td>500%</td>
                <td>R$ ${custoComPercentual["500%"].toFixed(2)}</td>
            </tr>
        </table>
    `;
    resultadoDiv.style.display = "block";
});


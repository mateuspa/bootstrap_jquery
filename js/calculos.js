$("#calcular").click(function () {
    let nome = $("#nome").val();
    let idade = parseFloat($("#idade").val());
    let salario = parseFloat($("#salario").val());
    let dependentes = parseFloat($("#dependentes").val());

    let adicionais = parseFloat(((idade + salario + dependentes) / 3).toFixed(2));

    if (isNaN(idade) || isNaN(salario) || isNaN(dependentes)) {
        alert('Favor inserir valores válidos para: Idade, Salário e Depentestes!!!')
        return;
    }

    let calculo = adicionais.toLocaleString('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });

    if (idade > 1) {
        alert("Nome do funcionário: " + nome+"\nNúmero de dependentes: " + dependentes+"\nSalário Bruto: " + salario +"\nINSS: " + salario+"\nVale Transporte: " + salario+"\nSalário Líquido: " + calculo)

            /*
            
            + salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '\nINSS: ' + (salario * 0.11).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '\nVale Transporte: ' + (salario * 0.06).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' };
*/
    } else {
        alert('Valor menor ou igual a 6: ' + adicionais)
        
    }
/*
    // if ternário: decisão em uma linha
    //var mostrar = "da média"
    //mostrar = (media > 6) ? "acima " + mostrar : "abaixo " + mostrar;
    //alert('Resultado do if ternário: ' + mostrar)

    //estrutura de decisão - switch case
    var msg = "A média é: ";
    switch (parseInt(media) % 2) {
        case 0:
            msg += "PAR";
            break;
        case 1:
            msg += "IMPAR";
            break;
        default:
            msg = "erro";
            break;
    }
    alert(msg)

    switch (true) {
        case (media > 10):
            msg = "Maior que 10";
            break;
        case (media > 5):
            msg = "Maior que 5";
            break;
        default:
            msg = "Menor ou igual a 5";
            break;
    }
    alert(msg)


    //fatorial
    var fatorial = 1;


    for (let i = 1; i <= v1; i++) {
        fatorial *= i;
    }

    alert('O valor fatorial de v1 é: ' + fatorial)

    $("#txtfatorial")
        .text("Valor do fatorial é: " + fatorial)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#00f' });
        */	
});
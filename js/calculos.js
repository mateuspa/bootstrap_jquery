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

    // calculando adicional de 8% INSS
    inss = salario * 0.08;

    // calculando adicional de 5% Vale Transporte
    vale = salario * 0.05;

    if (idade > 50) {
        bonus = 300;
    } else {
        bonus = 200;
    }

    adicional_depententes = dependentes * 50;

    salario_liquido = salario - inss - vale + bonus + adicional_depententes;

    if (idade > 1) {
        alert("Nome do funcionário: " + nome + "\nNúmero de dependentes: " + dependentes + "\nSalário Bruto: " + salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nINSS: " + inss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nVale Transporte: " + vale.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nSalário Líquido: " + salario_liquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    } else {
        alert('Valor menor ou igual a 6: ' + adicionais)

    }
});
$("#calcular").click(function () {
    let nome = $("#nome").val();
    let idade = parseFloat($("#idade").val());
    let salario = parseFloat($("#salario").val());
    let dependentes = parseFloat($("#dependentes").val());
    let aliquotainss = parseFloat($("#aliquotainss").val());
    let aliquotafgts = parseFloat($("#aliquotafgts").val());
    let aliquotavaletransporte = parseFloat($("#aliquotavaletransporte").val());

    if (isNaN(idade) || isNaN(salario) ) {
        alert('Preencher campos obrigatórios: Idade e Salário Bruto.')
        return;
    }

    // calculando adicional de INSS
    inss = salario * (aliquotainss / 100);
    
    // calculando adicional de FGTS
    fgts = salario * (aliquotafgts / 100);

    // calculando adicional de Vale Transporte
    valetransporte = salario * (aliquotavaletransporte / 100);

    // calculando bônus
    bonus = 0;
    
    //calculado salário líquido
    salarioliquido = salario - inss - fgts -valetransporte + bonus;

    if (idade > 1) {
        alert("Nome do funcionário: " + nome + "\nNúmero de dependentes: " + dependentes + "\nSalário Bruto: " + salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nINSS: " + inss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nVale Transporte: " + vale.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nSalário Líquido: " + salario_liquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    } else {
        alert('Baby detectado, não tem salário.')

    }
});
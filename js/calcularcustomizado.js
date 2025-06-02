$("#calcularcustomizado").click(function () {
    let nome = $("#nome").val();
    let idade = parseFloat($("#idade").val());
    let salariobruto = parseFloat($("#salariobruto").val());
    let dependentes = parseFloat($("#dependentes").val());
    let aliquotainss = parseFloat($("#aliquotainss").val());
    let aliquotafgts = parseFloat($("#aliquotafgts").val());
    let aliquotavaletransporte = parseFloat($("#aliquotavaletransporte").val());
    let bonus = parseFloat($("#bonus").val());

    if (isNaN(idade) || isNaN(salariobruto) ) {
        alert('Preencher campos obrigatórios: Idade e Salário Bruto.')
        return;
    }

    // calculando adicional de INSS
    inss = salariobruto * (aliquotainss / 100);
    
    // calculando adicional de FGTS
    fgts = salariobruto * (aliquotafgts / 100);

    // calculando adicional de Vale Transporte
    valetransporte = salariobruto * (aliquotavaletransporte / 100);

    //calculado salário líquido
    salarioliquido = salariobruto - inss - fgts -valetransporte + bonus;

    if (idade > 1) {
      alert("Nome do funcionário: " + nome + "\nNúmero de dependentes: " + dependentes + "\nSalário Bruto: " + salariobruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nINSS: " + inss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nFGTS: " + fgts.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nVale Transporte: " + valetransporte.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nBônus: " + bonus.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nSalário Líquido: " + salarioliquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    } else {
        alert('Baby detectado, não tem salário.')
    }
});
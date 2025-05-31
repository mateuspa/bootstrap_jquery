$("#calcular").click(function () {
    let v1 = parseFloat($("#txtvalor1").val());
    let v2 = parseFloat($("#txtvalor2").val());
    let v3 = parseFloat($("#txtvalor3").val());

    let media = parseFloat(((v1 + v2 + v3) / 3).toFixed(2));

    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        alert('Favor inserir valores válidos para: Valor 1, Valor 2 e Valor 3 !!!')
        return;
    }

    let moeda = media.toLocaleString('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });

    $('#txtmedia')
        .text("A média é: " + moeda)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#00f' })
        .fadeIn(1000);

    if (media > 6) {
        alert('Valor acima de 6: ' + media)
        console.log('Valor acima de 6: ' + media)
        $("#txtmsg")
            .text("Valor acima de 6: " + media)
            .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#00f' });
    } else {
        alert('Valor menor ou igual a 6: ' + media)
        console.log('Valor menor ou igual a 6: ' + media)
        $("#txtmsg")
            .text("Valor menor ou igual a 6: " + media)
            .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#00f' });
    }

    // if ternário: decisão em uma linha
    var mostrar = "da média"
    mostrar = (media > 6) ? "acima " + mostrar : "abaixo " + mostrar;
    alert('Resultado do if ternário: ' + mostrar)

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
});
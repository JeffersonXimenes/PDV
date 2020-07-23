validarCpf = () => {
    let cpf = document.getElementById("inputCpf");
    let valido = document.getElementById("alertCpfValido");
    let invalido = document.getElementById("alertCpfInvalido");

    if (cpf.value.length != 11) {
        invalido.style.display = "block";
        valido.style.display = "none";
    } else {
        invalido.style.display = "none";
        valido.style.display = "block";
    }
}

calcularTroco = () => {
    let total = document.getElementById("total").value;
    let recebido = document.getElementById("recebido").value;

    if (total > recebido) {
        document.getElementById("insuficiente").style.display = "block";
    } else {
        document.getElementById("troco").value = recebido - total;
        document.getElementById("insuficiente").style.display = "none";
    }
}
function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");
  const erro = document.getElementById("erro");

  erro.textContent = "";
  resultado.textContent = "";

  if (isNaN(peso) || isNaN(altura)) {
    erro.textContent = "Insira apenas números válidos.";
    return;
  }

  if (!peso || !altura) {
    erro.textContent = "Campos vazios";
    return;
  }

  if (peso < 10 || peso > 300 || altura < 0.5 || altura > 2.5) {
    erro.textContent = "Insira valores válidos para peso e altura.";
    return;
  }

  const imc = peso / (altura * altura);
  const imcFormatado = imc.toFixed(2);

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    classificacao = "Obesidade grau 1";
  } else if (imc >= 35 && imc < 39.9) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  resultado.textContent = `Seu IMC é ${imcFormatado}. Classificação: ${classificacao}`;
}

function limparCampos() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("erro").textContent = "";
}

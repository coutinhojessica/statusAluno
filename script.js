function converterParaVirgula(numero) {
    if (isNaN(numero)) return "";

    return numero.toString().replace(".", ",");
}

function converterParaPonto(valor) {
    if (typeof valor !== "string") {
        return NaN;
    }

    const normalizado = valor.replace(",", ".");
    return Number(normalizado);
}

function verificarMedia(n1, n2, n3, n4) {
    if (n1 && n2 && n3 && n4) {
        let mediaEscolar = (n1 + n2 + n3 + n4) / 4;
        return mediaEscolar;
    } else{
        return false;
    }
}

let forms = document.getElementById("forms");
forms.addEventListener("submit", (event) => {
    event.preventDefault();

    let notas = {
        nota1: (one = document.getElementById("nota1").value),
        nota2: (two = document.getElementById("nota2").value),
        nota3: (three = document.getElementById("nota3").value),
        nota4: (four = document.getElementById("nota4").value),
    };

    let notasAlunos1 = converterParaPonto(notas.nota1);
    let notasAlunos2 = converterParaPonto(notas.nota2);
    let notasAlunos3 = converterParaPonto(notas.nota3);
    let notasAlunos4 = converterParaPonto(notas.nota4);

    let calculoMediaEscolar = verificarMedia(notasAlunos1, notasAlunos2, notasAlunos3, notasAlunos4);

    let msgResultado = document.querySelector(".msgErro");

    let resultadoNotas = converterParaVirgula(calculoMediaEscolar);

    let resultado = document.querySelector(".resultado");

    if (calculoMediaEscolar) {
        if (calculoMediaEscolar >= 7) {
            resultado.textContent = `Parabéns, você foi aprovado! Sua média foi: ${resultadoNotas}`;
        } else {
            resultado.textContent = `Infelizmente você ficou reprovado! Sua média foi: ${resultadoNotas}`;
            msgResultado.textContent = "";
        }
    } else {
        msgResultado.textContent = "Está faltando notas para fechar o bimestre.";
    }
});

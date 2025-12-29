function validacaoNota (nota) {
      
        if (nota <= 0 || nota > 10) {
            return false;
        }else{
            return nota
        }

}

function converterParaVirgula(numero) {
    if (isNaN(numero)) return "";

    return numero.toString().replace(".", ",");
}

function converterParaPonto(valor) {
    if (typeof valor !== "string") {
        return NaN;
    } else if (valor < 0){
        return false;
    }

    const normalizado = valor.replace(",", ".");
    return Number(normalizado);
}

function verificarMedia(n1, n2, n3, n4) {

    if (n1 && n2 && n3 && n4) {
        let mediaEscolar = (n1 + n2 + n3 + n4) / 4;
        return mediaEscolar;
    } else{
        return false
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

    let n1 = validacaoNota(notas.nota1);
    let n2 = validacaoNota(notas.nota2);
    let n3 = validacaoNota(notas.nota3);
    let n4 = validacaoNota(notas.nota4); 

    let msgInfo = document.querySelector(".msgInfo");

    if (!n1 || !n2 || !n3 || !n4) {
         msgInfo.textContent = `As notas estão inválidas ou não foram preenchidas.`;
    }
   

    let notasAlunos1 = converterParaPonto(n1);
    let notasAlunos2 = converterParaPonto(n2);
    let notasAlunos3 = converterParaPonto(n3);
    let notasAlunos4 = converterParaPonto(n4);


    let calculoMediaEscolar = verificarMedia(notasAlunos1, notasAlunos2, notasAlunos3, notasAlunos4);

    let resultadoNotas = converterParaVirgula(calculoMediaEscolar.toFixed(1));
    
    let resultado = document.querySelector(".resultado");


    if (calculoMediaEscolar) {
        if (calculoMediaEscolar >= 7) {
            resultado.innerHTML = `Parabéns, você foi aprovado! 
                <br><strong>Suas notas foram:</strong> 
                    <br>1º bimestre ${notas.nota1}, 
                    <br>2º bimestre ${notas.nota2},
                    <br>3º bimestre ${notas.nota3}, 
                    <br>4º bimestre ${notas.nota4}. 
                    <br>
                <br><strong> Sua média foi:</strong> ${resultadoNotas}`;
                msgInfo.textContent = "";
        } else {
                resultado.innerHTML = `Infelizmente você ficou reprovado! 
                <br><strong>Suas notas foram:</strong> 
                    <br>1º bimestre ${notas.nota1}, 
                    <br>2º bimestre ${notas.nota2}, 
                    <br>3º bimestre ${notas.nota3}, 
                    <br>4º bimestre ${notas.nota4}. 
                    <br>
                <br> Sua média foi: ${resultadoNotas}`;
                msgInfo.textContent = "";
        }
    } else{
        msgInfo.textContent = `As notas estão inválidas ou não foram preenchidas.`;
    }
    
});


  
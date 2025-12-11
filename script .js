function verificarStatusAluno(notaFinal, mediaAprovacao){
            if (notaFinal >= mediaAprovacao){
                return "Aprovado";
            }else if (notaFinal < mediaAprovacao && notaFinal >= 5){
                return "Recuperação";
            }else {
                return "Reprovado";
            }
        }
        const mediaEscolar = 7.0;
        const aprovado = verificarStatusAluno(9.9, mediaEscolar);
        console.log (`A nota é 9.9 e o status é: ${aprovado}`);

        const recuperacao = verificarStatusAluno(6.9, mediaEscolar);
        console.log (`A nota é 6.9 e o status é: ${recuperacao}`);

        const reprovado = verificarStatusAluno(4.9, mediaEscolar);
        console.log (`A nota é 4.9 e o status é: ${reprovado}`);
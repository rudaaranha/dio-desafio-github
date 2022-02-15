function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Adição (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)')); // cria uma barra de alerta com o valor dentro do prompt

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor: ')); //transformar os valores digitados em Number()
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if(!n1 || !n2) {
            alert('Erro - Parâmetros inválidos!');
            calculadora();
        } else {
            //Criando as operações da calculadora
            function soma() {
                resultado = n1 + n2;
                alert(`O somátorio de:\n ${n1} + ${n2} = ${resultado}`);
                novaOperacao()
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`A subtração de:\n ${n1} - ${n2} = ${resultado}`);
                novaOperacao()
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`A multiplicação de:\n ${n1} * ${n2} = ${resultado}`);
                novaOperacao()
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`A divisão real de:\n ${n1} / ${n2} = ${resultado}`);
                novaOperacao()
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre:\n ${n1} % ${n2} = ${resultado}`);
                novaOperacao()
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`A potencialção entre:\n ${n1} ** ${n2} = ${resultado}`);
                novaOperacao()
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra oepração?\n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida');
                    calculadora()
                }
            }   
        }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }    
}

calculadora();

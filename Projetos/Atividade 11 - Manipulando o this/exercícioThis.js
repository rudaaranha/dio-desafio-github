//Dada a função calculaIdade, utiliza os métodos call e apply para modificar o valor de this. Crie seus próprios objetos 

//Criação dos objetos pessoa1 e pessoa2.
const pessoa1 = {
    nome: 'João',
    idade: 15,
};

const pessoa2 = {
    nome: 'Carlos',
    idade: 29,
};

//Função dada para a questão
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

//Aplicação dos métodos call e apply, respectivamente
console.log(calculaIdade.call(pessoa1, 6));
console.log(calculaIdade.apply(pessoa2,[6]));
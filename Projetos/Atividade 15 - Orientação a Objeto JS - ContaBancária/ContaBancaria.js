/*
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1.Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
2.Dentro de ContaBancaria, construa o getter e o setter de saldo;
3.Dentro de ContaBancaria, crie os métodos sacar e depositar;
4.Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
5.Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
6.Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
7.Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
8.Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
9.Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //O underline serve para que o nome saldo possa ser usado nos métodos get e set sem dar conflito
        //Ou seja, sempre que um parâmetro tiver get e set, é indicado colocar o underline antes dos mesmo
    }

    //Métodos getter e setter
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    //Métodos
    sacar(valor) {
        if (valor > this._saldo) {
            return console.log("Saque Negado! Saldo insuficiente.");
        }

        this._saldo = this._saldo - valor;
        return `Saque no valor de R$${valor} efetuado com sucesso. Seu novo saldo é R$${this._saldo}.`
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return `Deposito no valor de R$${valor} efetuado com sucesso. Seu novo saldo é R$${this._saldo}.`
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoDeCredito) {
        super(agencia, numero);
		this.tipo = 'corrente';
        this._cartaoDeCredito = cartaoDeCredito;
    }

    //getter e setter do parâmetro cartão de credito
    get cartaoDeCredito() {
        return this._CartaoDeCredito;
    }
    set cartaoDeCredito(valor) {
        this._cartaoDeCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

    sacar(valor) {
        if (valor > 500) {
            return 'Operação Negada. Insira valores de até R$500,00.'
        }

        this._saldo = this._saldo - valor;
        return `Saque no valor de R$${valor} efetuado com sucesso. Seu novo saldo é R$${this._saldo}.`
    }
}
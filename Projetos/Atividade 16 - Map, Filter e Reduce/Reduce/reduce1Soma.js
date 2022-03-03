//Some todos os números de um array

function exemploReduce(arr) {
    return arr.reduce(function(prev, current) { //previous também é chamado de acumulador
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);//zero é o valor inicial. ao colocar o valor inicial, o programa será executado mais de uma vez para retornar o resultado esperado
};

const numeros = [2, 3, 5];

console.log(exemploReduce(numeros));
//Função soma que utiliza spread. Envia elementos de um array separadamente como parâmetros

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

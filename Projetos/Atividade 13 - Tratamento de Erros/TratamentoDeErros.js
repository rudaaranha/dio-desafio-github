/*
A função deve receber um array e retonar o mesmo caso o seu tamanho corresponda ao número enviado como parâmetro da função.
Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número.
- Realize as seguintes validações:
    1. Se os parâmetros não forem enviados, lance um erro do tipo 'ReferenceError';
    2. Se o array não for do tipo 'object', lance um erro do tipo 'TypeError';
    3. Se o número não for do tipo 'Number', lance um erro do tipo 'TyperError';
    4. Se o tamanho do array for diferente do número enviado como parâmentro, lance um erro do tipo 'RangeError'
- Utilize a declaração try...catch;
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function meuArray(arr, num) {
    try {
        if (!arr && !num) throw ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new TypeError ('O array precisa ser do tipo object.');

        if (typeof num !== 'number') throw new TypeError ('O num precisa ser do tipo number.');

        if (arr.length !== num) throw new RangeError ('O array e o número precisa ter o mesmo tamanho');

        return arr;
    }

    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError.");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError.");
            console.log(e.message);  
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError.");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e)
        }
    }
}

a = [4, 5, 6]

console.log(meuArray(a, 3));
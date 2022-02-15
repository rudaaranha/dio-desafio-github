/*Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
Exemplo: input -> [1, 3, 4, 6, 80, 33, 23, 90]
output -> [1, 3, 0, 0, 0, 33, 23, 0]

input -> []
output -> -1
*/
function elementosPares(array) {
    //código para retonar -1 em caso de array vazio.
    if (!array) return -1;
    if (!array.length) return -1;

    //código para substituir os números pares por zero.
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            if (array[i] !== 0) {
                console.log(`Substituindo ${array[i]} por 0...`)
                array[i] = 0;
            }
        }
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
let arr2 = [];

console.log(elementosPares(arr));
console.log(elementosPares(arr2));

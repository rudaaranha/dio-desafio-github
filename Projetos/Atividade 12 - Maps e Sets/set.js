/*//Dado o array abaixo, retorne outro array apenas com valores únicos
const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
};


console.log(valoresUnicos(myArray));
*/
let n = 6;
for (let i = 1; i <= n; i += 1) {
    console.log(' '.repeat(n-i) + '*'.repeat(i));
}
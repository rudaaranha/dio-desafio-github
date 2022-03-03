//Pratique a sintaxe de multiplicação de números, sem utilizar o parâmetro this.

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums); //Array original não foi alterado.
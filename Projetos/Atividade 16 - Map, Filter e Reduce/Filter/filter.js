//Filtre e retorne todos os números pares de um array.

function exemploFilter(arr) {
    return arr.filter(callback);
};

function callback(item) {
    return item % 2 === 0;
};

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(exemploFilter(meuArray));
console.log(meuArray);
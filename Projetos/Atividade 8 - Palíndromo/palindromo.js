//solução 1
function palindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
    //No momento que foi feito um split, a string retorna um array. Assim, é possível usar o reverse
    //O .join vai juntar todos os elementos do array formando uma string
}

//console.log(palindromo("ana"));


function palindromo2(string) {
    if(!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindromo2("gato"))
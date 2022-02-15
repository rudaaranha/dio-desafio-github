//Faz com que um elemento independente se torne parte de um array.

function confereTamanho(...args) {
    console.log(args.length);
}

console.log(confereTamanho()) //0
console.log(confereTamanho(1, 2)) //2
console.log(confereTamanho(3, 4, 5)) //3
/*Exercício - Crie uma função que recebe dois números como parâmetros.
-Confira se n1 é igual a n2;
-Confira se a soma é maior que 10 ou menor que 20.
*/
function comparacao (n1, n2) {
    if (!n1 || !n2) return "Defina dois números!";
    
    s = n1 + n2;
    if (n1 === n2) {
        if (s>10) {
            if (s<20) {
                return `Os números ${n1} e ${n2} são iguais. Sua soma é igual a ${s}, é maior que 10 e menor que 20.`;
            } else {
                return `Os números ${n1} e ${n2} são iguais. Sua soma é igual a ${s} e é maior que 20.`;
            }  
        } else {
            return `Os números ${n1} e ${n2} são iguais. Sua soma é igual a ${s} e é menor que 10.`;
        }
    } else {
        if (s>10) {
            if (s<20) {
                return `Os números ${n1} e ${n2} são diferentes. Sua soma é igual a ${s}, é maior que 10 e menor que 20.`;
            } else {
                return `Os números ${n1} e ${n2} são diferentes. Sua soma é igual a ${s} e é maior que 20.`;
            }  
        } else {
            return `Os números ${n1} e ${n2} são diferentes. Sua soma é igual a ${s} e é menor que 10.`;
        }
    }
}

console.log(comparacao(12, 12));
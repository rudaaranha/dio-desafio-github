//Código para importar o elemento do documento principal. Ou seja, fazer com que o elemento receba a variável criada
var currentNumberWrapper = document.getElementById('currentNumber'); //currentnumberwrapper vai estar ligada com o elemento html
var currentNumber = 0; //variável necessária pois o contador precisa começar em 0.

//função para mudar a cor dos números de 1 a 10, seguindo a peleta de cores
function changeColor() {
    if (currentNumber === 1) {
        currentNumberWrapper.style.color = '#01DF3A';
      } else if (currentNumber === 2) {
        currentNumberWrapper.style.color = "#01DF01";
      } else if (currentNumber === 3) {
        currentNumberWrapper.style.color = "#3ADF00";
      } else if (currentNumber === 4) {
        currentNumberWrapper.style.color = "#74DF00";
      } else if (currentNumber === 5) {
        currentNumberWrapper.style.color = "#A5DF00";
      } else if (currentNumber === 6) {
        currentNumberWrapper.style.color = "#D7DF01";
      } else if (currentNumber === 7) {
        currentNumberWrapper.style.color = "#DBA901";
      } else if (currentNumber === 8) {
        currentNumberWrapper.style.color = "#DF7401";
      } else if (currentNumber === 9) {
        currentNumberWrapper.style.color = "#DF3A01";
      } else {
        currentNumberWrapper.style.color = "#DF0101";
      }
}

//Função incremento. adiciona +1 ao valor mostrado na tela quando clicado no botão +.
function increment() {
    if (currentNumber < 10) { //limita o número máximo do contador para 10
        currentNumber++;
    }
    changeColor();
    currentNumberWrapper.innerHTML = currentNumber; //faz a variável ligada ao html receber o número do contador
}

//Função decremento. subtrai -1 ao valor mostrado na tela quando clicado no botão -.
function decrement() {
    if (currentNumber !== 0) { //impede o contador de mostrar números negativos
        currentNumber--;
    }
    changeColor(); //mudar a cor do número do contador
    currentNumberWrapper.innerHTML = currentNumber; //faz a variável ligada ao html receber o número do contador
}

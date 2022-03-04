/*
1. Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
2. Copie o HTML e o CSS deste repositório
3. Crie um arquivo chamado scripts.js na sua pasta assets/js
4. Selecione os elementos: h1, button, footer e body
5. Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original
*/

//Função changeMode() que vai mudar o estilo da página de light(padrão) para dark.
function changeMode() {
    changeClasses(); //chamada da função que muda as classes durante o evento

    changeText(); //chamada da função que muda os textos do button, body, h1 e footer durante o evento.
}

//Função que vai modificar as classes do button, h1, body e footer quando o evento for realizado, do padrão(light-mode) para dark-mode
function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

 //Mundando os textos do botão, h1, body e footer, do padrão light-mode para a classe dark-mode ao clicar no botão.
 function changeText() {
     const lightMode = "Light Mode";
     const darkMode = "Dark Mode";

     if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
     }

     button.innerHTML = darkMode;
     h1.innerHTML = lightMode + " ON";
}



//Criando a constante button que vai selecionar o elemento botão no html para criar o evento de mudar o modo
const button = document.getElementById('mode-selector'); 

//Criando as consts h1, body e footer que vão selecionar os elementos h1, body e footer a serem modificados durante o evento no html
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //Outro método de seleção de elementos.
const footer = document.getElementsByTagName('footer')[0];
/*
getElementsByTagName() vai retornar um array, sendo necessário indicar o índice. Como tanto o body como o footer já existem, ambos vão ser o índicer 0 do array.
*/

const darkModeClass = 'dark-mode'; //constante para facilitar na manutenção ou troca de classes

//Adicionando um evento listener no botão criado...
button.addEventListener('click', changeMode); //Ao clicar no botão a função change mode será ativada.

const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //Endereço do API
const catBtn = document.getElementById('change-cat'); //constante botão que será usada na interação
const catImg = document.getElementById('cat'); //constante para pegar a imagem

const getCats = async () => {  //Função p/ carregar os gatinhos
    try {
        const data = await fetch(BASE_URL); //dados da BASE_URL
        const json = await data.json();  //conversão da string recebida de data em json

        //usando a webpurl do api 'https://thatcopy.pw/catapi/rest'...
        return json.webpurl;  //vamos utilizar isso porque temos uma imagem comprimida
    }
    catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {  
    catImg.src = await getCats(); //Função para colocar a url recebida da imagem no campo imagem da página
};

catBtn.addEventListener('click', loadImg); //criando o evento do botão para carregar uma imagem ao clicar no botão

loadImg();  //linha para fazer a página já carregar com uma imagem

/*
Outra forma de fazer a função getCats sem o try/catch

const getCats = async () => {
    const data = await fetch(BASE_URL);
        .then((res) => res.json());
        .catch((e) => console.log(e));

    return data.webpurl;
};
*/

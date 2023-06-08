import { conectaApi } from "./conectaapi.js";
import constroiCard from "./mostrarvideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosdepesquisa =  document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosdepesquisa);
    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo , elemento.descricao , elemento.url , elemento.imagem)))
    
        if(busca.lenght == 0) {
            lista.innerHTML = `<h2 class="mensagem_titulo">Não existem videos com esses termos </h2>`
        }
}

const botaodepesquisa  = document.querySelector("[data-botao-pesquisa]");

botaodepesquisa.addEventListener("click" , evento => buscarVideo(evento))
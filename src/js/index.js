/*
OBJETIVO - Quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada pelo usuario e esconder o conteudo da aba anterior.

PASSO 1 - Dar jeito de pegar os elementos que representam as abas no HTML.

PASSO 2 - Dar um jeito de identificar o clique no elemento da aba.

PASSO 3 - Quando o usuário clicar, desmarcar a aba selecionada.

PASSO 4 - Marcar a aba clicada como selecionada.

PASSO 5 - Esconder o conteúdo anterior.

PASSO 6 - Mostrar o conteúdo da aba selecionada.

*/

// PASSO 1 - Dar jeito de pegar os elementos que representam as abas no HTML.
const abas = document.querySelectorAll(".aba");

// PASSO 2 - Dar um jeito de identificar o clique no elemento da aba.
abas.forEach(aba => {
    // PASSO 2 - Dar um jeito de identificar o clique no elemento da aba.
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionaraAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionaraAba(aba) {
    // PASSO 3 - Quando o usuário clicar, desmarcar a aba selecionada.  
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // PASSO 4 - Marcar a aba clicada como selecionada.
    aba.classList.add("selecionado");
};

function mostrarInformacoesDaAba(aba){
    // PASSO 5 - Esconder o conteúdo anterior.
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //  PASSO 6 - Mostrar o conteúdo da aba selecionada.
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado");
}
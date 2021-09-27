//estamos referênciando um objeto.
var rafa = {
    nome:"Rafa",
    vitorias:2, 
    empates:1,
    derrotas:1,
    pontos:0
}
var paulo = {
    nome:"Paulo",
    vitorias:1, 
    empates:1,
    derrotas:2,
    pontos:0
} 
calculaPontos(rafa)
function calculaPontos(jogador){
    var pontos = jogador.vitorias* 3 + jogador.empates
    console.log(pontos)
}

// function adicionarVitoria(vitorias){
//     console.log("adicionado!");
//     rafa.vitorias = vitorias++;
// }

// function adicionarDerrota(derrotas){
//     console.log("adicionado sua derrota!");
//     rafa.derrotas = derrotas++;
// }

// function adicionarEmpate(empates){
//     console.log("Jogo de Empate adicionado!");
//     rafa.empates = empates++;
// }


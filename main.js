

var curiosidades = [
    "O Brasil é a única seleção que participou de todas as Copas do Mundo da história!",
    "Pelé marcou 77 gols pela Seleção e é o único jogador com 3 Copas do Mundo.",
    "A camisa amarela só existe desde 1954. Antes disso, o Brasil jogava de branco!",
    "Garrincha nunca perdeu um jogo oficial atuando ao lado de Pelé pela Seleção.",
    "A goleada histórica do Brasil foi 14 a 0 na Nicarágua, em 1975.",
    "Ronaldo Fenômeno marcou 15 gols em Copas do Mundo, recorde brasileiro.",
    "Em 1958 o Brasil improvisou a camisa azul na véspera da final contra a Suécia."
];

var botaoCuriosidade = document.getElementById("btn-curiosidade");

if (botaoCuriosidade) {
    botaoCuriosidade.addEventListener("click", function () {
        
        var numeroSorteado = Math.floor(Math.random() * curiosidades.length);
        document.getElementById("texto-curiosidade").innerHTML = curiosidades[numeroSorteado];
    });
}

var botaoTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

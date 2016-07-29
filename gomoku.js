var Perdeu, jogador_vez, size = 15;
Vez = new Array(3), Vez[0] = new Image, Vez[0].src = "0.gif", Vez[1] = new Image, Vez[1].src = "1.gif", Vez[2] = new Image, Vez[2].src = "2.gif", document.getElementById("iniciar").onclick = function() {
    Inicio()
};

function Inicio() {
    for (Perdeu = false, document.getElementById("jogador2").style.opacity = .10, document.getElementById("jogador1").style.opacity = 1, jogador_vez = 1, row = 0; row < 15; row++)
        for (col = 0; col < 15; col++)
            document.images[size * row + col].src = Vez[0].src
}

function Clicar(c, o) {
    false == Perdeu && document.images[size * c + o].src == Vez[0].src && (1 == jogador_vez ? (document.images[size * c + o].src = Vez[1].src, document.getElementById("jogador1").style.opacity = .3, document.getElementById("jogador2").style.opacity = 1) : (document.images[size * c + o].src = Vez[2].src, document.getElementById("jogador2").style.opacity = .3, document.getElementById("jogador1").style.opacity = 1), Perdeu = Verifica(jogador_vez), Perdeu && (document.getElementById("win").innerHTML = '<img src="' + Vez[jogador_vez].src + '" />&nbsp;venceu!', document.getElementById("id01").style.display = "block"), jogador_vez = 1 == jogador_vez ? 2 : 1)
}

function Verifica(c) {
    for (row = 0; row < 15; row++)
        for (col = 0; col < 15; col++)
            if (document.images[size * row + col].src == Vez[c].src) {
                if (col + 4 < 15 && document.images[size * row + col + 1].src == Vez[c].src && document.images[size * row + col + 2].src == Vez[c].src && document.images[size * row + col + 3].src == Vez[c].src && document.images[size * row + col + 4].src == Vez[c].src) return console.log("Jogador " + c + " venceu!"), true;
                if (row + 4 < 15 && document.images[size * (row + 1) + col].src == Vez[c].src && document.images[size * (row + 2) + col].src == Vez[c].src && document.images[size * (row + 3) + col].src == Vez[c].src && document.images[size * (row + 4) + col].src == Vez[c].src) return console.log("Jogador " + c + " venceu!"), true;
                if (col + 4 < 15 && row + 4 < 15 && document.images[size * (row + 1) + col + 1].src == Vez[c].src && document.images[size * (row + 2) + col + 2].src == Vez[c].src && document.images[size * (row + 3) + col + 3].src == Vez[c].src && document.images[size * (row + 4) + col + 4].src == Vez[c].src) return console.log("Jogador " + c + " venceu!"), true;
                if (col - 4 >= 0 && row + 4 < 15 && document.images[size * (row + 1) + col - 1].src == Vez[c].src && document.images[size * (row + 2) + col - 2].src == Vez[c].src && document.images[size * (row + 3) + col - 3].src == Vez[c].src && document.images[size * (row + 4) + col - 4].src == Vez[c].src) return console.log("Jogador " + c + " venceu!"), true
            }
    return false
}

function tab() {
    document.writeln("<table class='tabuleiro' style='float:left'>");
    for (row = 0; row < 15; row++) {
        document.writeln("<tr>");
        for (col = 0; col < 15; col++) {
            document.write("<td><a href='javascript:Clicar(" + row + "," + col + ")'><img src='0.gif' width=32 /></a></td>");
        }
        document.writeln("</tr>");
    }
    document.writeln("</table>");
}
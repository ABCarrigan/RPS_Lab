// determine turn order and indicate who's turn it is
document.getElementById('btnStart').onclick = function turnOrder(){
    var playerTurn = Math.floor(Math.random() * 2)
    if (playerTurn = 0) {
        window.location.replace("p1turn.html");
    }
    else {
        window.location.replace("p2turn.html");
    }}
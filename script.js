let p1hand = 'blank'
let p2hand = 'blank'
var btnStart = document.querySelector('#btnStart')

btnStart.onclick = function turnOrder(){
    var playerTurn = Math.floor(Math.random() * 2)
    if (playerTurn = 1) {
        document.getElementById("p1Name").innerHTML = "Player 1's turn!";    
        document.getElementById("p2Name").innerHTML = "Player 2 is waiting...";    
        document.getElementById('btnStart').innerHTML = ">> Next >>";
        document.getElementById('mid2para').innerHTML ="Select a move!"
        document.getElementById('rpsImgR').onclick = function rockPlay() {
            p1hand = 'rock';
            document.getElementById('rpsImgR').style.border = "thick solid #000000";
            document.getElementById('rpsImgP').style.border = "none";
            document.getElementById('rpsImgS').style.border = "none";
        }
        document.getElementById('rpsImgP').onclick = function paperPlay() {
            p1hand = 'paper';
            document.getElementById('rpsImgR').style.border = "none";
            document.getElementById('rpsImgP').style.border = "thick solid #000000";
            document.getElementById('rpsImgS').style.border = "none";
        }
        document.getElementById('rpsImgS').onclick = function scissorsPlay() {
            p1hand = 'scissors';
            document.getElementById('rpsImgR').style.border = "none";
            document.getElementById('rpsImgP').style.border = "none";
            document.getElementById('rpsImgS').style.border = "thick solid #000000";
        }
        btnStart.onclick = function p2turn(){
            document.getElementById('rpsImgR').style.border = "none";
            document.getElementById('rpsImgP').style.border = "none";
            document.getElementById('rpsImgS').style.border = "none";
            document.getElementById("p2Name").innerHTML = "Player 2's turn!";    
            document.getElementById("p1Name").innerHTML = "Player 1 is waiting..."
            document.getElementById('rpsImgR').onclick = function rockPlay() {
                p2hand = 'rock';
                document.getElementById('rpsImgR').style.border = "thick solid #000000";
                document.getElementById('rpsImgP').style.border = "none";
                document.getElementById('rpsImgS').style.border = "none";
            }
            document.getElementById('rpsImgP').onclick = function paperPlay() {
                p2hand = 'paper';
                document.getElementById('rpsImgR').style.border = "none";
                document.getElementById('rpsImgP').style.border = "thick solid #000000";
                document.getElementById('rpsImgS').style.border = "none";
            }
            document.getElementById('rpsImgS').onclick = function scissorsPlay() {
                p2hand = 'scissors';
                document.getElementById('rpsImgR').style.border = "none";
                document.getElementById('rpsImgP').style.border = "none";
                document.getElementById('rpsImgS').style.border = "thick solid #000000";
            }
            btnStart.onclick = function playerResult() {
                if ((p1hand = 'rock') && (p2hand = 'rock')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 ties!"
                    document.getElementById('p2Name').innerHTML = "Player 2 ties!"
                    document.getElementById('mid2para').innerHTML ="It's a tie!"
                    document.getElementById('rpsImgR').style.border = "thick solid #000000"
                    document.getElementById('rpsImgP').style.border = "none"
                    document.getElementById('rpsImgS').style.border = "none"
                    return
                } else if ((p1hand = 'rock') && (p2hand = 'paper')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 loses!"
                    document.getElementById('p2Name').innerHTML = "Player 2 wins!"
                    document.getElementById('mid2para').innerHTML ="Player 2, you win!"
                    document.getElementById('rpsImgP').style.border = "thick solid #71cbff"
                    document.getElementById('rpsImgR').style.border = "none"
                    document.getElementById('rpsImgS').style.border = "none"
                } else if ((p1hand = 'rock') && (p2hand = 'scissors')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 wins!"
                    document.getElementById('p2Name').innerHTML = "Player 2 loses!"
                    document.getElementById('mid2para').innerHTML ="Player 1, you win!"
                    document.getElementById('rpsImgR').style.border = "thick solid #ff7171"
                    document.getElementById('rpsImgS').style.border = "none"
                    document.getElementById('rpsImgR').style.border = "none"
                } else if ((p1hand = 'paper') && (p2hand = 'rock')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 wins!"
                    document.getElementById('p2Name').innerHTML = "Player 2 loses!"
                    document.getElementById('mid2para').innerHTML ="Player 1, you win!"
                    document.getElementById('rpsImgP').style.border = "thick solid #ff7171"
                    document.getElementById('rpsImgR').style.border = "none"
                    document.getElementById('rpsImgS').style.border = "none"
                } else if ((p1hand = 'paper') && (p2hand = 'paper')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 ties!"
                    document.getElementById('p2Name').innerHTML = "Player 2 ties!"
                    document.getElementById('mid2para').innerHTML ="It's a tie!"
                    document.getElementById('rpsImgP').style.border = "thick solid #000000"
                    document.getElementById('rpsImgR').style.border = "none"
                    document.getElementById('rpsImgS').style.border = "none"
                } else if ((p1hand = 'paper') && (p2hand = 'scissors')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 loses!"
                    document.getElementById('p2Name').innerHTML = "Player 2 wins!"
                    document.getElementById('mid2para').innerHTML ="Player 2, you win!"
                    document.getElementById('rpsImgP').style.border = "thick solid #71cbff"
                    document.getElementById('rpsImgR').style.border = "none"
                    document.getElementById('rpsImgS').style.border = "none"
                } else if ((p1hand = 'scissors') && (p2hand = 'rock')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 loses!"
                    document.getElementById('p2Name').innerHTML = "Player 2 wins!"
                    document.getElementById('mid2para').innerHTML ="Player 2, you win!"
                    document.getElementById('rpsImgR').style.border = "thick solid #71cbff"
                    document.getElementById('rpsImgP').style.border = "none"
                    document.getElementById('rpsImgS').style.border = "none"
                } else if ((p1hand = 'scissors') && (p2hand = 'paper')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 wins!"
                    document.getElementById('p2Name').innerHTML = "Player 2 loses!"
                    document.getElementById('mid2para').innerHTML ="Player 1, you win!"
                    document.getElementById('rpsImgS').style.border = "thick solid #ff7171"
                    document.getElementById('rpsImgP').style.border = "none"
                    document.getElementById('rpsImgR').style.border = "none"
                } else if ((p1hand = 'scissors') && (p2hand = 'scissors')) {
                    document.getElementById('p1Name').innerHTML = "Player 1 ties!"
                    document.getElementById('p2Name').innerHTML = "Player 2 ties!"
                    document.getElementById('mid2para').innerHTML ="It's a tie!"
                    document.getElementById('rpsImgS').style.border = "thick solid #000000"
                    document.getElementById('rpsImgR').style.border = "none"
                    document.getElementById('rpsImgP').style.border = "none"
                }
            }
        }
    }
    else {
        document.getElementById("p2Name").innerHTML = "Player 2's turn!";    
        document.getElementById('btnStart').innerHTML = ">> Next >>";
        document.getElementById('gameContext').innerHTML ="<p class=\"mid2para\">Select a move!</p> <img class=\"rpsImgR\" src=\"image/rock.png\"> <img class=\"rpsImgP\" src=\"image/paper.png\"> <img class=\"rpsImgS\" src=\"image/scissors.png\">"

    }
}
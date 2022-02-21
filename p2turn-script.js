//accept played hand and save it to a variable

document.getElementsByClassName('rpsImgR').onclick = function rockPlay() {
    p2hand = 'rock';
    document.getElementsByClassName('rpsImgR').style.border = "thick solid #000000";
}
document.getElementsByClassName('rpsImgP').onclick = function paperPlay() {
    p2hand = 'paper';
    document.getElementsByClassName('rpsImgP').style.border = "thick solid #000000";
}
document.getElementsByClassName('rpsImgS').onclick = function scissorsPlay() {
    p2hand = 'scissors';
    document.getElementsByClassName('rpsImgS').style.border = "thick solid #000000";
}
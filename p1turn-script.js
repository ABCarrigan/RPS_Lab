//accept played hand and save it to a variable

document.getElementsByClassName('rpsImgR').onclick = function rockPlay() {
    p1hand = 'rock';
    document.getElementsByClassName('rpsImgR').style.border = "thick solid #000000";
}
document.getElementsByClassName('rpsImgP').onclick = function paperPlay() {
    p1hand = 'paper';
    document.getElementsByClassName('rpsImgP').style.border = "thick solid #000000";
}
document.getElementsByClassName('rpsImgS').onclick = function scissorsPlay() {
    p1hand = 'scissors';
    document.getElementsByClassName('rpsImgS').style.border = "thick solid #000000";
}
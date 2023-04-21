let consecutiveMiddleTaps = 0;

function changeScore(id, amount) {
    let scoreElem = document.getElementById(id);
    let score = scoreElem.innerHTML;
    newScore = Number(score) + amount;
    if (newScore >= 0) {
        scoreElem.innerHTML = Number(score) + amount;
    }
    consecutiveMiddleTaps = 0;
}

function resetScores() {
    document.getElementById("awayScore").innerHTML = 0;
    document.getElementById("homeScore").innerHTML = 0;
    consecutiveMiddleTaps = 0;
}

function onClicky(e) {
    console.log(e);
    let middleY = window.innerHeight / 2;
    let giveY = Math.floor(window.innerHeight * .15);
    if (e.clientY > middleY + giveY) {
        changeScore(e.srcElement.id, -1);
    } else if (e.clientY < middleY - giveY) {
        changeScore(e.srcElement.id, 1);
    } else {
        let middleX = window.innerWidth / 2;
        let giveX = Math.floor(window.innerWidth * .1);
        if (Math.abs(e.clientX - middleX) < giveX) {
            consecutiveMiddleTaps++;
            if (consecutiveMiddleTaps == 3) {
                resetScores();
            }
        }
    }
}
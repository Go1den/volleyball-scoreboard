function changeScore(id, amount) {
    let scoreElem = document.getElementById(id);
    let score = scoreElem.innerHTML;
    newScore = Number(score) + amount;
    if (newScore >= 0) {
        scoreElem.innerHTML = Number(score) + amount;
    }
}

function resetScores() {
    document.getElementById("awayScore").innerHTML = 0;
    document.getElementById("homeScore").innerHTML = 0;
}

function onClicky(e) {
    console.log(e);
    let middle = window.innerHeight / 2;
    if (e.clientY > middle) {
        changeScore(e.srcElement.id, -1);
    } else {
        changeScore(e.srcElement.id, 1);
    }
}
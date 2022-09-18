/**
 * Array
 */

const tournamentWinner = function (competitions, results) {
    const winner = new Map();
    let maxScore = null;
    let currentBestTeam = null;
    results.forEach((val, index) => {
        const res = checkWinner(competitions[index], val);
        winner.set(res, winner.has(res) ? winner.get(res)+3 : 3);
    });
    winner.forEach((value, key) =>{
            maxScore = Math.max(value, maxScore);
            if(maxScore === value){
                currentBestTeam = key;
            }
    })
    return currentBestTeam;
}

const checkWinner = function (competition, position) {
    return position === 1 ? competition[0] : competition[1];
}

const competitions = [['HTML', 'C#'], ['C#', 'Python'], ['Python', 'HTML']];
const results = [0, 0, 1];
console.log(tournamentWinner(competitions, results))
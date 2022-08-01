var firstTeamGoals = document.getElementById('inp1');
var secondTeamGoals =  document.getElementById('inp2');
var totalGoals = firstTeamGoals + secondTeamGoals;
var winner = document.getElementById('winner');
var errorBlock = document.getElementById('error');
var firstTeamCombinations = document.getElementById('comb1');
var secondTeamCombinations = document.getElementById('comb2');
var errorPlayers1 = document.getElementById('ply1');
var errorPlayers2 = document.getElementById('ply2');

function findOutResults(){

    var firstTeamPlayers = document.getElementById('txt1').value.split('\n');
    var secondTeamPlayers = document.getElementById('txt2').value.split('\n');

    if((!isNaN(firstTeamGoals.value) &&
        !isNaN(secondTeamGoals.value)))
    {
            identifyWinner(totalGoals)
    }
    else
    {
        winner.innerHTML = "your inputs are not a number! Change it please."
    }

    firstTeamCombinations.innerHTML = teamCombination(firstTeamGoals.value);
    secondTeamCombinations.innerHTML = teamCombination(secondTeamGoals.value);

    if (firstTeamPlayers.length === 11 || firstTeamPlayers.length < 11 )
    {
        console.log("WHO PLAYS FOR TEAM1? HERE YOU CAN SEE:");
        firstTeamPlayers.forEach(el => console.log(el));
        errorPlayers1.innerHTML = "Everything is right";
    }
    else
    {
        errorPlayers1.innerHTML = "Team1 players' number is more than 11. Change it please.";
    }

    if (secondTeamPlayers.length === 11 || secondTeamPlayers.length < 11)
    {
        console.log("WHO PLAYS FOR TEAM2? HERE YOU CAN SEE:");
        secondTeamPlayers.forEach(el => console.log(el));
        errorPlayers2.innerHTML = "Everything is right";
    }
    else
    {
        errorPlayers2.innerHTML = "Team2 players' number is more than 11. Change it please.";
    }


    function teamCombination (totalGoals)
    {
        //code...
    }


    function identifyWinner (totalGoals)
    {
        if (totalGoals < 7)
        {
            if (parseInt(firstTeamGoals.value) > parseInt(secondTeamGoals.value))
            {
                winner.innerHTML = "Team1";
            }
            else
            {
                winner.innerHTML = "Team2";
            }
        }
        else
        {
            errorBlock.innerHTML = "(first team goals + second team goals) mustn't be more thant seven";
        }
    }

}

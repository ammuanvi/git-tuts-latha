
let score=JSON.parse(localStorage.getItem('score')) ||{ 
    wins:0,
    losses:0,
    ties:0
} ;

updateScoreEle();




function playGame(playerMove){
const computerMove= pickComputerMove();
let result='';
if(playerMove==='scissor'){
if(computerMove==='rock'){
result='you lose';
}else if(computerMove==='paper'){ 
result='you win';

}else if(computerMove==='scissor'){
result='Tie';
}
}else if(playerMove==='paper'){
if(computerMove==='rock'){
result='you win';
}else if(computerMove==='paper'){
result='Tie';

}else if(computerMove==='scissor'){
result='you lose';

}
}else if(playerMove==='rock'){
if(computerMove==='rock'){
result='Tie';
}else if(computerMove === 'paper'){
result='you lose';

}else if(computerMove==='scissor'){
result='you win';

}
}

if(result==='you win'){
score.wins+=1;
}else if(result==='you lose')
{
score.losses+=1;

}else if(result==='Tie'){
score.ties+=1;
}

localStorage.setItem('score', JSON.stringify(score));


updateScoreEle();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-move').innerHTML=`you <img src="images/${playerMove}.jpeg" alt="rock" class="emoji">
<img src="images/${computerMove}.jpeg" alt="scissor" class="emoji"> Computer`;

//             alert(`you picked ${playerMove}. computer picked ${computerMove}: ${result} 
// wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`);

}

function updateScoreEle(){
document.querySelector('.js-score').innerHTML= `wins:${score.wins}  losses:${score.losses}  ties:${score.ties}`;

}
function pickComputerMove(){



let randomMove= Math.random();
let computerMove='';

if(randomMove>=0 && randomMove<1/3){
computerMove='rock';

}else if(randomMove>=1/3 && randomMove<2/3){
computerMove='paper';
}else if(randomMove>=2/3 && randomMove<1){
computerMove='scissor';

}
return computerMove;
}

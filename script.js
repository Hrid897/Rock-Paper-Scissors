let score;
if(JSON.parse(localStorage.getItem('score')) !==null){
    score = JSON.parse(localStorage.getItem('score'));
}
else{
    score = {
        win: 0, lose: 0, tie: 0
    }
}

let result = '';


function update_score(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}
update_score();



function move_generate(){
    let mover_name='';
    const random_num = Math.random();
    if(0<=random_num && random_num<1/3) mover_name = 'rock';
    else if(1/3<=random_num && random_num<2/3) mover_name = 'paper';
    else mover_name = 'scissors';
    return mover_name;
}

function gameplay(user_move){
    let computer_move = move_generate();

    if(user_move==='rock'){
        if(computer_move==='rock') result = 'Tie';
        else if(computer_move==='paper') result = 'Lose';
        else result = 'Win';
    }
    else if(user_move==='paper'){
        if(computer_move==='rock') result = 'Win';
        else if(computer_move==='paper') result = 'Tie';
        else result = 'Lose';
    }
    else{
        if(computer_move==='rock') result = 'Lose';
        else if(computer_move==='paper') result = 'Win';
        else result = 'Tie';
    }


    if(result==='Win') score.win++;
    else if(result==='Lose') score.lose++;
    else if(result==='Tie') score.tie++;
    

    document.querySelector('.js-result').innerHTML = `It's ${result}`;
    document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${user_move}.png" alt="" class="move-icon">
        <img src="images/${computer_move}.png" alt="" class="move-icon">
        Computer`;

    update_score();
    localStorage.setItem('score', JSON.stringify(score));
}

let isAutoPlaying = false;
let intervalId;

function autoplay(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            gameplay(move_generate());
        }, 1000); 

        isAutoPlaying=true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
}


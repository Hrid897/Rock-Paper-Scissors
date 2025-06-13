let score = {
    win: 0, lose: 0, tie: 0
}
let result = '';

update_score();

function gameplay(user_move){
    const random_num = Math.random();
    let computer_move = '';
    if(0<=random_num && random_num<1/3) computer_move = 'rock';
    else if(1/3<=random_num && random_num<2/3) computer_move = 'paper';
    else computer_move = 'scissors';

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


    if(JSON.parse(localStorage.getItem('score')) !==null){
        score = JSON.parse(localStorage.getItem('score'));
    }

    if(result==='Win') score.win++;
    else if(result==='Lose') score.lose++;
    else if(result==='Tie') score.tie++;
    

    document.querySelector('.js-result').innerHTML = `It's ${result}`;
    document.querySelector('.js-moves').innerHTML = `You ${user_move} - ${computer_move} Computer`;

    update_score();
    localStorage.setItem('score', JSON.stringify(score));
}


function update_score(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}




// console.log(score);




let arr = ['-','-','-','-','-','-','-','-','-'];
let joinedArr = arr.join('');
let playerOrder = document.getElementById('players');
let i = 0;


const player = (order, name, sign,winCondition) => {
    return { order, name, sign, winCondition };
};


// if (xxx --- ---) or (--- xxx ---) or (--- --- xxx) 
// or (x-- -x- --x) or (--x -x- x--)
// or (x-- x-- x--) or (-x- -x- -x-) or (--x --x --x)
const answer1 = prompt('Player one, whats your name?');
const answer2 = prompt('Player two, whats your name?');
const playerOne = player(1, answer1, 'x', /xxx.{6}|.{3}xxx.{3}|.{6}xxx|x.{3}x.{3}x|.{2}x.x.x.{2}|x.{2}x.{2}x.{2}|.x.{2}x.{2}x.|.{2}x.{2}x.{2}x/);
const playerTwo = player(2, answer2, 'o', /ooo.{6}|.{3}ooo.{3}|.{6}ooo|o.{3}o.{3}o|.{2}o.o.o.{2}|o.{2}o.{2}o.{2}|.o.{2}o.{2}o.|.{2}o.{2}o.{2}o/);


const gameBoard = (() => {
    const placeSign = (event) => {
    if(i < 9) {
        if(i%2 === 0 ){
            if(event.currentTarget.innerHTML != 'o' && event.currentTarget.innerHTML != 'x'){
                event.currentTarget.innerHTML = playerOne.sign;
                if( event.currentTarget.classList.contains('a0') === true){
                    arr.splice(0, 1, playerOne.sign);
                } else if( event.currentTarget.classList.contains('a1') === true){
                    arr.splice(1, 1, playerOne.sign);
                } else if( event.currentTarget.classList.contains('a2') === true){
                    arr.splice(2, 1, playerOne.sign);
                } else if( event.currentTarget.classList.contains('a3') === true){
                    arr.splice(3, 1, playerOne.sign);
                } else if( event.currentTarget.classList.contains('a4') === true){
                    arr.splice(4, 1, playerOne.sign);
                } else if( event.currentTarget.classList.contains('a5') === true){
                    arr.splice(5, 1, playerOne.sign);
                } else if( event.currentTarget.classList.contains('a6') === true){
                    arr.splice(6, 1, playerOne.sign);
                } else if( event.currentTarget.classList.contains('a7') === true){
                    arr.splice(7, 1, playerOne.sign);
                } else if( event.currentTarget.classList.contains('a8') === true){
                    arr.splice(8, 1, playerOne.sign);
                }
                playerOrder.innerHTML = playerTwo.name + ' — ' + playerTwo.sign;
                ++i;
            }
            
        } else {
            if(event.currentTarget.innerHTML != 'x' && event.currentTarget.innerHTML != 'o'){
                event.currentTarget.innerHTML = playerTwo.sign;
                if( event.currentTarget.classList.contains('a0') === true){
                    arr.splice(0, 1, playerTwo.sign);
                } else if( event.currentTarget.classList.contains('a1') === true){
                    arr.splice(1, 1, playerTwo.sign);
                } else if( event.currentTarget.classList.contains('a2') === true){
                    arr.splice(2, 1, playerTwo.sign);
                } else if( event.currentTarget.classList.contains('a3') === true){
                    arr.splice(3, 1, playerTwo.sign);
                } else if( event.currentTarget.classList.contains('a4') === true){
                    arr.splice(4, 1, playerTwo.sign);
                } else if( event.currentTarget.classList.contains('a5') === true){
                    arr.splice(5, 1, playerTwo.sign);
                } else if( event.currentTarget.classList.contains('a6') === true){
                    arr.splice(6, 1, playerTwo.sign);
                } else if( event.currentTarget.classList.contains('a7') === true){
                    arr.splice(7, 1, playerTwo.sign);
                } else if( event.currentTarget.classList.contains('a8') === true){
                    arr.splice(8, 1, playerTwo.sign);
                }
                playerOrder.innerHTML = playerOne.name + ' — ' + playerOne.sign;
                ++i;
            }
        }
    } 
    joinedArr = arr.join('');

    if(playerOne.winCondition.test(joinedArr) === true){
        playerOrder.innerHTML = playerOne.name + " wins!!!";
        $('.box-overlap').show();
    } else if(playerTwo.winCondition.test(joinedArr) === true) {
        playerOrder.innerHTML = playerTwo.name + " wins!!!";
        $('.box-overlap').show();
    } else if(i === 9){
        playerOrder.innerHTML = " DRAW!!!";
        $('.box-overlap').show();
    }
    console.log(arr)
    console.log(i);
    
    };
    const reset = () => {
        for( let k = 0; k < cell.length; k++){
            cell[k].innerHTML = '';
            i = 0;
            arr = ['-','-','-','-','-','-','-','-','-'];
            playerOrder.innerHTML = playerOne.name + ' ' + playerOne.sign;
            $('.box-overlap').hide();
        }
    }
    return {placeSign, reset};
})();



let cell = $('.column');
for( let j = 0; j < cell.length; j++){
    cell[j].addEventListener('click', gameBoard.placeSign);
}
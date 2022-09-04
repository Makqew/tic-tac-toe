let arr = ['-','-','-','-','-','-','-','-','-'];
let joinedArr = arr.join('');
let playerOrder = document.getElementById('players');
console.log(playerOrder)
const player = (order, name, sign) => {
    return { order, name, sign };
};
let i = 0;

const playerOne = player(1, 'Player 1', 'x');
const playerTwo = player(2, 'Player 2', 'o');
// console.log(playerOne.name);

// if (xxx --- ---) or (--- xxx ---) or (--- --- xxx) 
// or (x-- -x- --x) or (--x -x- x--)
// or (x-- x-- x--) or (-x- -x- -x-) or (--x --x --x)
let winOne = /xxx.{6}|.{3}xxx.{3}|.{6}xxx|x.{3}x.{3}x|.{2}x.x.x.{2}|x.{2}x.{2}x.{2}|.x.{2}x.{2}x.|.{2}x.{2}x.{2}x/;
let winTwo = /ooo.{6}|.{3}ooo.{3}|.{6}ooo|o.{3}o.{3}o|.{2}o.o.o.{2}|o.{2}o.{2}o.{2}|.o.{2}o.{2}o.|.{2}o.{2}o.{2}o/;
console.log(winOne.test(joinedArr));

// every odd number player1 makes a move
function placeSign(event) {
    
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
                playerOrder.innerHTML = playerTwo.name + ' ' + playerTwo.sign;
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
                playerOrder.innerHTML = playerOne.name + ' ' + playerOne.sign;
                ++i;
            }
        }
    } 
    joinedArr = arr.join('');

    if(winOne.test(joinedArr) === true){
        alert('player1 wins');
        $('button').show();
    } else if(winTwo.test(joinedArr) === true) {
        alert('player2 wins');
        $('button').show();
    } else if(i === 9){
        alert('draw');
        $('button').show();
    }
    console.log(arr)
    console.log(i);
    
}



let cell = $('.column');
for( let j = 0; j < cell.length; j++){
    cell[j].addEventListener('click', placeSign);
}


function reset() {
    for( let k = 0; k < cell.length; k++){
        cell[k].innerHTML = '';
        i = 0;
        arr = ['-','-','-','-','-','-','-','-','-'];
        playerOrder.innerHTML = playerOne.name + ' ' + playerOne.sign;
        $('button').hide();
    }
}
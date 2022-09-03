let arr = ['-','-','-','-','-','-','-','-','-','-','-','-'];
const player = (order, name, sign) => {
    return { order, name, sign };
};
let i = 0;

let nameList = $('.columns');
const playerOne = player(1, 'Player 1', 'x');
const playerTwo = player(2, 'Player 2', 'o');
console.log(playerOne.name);

// if (xxx --- ---) or (--- xxx ---) or (--- --- xxx) 
// or (x-- -x- --x) or (--x -x- x--)
// or (x-- x-- x--) or (-x- -x- -x-) or (--x --x --x)
// every odd number player1 makes a move
function placeSign(event) {
    
    if(i != 9){
        if(i%2 == 0 ){
            if(event.currentTarget.innerHTML != 'o' && event.currentTarget.innerHTML != 'x'){
                event.currentTarget.innerHTML = playerOne.sign;
                arr.splice(i, 1, playerOne.sign);
                i++;
            }
            
        } else {
            if(event.currentTarget.innerHTML != 'x' && event.currentTarget.innerHTML != 'o'){
                event.currentTarget.innerHTML = playerTwo.sign;
                arr.splice(i, 1, playerTwo.sign);
                i++;
            }
    }
        console.log(i);
        }
    else {
        alert('bruh')
    }
    console.log(arr)
    
}

let cell = $('.column');
for( let i = 0; i < cell.length; i++){
    cell[i].addEventListener('click', placeSign);
}

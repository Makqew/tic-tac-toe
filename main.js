let arr = [];
const player = (order, name) => {
    return { order, name };
};

const playerOne = player(1, 'Player 1');
const playerTwo = player(2, 'Player 2');
console.log(playerOne.name)
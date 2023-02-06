const gameBoard = document.getElementById('gameBoard');

const row = 14 ;
const col = 20 ;

const boardArray = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,3,3,0]
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,1]
    [1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,3,0,0,1]
    [4,1,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,1,1]
    [2,2,1,2,2,2,1,1,2,1,1,1,1,1,3,0,3,1,1,2]
    [5,2,1,2,5,2,2,2,0,2,2,2,1,2,2,0,0,2,2,2]
    [5,2,2,2,5,5,5,0,0,0,0,0,0,0,0,2,2,0,0,0]
    [5,5,5,4,4,5,5,5,5,5,5,5,5,5,4,5,5,5,4,4]
    [5,5,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,4,4]
]

function drawWorld() {
    for(let i=0; i<row ;i++){
        for(let j=0; j<col ; j++){
            const block =document.createElement('div')
            block.setAttribute('data-row',`${i}`)
            block.setAttribute('data-col',`${j}`)
        
            block.classList.add('sky')
            gameBoard.appendChild(block)
  
                switch (boardArray[i][j]) {
                    case 1:
                        return "snow";
                    case 2:
                        return "snowyGrass";
                    case 3:
                        return "cactus";
                    case 4:
                        return "stone";
                    case 5:
                        return "dirt";

                }    
}
}
}
drawWorld();

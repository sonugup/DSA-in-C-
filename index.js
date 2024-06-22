var board = [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]]
            
var count = 0;
let s = [];

nQueens(board,0,4,s);
console.log(s)
console.log(count);
function printBoard(board,s){
    for (let i = 0;i<board.length;i++){
        console.log(board[i].join(" "));
    }
    console.log("-------------");
}
function nQueens(board,row,N,s){
    if (row == N){
        count++;
        printBoard(board,s);
        s.push(board.map(r => r.map(c => (c === 1 ? 'Q' : '.')).join('')));

        return;
    }
    for(let i = 0;i<N;i++){
        if (checkSafePosition(board,row,i) === true){
            board[row][i] = 1;
            nQueens(board,row+1,N,s);
            board[row][i] = 0;
        }
    }
}




function checkSafePosition(board,row,col){
    // vertically upwards
    for (let i = row-1;i>=0;i--){
        if (board[i][col] == 1) return false;
    }
    
    //diagonal up right
    for (let i = row-1,j = col+1;i>=0 && j < board.length;i--,j++){
        if (board[i][j] == 1) return false;
    }
    // diagonal up left
    for (let i = row-1,j = col-1;i>=0 && j >= 0;i--,j--){
        if (board[i][j] == 1) return false;
    }
    return true;

    // console.log(s)
}
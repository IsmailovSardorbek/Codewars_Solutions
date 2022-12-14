const validSolution = (board) => {
  let c0 = 0,
    c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0,
    c5 = 0,
    c6 = 0,
    c7 = 0,
    c8 = 0,
    c9 = 0;
  for (let i = 0; i < board.length; i++) {
    c0 += board[i][0];
    c1 += board[i][1];
    c2 += board[i][2];
    c3 += board[i][3];
    c4 += board[i][4];
    c5 += board[i][5];
    c6 += board[i][6];
    c7 += board[i][7];
    c8 += board[i][8];
  }
  return (
    c0 === 45 &&
    c1 === 45 &&
    c2 === 45 &&
    c3 === 45 &&
    c4 === 45 &&
    c5 === 45 &&
    c6 === 45 &&
    c7 === 45 &&
    c8 === 45 &&
    board[8][7] != board[7][8]
  );
};

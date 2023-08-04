import Phaser from 'phaser';
import React,{useEffect,useRef} from 'react';

function Game(){
  const gameRef=useRef(null);

  useEffect(()=>{
    const config={
      type: Phaser.AUTO,
      width: 700,
      height: 600,
      scene: {
        create,
        preload,
      }
    }
    function preload(){
      this.load.image('pawnW','https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
      this.load.image('rookW','https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png');
      this.load.image('bishopW','https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png');
      this.load.image('queenW','https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png');
      this.load.image('kingW','https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png');
      this.load.image('knightW','https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png');

      this.load.image('pawnB','https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
      this.load.image('rookB','https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png');
      this.load.image('bishopB','https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png');
      this.load.image('queenB','https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png');
      this.load.image('kingB','https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png');
      this.load.image('knightB','https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png');

    }
    
    function getPieceImageKey(symbol)
    {
      switch(symbol)
      {
        case 'P':
        return 'pawnB';
        case 'R':
          return 'rookB';
        case 'B':
          return 'bishopB';
        case 'Q':
          return 'queenB';
        case 'K':
          return 'kingB';
        case 'N':
          return 'knightB';
        
        case 'p':
        return 'pawnW';
        case 'r':
          return 'rookW';
        case 'b':
          return 'bishopW';
        case 'q':
          return 'queenW';
        case 'k':
          return 'kingW';
        case 'n':
          return 'knightW';

        default:
          return null;
      }
    }
    function isValidMove(startX,startY,dropX,dropY,piece)
    {
      const deltaX=Math.abs(dropX-startX);
      const deltaY=Math.abs(dropY-startY);
      var pawnFlag=0;

      switch(piece)
      {
        case 'pawnW' || 'pawnB':
          {
              if(deltaY===1 && deltaX===0 && pawnFlag===1 )
              {
                return true;
              }
              else if(deltaY===2 && deltaX===0 && pawnFlag===0)
              {
                pawnFlag=1;
                return true;
              }
              else if(deltaX===1 && deltaY===1)
              {
                return true;
              }
              else
              {
                return false;
              }
          }
        case 'rookW' || 'rookB':
          {
             if(startX===dropX || startY===dropY)
             {
              return true;
             }
             else
             {
              return false;
             }
          }
        case 'bishopW' || 'bishopB':
          {
            if(Math.floor(Math.abs(deltaX-deltaY))===0)
            {
              return true;
            }
            else
            {
              return false;
            }
          }
        case 'knightW' || 'knightB':
          {
            if((deltaX===1 && deltaY===2) || (deltaX===2 && deltaY===1))
            {
              return true;
            }
            else
            {
              return false;
            }
          }
        case 'queenW' || 'queenB':
          {
            if(startX===dropX || startY===dropY || Math.floor(Math.abs(deltaX-deltaY))===0)
            {
              return true;
            }
            else
            {
              return false;
            }
          }
        case 'kingW' || 'kingB':
          {
            if((startX===dropX || startY===dropY || Math.floor(Math.abs(deltaX-deltaY))===0) && (Math.abs(startX-dropX)===1 || Math.abs(startY-dropY)===1))
            {
              return true;
            }
            else
            {
              return false;
            }
          }
        default:
          return false;
      }
    }

  function create(){
      
    var   board = [    ["R", "N", "B", "Q", "K", "B", "N", "R"],
                       ["P", "P", "P", "P", "P", "P", "P", "P"],
                       [null, null, null, null, null, null, null, null],
                       [null, null, null, null, null, null, null, null],
                       [null, null, null, null, null, null, null, null],
                       [null, null, null, null, null, null, null, null],
                       ["p", "p", "p", "p", "p", "p", "p", "p"],
                       ["r", "n", "b", "q", "k", "b", "n", "r"],
                  ];
      function updateBoard(startX,startY,dropX,dropY){
        const startCol=Math.floor(startX/64);
        const startRow=Math.floor(startY/64);
        const dropCol=Math.floor(dropX/64);
        const dropRow=Math.floor(dropY/64);
  
        const piece=board[startRow][startCol];
        board[startRow][startCol]=null;
        board[dropRow][dropCol]=piece;
        console.log(startRow,startCol,dropRow,dropCol);
      }
      const boardGroup=this.add.group();
      const squareSize = 64; // Set the size of each square
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
      const x = col * squareSize+100;
      const y = row * squareSize+100;
      const squareColor = (row + col) % 2 === 0 ? 0xffffff : 0x808080;
      const square = this.add.rectangle(x, y, squareSize, squareSize, squareColor);
      boardGroup.add(square);
      }
      }
      for(let row=0;row<8;row++)
      {
        for(let col=0;col<8;col++)
        {
          const piece=board[row][col];
          if(piece!==null)
          {
            const x=col*squareSize+squareSize/2+68;
            const y=row*squareSize+squareSize/2+68;
            const pieceImage=getPieceImageKey(piece);
            const pieceSprite=this.add.sprite(x,y,pieceImage);
            pieceSprite.setInteractive();
            // pieceSprite.setOrigin(0.5);
            // console.log(pieceSprite);
            function calculatePossibleMoves(chessPiece)
            {
              const piece=chessPiece.texture.key;
              
              switch(piece)
              {
                case 'pawnW' || 'pawnB':
                  return calculatePawnMoves(chessPiece);
                case 'rookW' || 'rookB':
                  return calculateRookMoves(chessPiece);
                case 'knightW' || 'knightB':
                  return calculateKnightMoves(chessPiece);
                case 'bishipW' || 'bishopB':
                  return calculateBishopMoves(chessPiece);
                case 'queenW' || 'queenB':
                  return calculateQueenMoves(chessPiece);
                case 'kingW' || 'kingB':
                  return calculateKingMoves(chessPiece);
                default:
                  return [];
              }
            }

            function calculatePawnMoves(chessPiece) {
              const color=(chessPiece.texture.key==='pawnW'?'white':'black')
              chessPiece.color=color;
              const x=chessPiece.x;
              const y=chessPiece.y;
              const possibleMoves=[];
              const direction=chessPiece.color==='white'?1:-1;
              if(isValidMove(x,y,x,y+2*direction,chessPiece.texture.key))
              {
                possibleMoves.push({x:x,y:y+2*direction});
              }
              else if(isValidMove(x,y,x,y+direction,chessPiece.texture.key))
              {
                possibleMoves.push({x:x,y:y+direction});
              }
              else if(isValidMove(x,y,x-1,y+direction,chessPiece.texture.key))
              {
                possibleMoves.push({x:x-1,y:y+direction});
              }
              else if(isValidMove(x,y,x+1,y+direction,chessPiece.texture.key))
              {
                possibleMoves.push({x:x+1,y:y+direction});
              }
              return possibleMoves;
            }
            
            function calculateRookMoves(chessPiece) {
              // Implementation for rook movement rules
              // Return an array of valid positions for the rook
            }
            
            function calculateBishopMoves(chessPiece) {
              // Implementation for bishop movement rules
              // Return an array of valid positions for the bishop
            }
            
            function calculateKnightMoves(chessPiece) {
              // Implementation for knight movement rules
              // Return an array of valid positions for the knight
            }
            
            function calculateQueenMoves(chessPiece) {
              // Implementation for queen movement rules
              // Return an array of valid positions for the queen
            }
            
            function calculateKingMoves(chessPiece) {
              // Implementation for king movement rules
              // Return an array of valid positions for the king
            }

            pieceSprite.on('pointerdown',function(pointer){
              pieceSprite.startX=pieceSprite.x;
              pieceSprite.startY=pieceSprite.y;
              const possibleMoves=calculatePossibleMoves(pieceSprite);
              const moveMarker=[];
              possibleMoves.forEach((position) => {
                const marker=this.add.rectangle(position.x,position.y,4,0x808080);
                marker.setInteractive();
                console.log(position);
                moveMarker.push(marker);
              });
              moveMarker.forEach((marker)=>{
                marker.on('pointerup',function(){
                  pieceSprite.x=marker.x;
                  pieceSprite.y=marker.y;

                  moveMarker.forEach(m=>{
                    m.destroy();
                  });
                });
              });
            });
            // pieceSprite.on('pointermove',function(pointer){
            //   if(pointer.isDown)
            //   {
            //     pieceSprite.x=pointer.x;
            //     pieceSprite.y=pointer.y;
            //     // console.log(pointer.x);
            //   }
            // });
            
            // pieceSprite.on('pointerup',function(pointer){
            //   const dropPosition=pointer;
            //   // if(isValidMove(pieceSprite.startX,pieceSprite.startY,dropPosition.x,dropPosition.y,pieceImage))
            //   // {
                
            //     updateBoard(pieceSprite.startX,pieceSprite.startY,dropPosition.x,dropPosition.y);
            //   // }
            //   // else
            //   // {

            //   //   console.log(pieceImage);
            //   //   pieceSprite.x=pieceSprite.startX;
            //   //   pieceSprite.y=pieceSprite.startY;
            //   // }
            // });     
          }
        }
      }
  }
  
  const game = new Phaser.Game(config);
  gameRef.current=game;
  return()=>{
    game.destroy();
    game.canvas.width=0;
  }
  },[]);

  return <div ref={gameRef}/>;
 
}
export default Game;




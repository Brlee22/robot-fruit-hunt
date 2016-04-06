var moving_east = false;
var moving_south = false;
function new_game() {
}

function make_move() {
   var board = get_board();

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0) {
       return TAKE;
   }

   // var rand = Math.random() * 4;

   // if (rand < 1) return NORTH;
   // if (rand < 2) return SOUTH;
   // if (rand < 3) return EAST;
   // if (rand < 4) return WEST;
    if(get_my_x() === 0){
   moving_east = true;
    }
    if(get_my_x() === WIDTH - 1){
   moving_east = false;
    }

      if(get_my_y() === 0){
   moving_south = true;
    }
    if(get_my_y() === HEIGHT - 1){
   moving_south = false;
    }



    // move the bot
    if(moving_east === true){
   return EAST;
    }
    else{
   return WEST;
    }

    if(moving_south === true){
   return SOUTH;
    }
    else{
   return NORTH;
    }


   return PASS;
}

// function new_game() {
// }

// function make_move() {
//    var board = get_board();
//    var tempd = Math.sqrt( (get_my_x-fruitX)*(get_my_x-fruitX) + (get_my_y-fruitY)*(get_my_y-fruitY) ) ;
//    var fruitX = 100;
//    var fruitY = 100;
//    // we found an item! take it!

//    if (board[get_my_x()][get_my_y()] > 0) {
//        return TAKE;
//    }

//    // var rand = Math.random() * 4;

//    // if (rand < 1) return NORTH;
//    // if (rand < 2) return SOUTH;
//    // if (rand < 3) return EAST;
//    // if (rand < 4) return WEST;
//    if(board[get_my_x()][get_my_y+1]>0){
//       return DOWN;
//    }

//    else if(board[get_my_x()][get_my_y-1]>0){
//       return UP;
//    }

//    else if(board[get_my_x()+1][get_my_y]>0){
//       return RIGHT;
//    }

//    else if(board[get_my_x()-1][get_my_y]>0){
//       return LEFT;
//    }

//    else if(board[get_my_x()+1][get_my_y+1]>0){
//       return DOWN;
//    }

//    else if(board[get_my_x()-1][get_my_y+1]>0){
//       return DOWN;
//    }

//    else if(board[get_my_x()+1][get_my_y-1]>0){
//       return UP;
//    }

//    else if(board[get_my_x()-1][get_my_y-1]>0){
//       return UP;
//    }
//    else{
//       for(var q = 0; q < WIDTH; q++){
//          for(var w = 0; w < HEIGHT; w++){
//             if(board[q][w]>0){
//                if(Math.sqrt( (get_my_x-q)*(get_my_x-q) + (get_my_y-w)*(get_my_y-w) ) < tempd){
//                   tempd = Math.sqrt( (get_my_x-q)*(get_my_x-q) + (get_my_y-w)*(get_my_y-w) ) ;
//                   fruitX = q;
//                   fruitY = w;
//                }
//             }
//          }
//       }
      
//       if(get_my_x < fruitX){
//          return RIGHT; 
//       }
//       else if(get_my_x > fruitX){
//          return LEFT;
//       }
//       else if(get_my_y > fruitY){
//          return UP;
//       }
//       else if(get_my_y < fruitY){
//          return DOWN;
//       }
//    }

//    return PASS;
// }

// // Optionally include this function if you'd like to always reset to a 
// // certain board number/layout. This is useful for repeatedly testing your
// // bot(s) against known positions.
// //
// //function default_board_number() {
// //    return 123;
// //}

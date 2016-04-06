var moving_east = false;

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

    // move the bot
    if(moving_east === true){
	return EAST
    }
    else{
	return WEST
    }

   return PASS;
}

// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//    return 123;
//}

function new_game() {

}

function make_move()
{
   var board = get_board();
   var list = [];
 // for (var i=board[get_my_x()]; i<1; i++)
   // we found a0n item! take it!
   if (board[get_my_x()][get_my_y()] > 0) 
   {
       return TAKE;
   }
   //console.log(board);
   for (var i=1; i<6; i++)
   {
      get_total_item_count(i);
      list.push(get_total_item_count(i));
      //console.log("id is ", i, get_total_item_count(i));
      //console.log("hello");
   }

   
   var rand = Math.random() * 4;

   if (rand < 1) return NORTH;
   if (rand < 2) return SOUTH;
   if (rand < 3) return EAST;
   if (rand < 4) return WEST;

   return PASS;
}

// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//    return 123;
//}

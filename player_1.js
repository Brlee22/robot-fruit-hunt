
var num;

var totalfruits = [],
    myfruits = [],
    hisfruits = [],
    remainfruits = [], 
    deadfruits = []; 

// board specifying weights
var heatmap;

function new_game() {
  num = get_number_of_item_types();
  for (var i = 1; i <= num; i++)
    totalfruits[i] = get_total_item_count(i);
}

function make_move() {
  // initialize heatmap
  heatmap = [];
  for (var i = 0; i < WIDTH; i++) {
    for (var j = 0; j < HEIGHT; j++) {
      if (typeof heatmap[i] == 'undefined') { heatmap[i] = []; }
      heatmap[i][j] = 0;
    }
  }

  var board = get_board(),
      x = get_my_x(),
      y = get_my_y();

  // get current fruit counts
  for (var i = 1; i <= num; i++) {
    myfruits[i] = get_my_item_count(i);
    hisfruits[i] = get_opponent_item_count(i);
    remainfruits[i] = totalfruits[i] - myfruits[i] - hisfruits[i];
    deadfruits[i] = myfruits[i] > totalfruits[i] / 2 || hisfruits[i] > totalfruits[i] / 2 ? 1 : 0;
  }

  for (var i = 0; i < WIDTH; i++) {
    for (var j = 0; j < HEIGHT; j++) {
       // if there is a fruit on this field and it is not 'dead', add
       // to heat map
       if (board[i][j] > 0 && !deadfruits[board[i][j]]) {
         add_heat([i, j]);
       }
    }
  }

  // Compare N, S, E, W and T (take). Choose highest value
  var n, s, e, w, t, max;
  n = get_my_y() > 0 ? heatmap[x][y-1] : -1;
  s = get_my_y() < (HEIGHT-1) ? heatmap[x][y+1] : -1;
  e = get_my_x() < (WIDTH-1) ? heatmap[x+1][y] : -1;
  w = get_my_x() > 0 ? heatmap[x-1][y] : -1;
  t = heatmap[x][y];

  max = Math.max(n, s, e, w, t);
  if (t == max && has_item(board[x][y])) return TAKE;
  else if (t == max) max = Math.max(n, s, e, w);
  if (n == max) return NORTH;
  if (s == max) return SOUTH;
  if (e == max) return EAST;
  if (w == max) return WEST;
  return PASS;
}

// Parameters
var c1 = 1.6, 
    c2 = 1.5, 
    c3 = 1.2, 
    c4 = 3;  // determines how important picking up a fruit at this spot is

function add_heat(field) {
  var board = get_board();
  var fruit = board[field[0]][field[1]];

  // Use parameters to generate multipliers for fruits importance weights
  var mult = Math.pow(totalfruits[fruit], -c1);
  var clinch = Math.pow(totalfruits[fruit] / remainfruits[fruit], c2);
  var para = mult * clinch;

  for (var i = 0; i < WIDTH; i++) {
    for (var j = 0; j < HEIGHT; j++) {
      var dist = distance(field, [i, j]);
      if (dist == 0)
        heatmap[i][j] += c4 * para;
      else
        heatmap[i][j] += Math.pow(distance(field, [i, j]), -c3) * para;
    }
  }
}

// Distance between two points (in turns)
function distance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

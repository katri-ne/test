function addEffect1(){

	for(var i = 0; i < 8; i ++) {
		var div = $('<div/>').addClass("row");
		for( var j = 0; j < 8; j ++) {
			var cell = $('<div/>').addClass('cell');
			var colorClass = ((i + j) % 2) ? 'white' : 'black'; 
			cell.addClass(colorClass);
			div.append(cell);
		}
		$('#js_table').append(div);
	}

}
function addEffect2(){
  $("#kv2:hidden").slideDown("slow");
}
function addEffect3(){
  $("#kv3:hidden").show().animate( {
                fontSize:"36px"
                } , 3000 );
}
 
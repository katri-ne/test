$( document ).ready(function() {

	$('button#checkers').on('click', function(e) {
		Checkers();
	});

	$('button#clear').on('click', function(e) {
		ClearBoard();
	});

	$('#board').on('click', '.cell', function(e) {
		Move(e.target);
	});

	$('button#emulateMove').on('click', function(e) {
		var cell = $('#board').find('[row="5"][col="4"]');
		cell.click();
	});
});


$(document).on('click', 'button#chess', function(e) {
	ChessIndexed();
});


function Move(target) {
	var sourceCell = $(target);
	if (sourceCell.hasClass('black') && (sourceCell.hasClass('dark_checker') || sourceCell.hasClass('light_checker'))) {
		var row = sourceCell.attr('row');
		var col = sourceCell.attr('col');
		console.log('row: ' + row + ' col: ' + col);

		// move dark checker
		if (sourceCell.hasClass('dark_checker')) {
			var target_row = parseInt(row) + 1;
			var target_col = parseInt(col) - 1;

			if (target_row > 7 || target_col < 0) 
				return;

			var targetCell = $('#board').find('[row="'+target_row+'"][col="'+target_col+'"]');
			if (!targetCell.hasClass('dark_checker') && !targetCell.hasClass('light_checker')) {
				sourceCell.removeClass('dark_checker');
				targetCell.addClass('dark_checker');
			}
		}

		// move light checker to upper left
		if (sourceCell.hasClass('light_checker')) {
			var target_row = parseInt(row) - 1;
			var target_col = parseInt(col) - 1;

			if (target_row < 0 || target_col < 0) 
				return;

			var targetCell = $('#board').find('[row="'+target_row+'"][col="'+target_col+'"]');
			if (!targetCell.hasClass('dark_checker') && !targetCell.hasClass('light_checker')) {
				sourceCell.removeClass('light_checker');
				targetCell.addClass('light_checker');
			}
		}
	}
}

function ChessIndexed(){
	$("#board").html('');
	for (var i=0; i<8; i++) {
		var row = $('<div/>').addClass("row");
		for (var j=0; j<8; j++) {
			var cell = $('<div/>').addClass('cell').addClass(((i + j) %2 == 0) ? 'white' : 'black');
			cell.attr('row', i);
			cell.attr('col',j);
			row.append(cell);
		}
		$("#board").append(row);

	}
}

function Chess(){
	$("#board").html('');
	for (var i=0; i<8; i++) {
		var row = $('<div/>').addClass("row");
		for (var j=0; j<8; j++) {
			var cell = $('<div/>').addClass('cell').addClass(((i + j) %2 == 0) ? 'white' : 'black');
			row.append(cell);
		}
		$("#board").append(row);

	}
}


function Checkers(){
	var rows = $('#board').find('.row');
	for (var i=0; i<8; i++) {
		var cells = $(rows[i]).find('.cell');
		for (var j=0; j<8; j++) {
			var cell = $(cells[j]);
			if (cell.hasClass('black')) {
				if (i < 3) {
					cell.addClass('dark_checker');
				}
				if (i > 4) {
					cell.addClass('light_checker');
				}	
			}
			
		}
	}
}


function Checkers1(){
	//var rows = $('#board').find('.row');
	for (var i=0; i<8; i++) {
		for (var j=0; j<8; j++) {
			if ($($($('#board').find('.row')[i]).find('div')[j]).hasClass('black') && (i < 3)) {
				$($($('#board').find('.row')[i]).find('div')[j]).addClass('dark_checker');
			}
			if ($($($('#board').find('.row')[i]).find('div')[j]).hasClass('black') && (i > 4)) {
				$($($('#board').find('.row')[i]).find('div')[j]).addClass('light_checker');
			}
		}
	}
}


function Checkers2(){
	$('#board .row .cell').filter('.black').slice(0,12).addClass('dark_checker');
	$('#board .row .cell').filter('.black').slice(20,32).addClass('light_checker');

}


function ClearBoard(){
	$('#board .black').removeClass('dark_checker light_checker');
}


function Checkers01(){
	$('.row .cell').filter('.black').slice(0,12).append('<img src="images/tem_shashka.gif">');
	$('.row .cell').filter('.black').slice(20,32).append('<img src="images/sv_shashka.gif">');

}


function ClearBoard01(){
	$('#board img').removeAttr('src')
}

function Chess01(){
	for (var i=0; i<8; i++) {
		var row = $('<div/>').addClass("row");
		for (var j=0; j<8; j++) {
			var cell = $('<div/>').addClass('cell');
			var color = ((i + j) %2 == 0) ? 'white' : 'black';
			cell.addClass(color);
			row.append(cell);
		}
		$("#board").append(row);

	}
}


function Chess0(){
	for (var i=0; i<8; i++) {
		var row = $('<div/>').addClass("row");
		for (var j=0; j<8; j++) {
			var cell = $('<div/>').addClass('cell');
			if ((i + j) %2 == 0) {
				cell.addClass('white');
			}
			else {
				cell.addClass('black');
			}
			row.append(cell);
		}
		$("#board").append(row);

	}
}

function Chess1(){
	for (var i=0; i<8; i++) {
		var row = $('<div class="row"></div>');
		for (var j=0; j<8; j++) {
			if ((i%2==0 && j%2==0)||(i%2!=0 && j%2!=0)) {
				row.append('<div class="cell white"></div>');
			}
			else row.append('<div class="cell black"></div>');
		}
		$("#board").append(row);

	}
}

function Chess2(){
	for (var i=0; i<8; i++) {
		$('#board').append('<div class="row"></div>');
		for (var j=0; j<8; j++) {
			if ((i%2==0 && j%2==0)||(i%2!=0 && j%2!=0)) {
				$($('.row')[i]).append('<div class="cell white"></div>');
			}
			else $($('.row')[i]).append('<div class="cell black"></div>');
		}

	}
}


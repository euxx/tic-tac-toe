
$(function() {

	display();
	render(3);
	$(".grid").click(play);

});

let count = 0;
function play() {
	const playerA = $(".player-a");
	const player = $(".player");
	const clickNow = $(this);
	if (clickNow.text() === "") {
		if (playerA.hasClass("play-now")) {
			clickNow.text("o");
			player.removeClass("play-now").eq(1).addClass("play-now");
		} else {
			clickNow.text("x");
			player.removeClass("play-now").eq(0).addClass("play-now")
		}
		count++;
		if (count === 9) {
			player.removeClass("play-now");
			if (finish()) {
				return;
			} else if (confirm("It's a tie...")) {
				playerA.addClass("play-now");
				$(".grid").empty();
			}
		} else if (count > 4) {
			finish();
		}
	}
}

function finish() {
	let pos = []
	pos.push([[0, 0], [1, 1], [2, 2]]);
	pos.push([[0, 2], [1, 1], [2, 0]]);

	let i = 0;
	for ( ; i < 3; i++) {
		pos.push([[i, 0], [i, 1], [i, 2]]);
		pos.push([[0, i], [1, i], [2, i]]);
	}

	i = 0;
	for ( ; i < 6; i++) {
		if(compare(pos[i])) {
			return true;
		}
	}
}

function compare([[m1, n1], [m2, n2], [m3, n3]]) {
	const row = $(".row");
	const player = $(".player");
	const a = row.eq(m1).find(".grid").eq(n1).text();
	const b = row.eq(m2).find(".grid").eq(n2).text();
	const c = row.eq(m3).find(".grid").eq(n3).text();
	if (a != "" && a === b && b === c) {
		player.removeClass("play-now");
		if (a === "o") {
			if(confirm("Congratulation! Player A win")) {
				window.location.reload();
			}
		} else if (a === "x") {
			if(confirm("Congratulation! Player B win")) {
				playerA.addClass("play-now");
				$(".grid").empty();
			}
		}
		return true;
	}
	return false;
}

function display() {
	const cont = $(".container")
	cont.append("<h4>Have Fun^</h4>");
	cont.append("<p class='player player-a play-now'><span class='its-you'>--</span><span>Player A: O</span></p>");
	cont.append("<p class='player player-b'><span class='its-you'>--</span><span>Player B: X</span></p>");

}

function render(gridNum) {
	$(".container").append("<div class='box'></div>");
	const box = $(".box");
	let i = 0;
	for ( ; i < gridNum; i++) {
		box.append("<div class='row'></div>");
	}
	const row = $(".row");
	i = 0;
	for ( ; i < gridNum; i++) {
		row.append("<div class='grid' /*tabindex='0'*/></div>");
	}
}

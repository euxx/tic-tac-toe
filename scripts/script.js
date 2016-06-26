
$(function() {

	display();
	render(3);
	$(".grid").click(play);

});

function play() {
	const playerA = $(".player-a");
	const player = $(".player");
	const grid = $(".grid");
	const clickNow = $(this);
	if (clickNow.html() === "") {
		if (playerA.hasClass("play-now")) {
			clickNow.html("o");
			player.removeClass("play-now").eq(1).addClass("play-now");
		} else {
			clickNow.html("x");
			player.removeClass("play-now").eq(0).addClass("play-now")
		}
	}
}

function display() {
	const cont = $(".container")
	cont.append("<h4>Have Fun^</h4>");
	cont.append("<p class='player player-a play-now'><span>Player A: O</span></p>");
	cont.append("<p class='player player-b'><span>Player B: X</span></p>");

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

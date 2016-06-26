
$(function() {

	display();
	render(3);

});

function display() {
	const cont = $(".container")
	cont.append("<h4>Have Fun^</h4>");
	cont.append("<p>Play A: o</p>");
	cont.append("<p>Play B: x</p>");

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

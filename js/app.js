$(document).ready(function(){
	//selects ryu container
	$('#ryu')
	//when mouse enters 
	//div#ryu, ryue goes into ready mode
	.on('mouseenter', function(){
		$(this).find('#ryu-still').hide();
		$(this).find('#ryu-ready').show();
	})
	//when mouse leaves
	//ryu goes into still mode
	//if ryu is in the middle of a throw (mouse depressed)
	//hadouken will still animate but ryu will go into still mode
	.on('mouseleave', function(){
		$(this).find('#ryu-still').show();
		$(this).find('#ryu-ready').hide();
		$(this).find('#ryu-throwing').hide();
	//when mouse is depressed
	//ryu goes from ready mode to throwing mode
	//hadouken throws; moves across screen; recalled
	}).on('mousedown', function(){
		playHadouken();
		$(this).find('#ryu-ready').hide();
		$(this).find('#ryu-throwing').show();
		$(this).closest('#dojo').find('#hadouken')
		.finish()
		.show()
		.animate({'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-212px');
			});

	})
	//when mouse is released
	//ryu returns to ready mode
	.on('mouseup', function(){
		$(this).find('#ryu-ready').show();
		$(this).find('#ryu-throwing').hide();
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

	// $('#ryu').mouseenter(function(){
	// 	$('#ryu-still').hide();
	// 	$('#ryu-ready').show();
	// }).mouseleave(function(){
	// 	$('#ryu-still').show();
	// 	$('#ryu-ready').hide();
	// });

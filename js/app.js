$(document).ready(function(){
	playStage();

	var $still = $('#ryu-still');
	var $ready = $('#ryu-ready');
	var $throwing = $('#ryu-throwing');
	var $cool = $('#ryu-cool'); 
	
	//selects ryu container
	$('#ryu')
	//when mouse enters 
	//div#ryu, ryue goes into ready mode
	.on('mouseenter', function(){
		$(this).find($still).hide();
		$(this).find($ready).show();
		$(this).find($cool).hide();
	})
	//when mouse leaves
	//ryu goes into still mode
	//if ryu is in the middle of a throw (mouse depressed)
	//hadouken will still animate but ryu will go into still mode
	.on('mouseleave', function() {
		$(this).find($still).show();
		$(this).find($ready).hide();
		$(this).find($throwing).hide();
		$(this).find($cool).hide();
	})
	//when mouse is depressed
	//ryu goes from ready mode to throwing mode
	//hadouken throws; moves across screen; recalled
	.on('mousedown', function(){
		playHadouken();
		$(this).find($ready).hide();
		$(this).find($throwing).show();
		$(this).find($cool).hide();
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
		$(this).find($ready).show();
		$(this).find($throwing).hide();
		$(this).find($cool).hide();
	});

	$('body').on('keydown', function(event){
		if (event.keyCode == 88) {
			$(this).find($cool).show();
			$(this).find($ready).hide();
			$(this).find($still).hide();
			$(this).find($throwing).hide();
		} 
	});
	
	$('body').on('keyup', function(event){
		if (event.keyCode == 88) {
			$(this).find($cool).hide();
			$(this).find($ready).show();
		}
	});
});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playStage () {
	$('#stage')[0].volume = 1;
	$('#stage')[0].load();
	$('#stage')[0].play();
}

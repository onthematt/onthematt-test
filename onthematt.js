var onthematt = []
onthematt[0] = "That's when you know you've found somebody special, when you can just shut the fuck up for a minute and comfortably enjoy the silence.";
onthematt[1] = "'scuse me while I kiss the sky.";
onthematt[2] = "this is test 2";
onthematt[3] = "this is test 3";
onthematt[4] = "this is test 4";
onthematt[5] = "this is test 5";

function onTheMatt() {
	var randomPost = Math.floor(Math.random()*(onthematt.length));
	document.getElementById('blogpost').innerHTML = onthematt[randomPost];
}

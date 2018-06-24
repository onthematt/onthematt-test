var blog = []
blog [0] = "this is test 0";
blog [1] = "this is test 1";
blog [2] = "this is test 2";

function blog () {
	var randomPost = Math.floor(Math.random()*(blog.length));
	document.getElementById('blogger').innerHTML = blog[randomPost];

}
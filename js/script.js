// click the title for a hello
document.getElementById("title").addEventListener("click", function () {
	alert("Welcome to New York!");
});

// each button changes the photo and the caption
document.getElementById("sunriseBtn").addEventListener("click", function () {
	document.getElementById("photo").src = "images/image1.jpg";
	document.getElementById("caption").innerHTML = "Started the day with sunrise at Brooklyn.";
});

document.getElementById("breakfastBtn").addEventListener("click", function () {
	document.getElementById("photo").src = "images/image2.jpg";
	document.getElementById("caption").innerHTML = "Took the subway to Bubby's for some breakfast.";
});

document.getElementById("ferryBtn").addEventListener("click", function () {
	document.getElementById("photo").src = "images/image3.jpg";
	document.getElementById("caption").innerHTML = "The Statue of Liberty was the next attraction on our list.";
});

document.getElementById("nightBtn").addEventListener("click", function () {
	document.getElementById("photo").src = "images/image4.jpg";
	document.getElementById("caption").innerHTML = "We ended off the night looking at the Empire State Building.";
});

// change the style of the frame
document.getElementById("darkBtn").addEventListener("click", function () {
	document.getElementById("card").style.backgroundColor = "black";
	document.getElementById("caption").style.color = "white";
	document.getElementById("caption").style.fontSize = "16px";
});

document.getElementById("lightBtn").addEventListener("click", function () {
	document.getElementById("card").style.backgroundColor = "pink";
	document.getElementById("caption").style.color = "black";
	document.getElementById("caption").style.fontSize = "20px";
});

// pop-up window
document.getElementById("postcardBtn").addEventListener("click", function () {
	window.open("popup.html", "", "width=400, height=300");
});

// confirm box, the answer shows up on the page
document.getElementById("likeBtn").addEventListener("click", function () {
	let c = confirm("Did you like the trip?");
	document.getElementById("result").innerHTML = c;
});

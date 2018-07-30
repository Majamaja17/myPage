// scroll btn

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

// slider1

$(function(){

	var carouselList = $("#carousel1 ul");

	function changeSlide1() {
		carouselList.animate(
			{
				marginTop: -500
			},
			{
				duration: 500, 
				queue: false,
				complete: moveFirstSlide1,
			});
	}

	function moveFirstSlide1() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({marginTop:0});
	}

	setInterval(changeSlide1, 3000);
});

// slider2

$(function(){

	var carouselList = $("#carousel2 ul");

	function changeSlide2() {
		carouselList.animate(
			{
				marginTop: 500
			},
			{
				duration: 500, 
				queue: false,
				complete: moveFirstSlide2,
			});
	}

	function moveFirstSlide2() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({marginTop:0});
	}

	setInterval(changeSlide2, 3000);
});

// slider3

$(function(){

	var carouselList = $("#carousel3 ul");

	function changeSlide3() {
		carouselList.animate(
			{
				marginTop: -500
			},
			{
				duration: 500, 
				queue: false,
				complete: moveFirstSlide3,
			});
	}

	function moveFirstSlide3() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({marginTop:0});
	}

	setInterval(changeSlide3, 3000);
});


//nav

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.style.float = "right";
    }
}
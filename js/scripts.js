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
		carouselList.animate({"marginLeft":-500}, 500, moveFirstSlide1);
	}

	function moveFirstSlide1() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});
	}

	setInterval(changeSlide1, 3000);
});

// slider2

$(function(){

	var carouselList = $("#carousel2 ul");

	function changeSlide2() {
		carouselList.animate({"marginTop":-500}, 500, moveFirstSlide2);
	}

	function moveFirstSlide2() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({marginTop:0});
	}

	setInterval(changeSlide2, 6000);
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
var sliderStart = 1;
var sliderNext = 2;
var count = $(".slider > img").length;

$(document).ready(function(){
	$(".slider #"+sliderStart).fadeIn(300);
	startSlider();
});

function startSlider(){
	loop = setInterval(function(){
		if(sliderNext > count){
			sliderNext = 1;
		}
		$(".slider img#"+sliderStart).fadeOut(500);
		$(".slider #"+sliderNext).fadeIn(500);
		
		sliderStart = sliderNext;
		sliderNext += 1;
	},3000);
}

function prev(){
	newSlide = sliderStart - 1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderStart + 1;
	showSlide(newSlide);
}

function stopLoop(looper){
	window.clearInterval(looper);
}

function one(){
	showSlide(1);
}

function two(){
	showSlide(2);
}

function three(){
	showSlide(3);
}

function four(){
	showSlide(4);
}

function showSlide(slide){
	stopLoop(loop);
	if(slide > count){
		slide = 1;
	}else if(slide < 1){
		slide = count;
	}
	$(".slider img#"+sliderStart).fadeOut(500);
	$(".slider #"+slide).fadeIn(500);
	sliderStart = slide;
	sliderNext = slide + 1;
	startSlider();
}
$(".slider > img").hover(
	function(){
		stopLoop(loop);
	},
	function(){
		startSlider();
	}
	);
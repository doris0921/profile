$(document).ready(function(){
	$("nav ul li").hover(
		function(){
			$(this).children("ul").slideDown(200);
		},function(){
			$(this).children("ul").slideUp(200);
		});
});


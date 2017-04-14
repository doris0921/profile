$(document).ready(function(){
	$("nav ul li").hover(
		function(){
			$(this).children("ul").slideDown(200);
		},function(){
			$(this).children("ul").slideUp(200);
		});
	
});

$(function(){
	$('#comics').click(function(){
		$('.ptravel').animate({
			right:'150px'
		});
	});
	var $silder = $('.ptravel'), 
		$li = $('ul li', $silder),
		arrowWidth = 48 * -1, 
		arrowOpacity = .3, 
		$arrows = $('<a href="#" class="prev"></a><a href="#" class="next"></a>').css('opacity', arrowOpacity),
		$prev = $arrows.filter('.prev'), 
		$next = $arrows.filter('.next'), 
		fadeSpeed = 400;
	$silder.append($arrows).hover(function(){
		var no = $li.filter('.selected').index();
		arrowAction(no > 0 ? 0 : arrowWidth, no < $li.length - 1 ? 0 : arrowWidth);
	}, function(){
		arrowAction(arrowWidth, arrowWidth);
	});
	$arrows.click(function(){
		var $selected = $li.filter('.selected'),
			no = $selected.index();
		no = this.className=='prev' ? no - 1 : no + 1;
		$li.eq(no).stop().fadeTo(fadeSpeed + 100, 1, function(){
			arrowAction(no > 0 ? 0 : arrowWidth, no < $li.length - 1 ? 0 : arrowWidth);
		}).addClass('selected').siblings().fadeTo(fadeSpeed, 0).removeClass('selected');
 
		return false;
	}).focus(function(){
		this.blur();
	});
	function arrowAction(l, r){
		$prev.stop().animate({ left: l });
		$next.stop().animate({ right: r });
	}
		$('#novels').click(function(){
		$('.ptravel').animate({
			right:'-500px'
		});
	});
		$('#volleyball').click(function(){
		$('.ptravel').animate({
			right:'-500px'
		});
	});
});

$(function(){
	$('#volleyball').click(function(){
		$('.ptravel2').animate({
			right:'150px'
		});
	});
	var $silder = $('.ptravel2'), 
		$li = $('ul li', $silder),
		arrowWidth = 48 * -1, 
		arrowOpacity = .3, 
		$arrows = $('<a href="#" class="prev"></a><a href="#" class="next"></a>').css('opacity', arrowOpacity),
		$prev = $arrows.filter('.prev'), 
		$next = $arrows.filter('.next'), 
		fadeSpeed = 400;
	$silder.append($arrows).hover(function(){
		var no = $li.filter('.selected').index();
		arrowAction(no > 0 ? 0 : arrowWidth, no < $li.length - 1 ? 0 : arrowWidth);
	}, function(){
		arrowAction(arrowWidth, arrowWidth);
	});
	$arrows.click(function(){
		var $selected = $li.filter('.selected'),
			no = $selected.index();
		no = this.className=='prev' ? no - 1 : no + 1;
		$li.eq(no).stop().fadeTo(fadeSpeed + 100, 1, function(){
			arrowAction(no > 0 ? 0 : arrowWidth, no < $li.length - 1 ? 0 : arrowWidth);
		}).addClass('selected').siblings().fadeTo(fadeSpeed, 0).removeClass('selected');
 
		return false;
	}).focus(function(){
		this.blur();
	});
	function arrowAction(l, r){
		$prev.stop().animate({ left: l });
		$next.stop().animate({ right: r });
	}
		$('#novels').click(function(){
		$('.ptravel2').animate({
			right:'-500px'
		});
	});
		$('#comics').click(function(){
		$('.ptravel2').animate({
			right:'-500px'
		});
	});
});

$(function(){
	$('#novels').click(function(){
		$('.ptravel3').animate({
			right:'150px'
		});
	});
	var $silder = $('.ptravel3'), 
		$li = $('ul li', $silder),
		arrowWidth = 48 * -1, 
		arrowOpacity = .3, 
		$arrows = $('<a href="#" class="prev"></a><a href="#" class="next"></a>').css('opacity', arrowOpacity),
		$prev = $arrows.filter('.prev'), 
		$next = $arrows.filter('.next'), 
		fadeSpeed = 400;
	$silder.append($arrows).hover(function(){
		var no = $li.filter('.selected').index();
		arrowAction(no > 0 ? 0 : arrowWidth, no < $li.length - 1 ? 0 : arrowWidth);
	}, function(){
		arrowAction(arrowWidth, arrowWidth);
	});
	$arrows.click(function(){
		var $selected = $li.filter('.selected'),
			no = $selected.index();
		no = this.className=='prev' ? no - 1 : no + 1;
		$li.eq(no).stop().fadeTo(fadeSpeed + 100, 1, function(){
			arrowAction(no > 0 ? 0 : arrowWidth, no < $li.length - 1 ? 0 : arrowWidth);
		}).addClass('selected').siblings().fadeTo(fadeSpeed, 0).removeClass('selected');
 
		return false;
	}).focus(function(){
		this.blur();
	});
	function arrowAction(l, r){
		$prev.stop().animate({ left: l });
		$next.stop().animate({ right: r });
	}
		$('#volleyball').click(function(){
		$('.ptravel3').animate({
			right:'-500px'
		});
	});
		$('#comics').click(function(){
		$('.ptravel3').animate({
			right:'-500px'
		});
	});
});
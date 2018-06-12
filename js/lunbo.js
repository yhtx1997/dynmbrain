/*轮播图*/
/*banner轮播图*/
function banner_lb() {
	var banner_li = $('.banner ul li');
	var x = 0;
	var banner_lb = setInterval(function() {

		banner_li.eq(x).attr({
			id: 'banner_lb'
		}).siblings().attr({
			id: ' '
		});
		if(x == 2) {
			x == 0;
		} else {
			x++;
		}

	}, 4000);
}
/*其他轮播*/
function consul_lb() {
	var consul_li = $('.consul_nav li');
	var consul_img = $('.consul_img li');

	consul_li.hover(function() {
		var x = $(this).index();
		consul_img.eq(x).attr({
				id: 'consul_li'
			})
			.siblings().attr({
				id: ' '
			});
		consul_li.children('span').removeClass('consul_span');
		consul_li.children('span').eq(x).addClass('consul_span');

	});
}

function profe_lb() {
	var profe_li = $('.profe_nav li');
	var profe_img = $('.profe_img li');

	profe_li.hover(function() {
		var x = $(this).index();
		profe_img.eq(x).attr({
				id: 'consul_li'
			})
			.siblings().attr({
				id: ' '
			});
		profe_li.children('span').removeClass('consul_span');
		profe_li.children('span').eq(x).addClass('consul_span');

	});
}

function nl_lb() {
	var nl_li = $('.nl_nav li');
	var nl_img = $('.nl_img li');

	nl_li.hover(function() {
		var x = $(this).index();
		nl_img.eq(x).attr({
				id: 'nl_li'
			})
			.siblings().attr({
				id: ' '
			});
	});
	nl_li.find('span').hover(
		function() {
			nl_li.find('span').css({
				transform: 'rotate(0)'
			});
			$(this).css({
				transform: 'rotate(45deg)'
			});
		}

	);
}

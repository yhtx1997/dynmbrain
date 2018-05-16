/******************导航******************/
function nav(){
	 var  nav = $('.nav li'),
					a1 = 500,
					a2 = 1030,
					a3 = 1650,
					a4= 3050,
					a5 = 3680,
					a6 = $(document).height()+100,
					index = null;
					console.log(a1,a2,a3,a4,a5,a6);
				nav.click(nav_click);
				function nav_click() {
					if(index!=$(this).index()){
						index = $(this).index();
						console.log(index);
						switch(index) {
							case 0:
								$('html, body').animate({
		            scrollTop: a1
		        }, 500);
								break;
							case 1:
							$('html, body').animate({
		            scrollTop: a2
		        }, 500);
								break;
							case 2:
							$('html, body').animate({
		            scrollTop: a3
		        }, 500);
								break;
							case 3:
							$('html, body').animate({
		            scrollTop: a4
		        }, 500);
								break;
							case 4:
							$('html, body').animate({
		            scrollTop: a5
		        }, 500);
								break;
							break;
							default:
								$('html, body').animate({
		            scrollTop:  a6
		        }, 500);
								break;
						}
					}
					
			}
}
/*consul_qifa*/
var consul_li = $('.consul_qifa li');
		consul_li.hover(
			function(){
				$(this).animate({left:'-10px'},400);
			},
			function(){
				$(this).animate({left:'0px'},400);
			}
		);
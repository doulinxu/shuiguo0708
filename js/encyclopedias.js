	//		banner初始化
		var mySwiper = new Swiper('.swiper-container-banner', {
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},
		});
		var swiper = new Swiper('.swiper-wrapper-experts', {
			slidesPerView: 'auto',
			spaceBetween: 8,
			freeMode: true,
		});
		$('.menuItem li').on('click', function(e, i) {
			if($(this).index() === 6) {
				return;
			}
			$('.menuItem .active').removeClass('active');
			$(this).addClass('active');
			$('.menuListContent ul .active').removeClass('active');
			console.log($('.menuListContent>ul>li').eq($(this).index()))
			$('.menuListContent>ul>li').eq($(this).index()).addClass('active');
		});
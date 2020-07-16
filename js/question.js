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
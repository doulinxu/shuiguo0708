//		banner初始化
		var mySwiper = new Swiper('.swiper-container-banner', {
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},
		});
		//		视频专题初始化

		var swiper = new Swiper('.swiper-wrapper-video', {
			slidesPerView: 'auto',
			spaceBetween: 8,
			freeMode: true,
		});
		/**
		 * Created by lixj on 2015/8/14.
		 *  js判断input输入框中是否有值，以此来判断是否隐藏默认提示信息 *  使用keyup事件
		 */
		$(function() {
			$('#q').on('keyup', function() {
				var len = document.getElementById('q').value;
				if(len == '') {
					$('#q_label').show();
					//          $('#q_i').show();
				} else {
					$('#q_label').hide();
					//          $('#q_i').hide();
				}
			});
		});

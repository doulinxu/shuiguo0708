//		banner初始化
var mySwiper = new Swiper('.swiper-container-adv', {
	loop: true, // 循环模式选项
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
	},
});
$('.questions .title ul li').on('click', function() {
	if ($(this).hasClass('active')) {
		return;
	}
	$(this).parent().find('.active').removeClass('active');
	$(this).addClass('active');
	$('.content ul').hide().eq($(this).index()).show();
});
$('.writeComment').on('click', function() {
	$('#modal').show();
	$('#modal textarea').focus()
});
$('#modal textarea').on('input', function() {
	console.log($(this))
	$($('#modal .title>span')).html($(this)[0].value.length + '/140');
}).on('compositionstart', function() {
	console.log('输入法，录入开始');
}).on('compositionend', function() {
	console.log('输入法，输入结束');
	$('#modal').hide();
});
$('#modal .mask').on('click', function() {
	$('#modal').hide();
});
$('.checkall').on('click', function() {
	$(this).hide();
	$(this).parents('.message').removeClass('mini');
});
$('#modal textarea').blur(function(e){
//点击go按钮或者搜索按钮查询
    $('#modal').hide();
});
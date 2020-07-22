/**
 * Created by lixj on 2015/8/14.
 *  js判断input输入框中是否有值，以此来判断是否隐藏默认提示信息 *  使用keyup事件
 */
$(function() {
	$('#q').on('keyup', function() {
		var len = document.getElementById('q').value;
		if(len == '') {
			$(this).parents('.searchInput').find('.delete').hide();
			$('#q_label').show();
			$('#searchMateContent').hide();

			//          $('#q_i').show();
		} else {
			//		有内容的情况,隐藏placeholder
			$('#q_label').hide();
			$('#searchMateContent').show();
			//          $('#q_i').hide();
			$(this).parents('.searchInput').find('.delete').show();
			//					toRed($('#q').val(),'searchMateContent')
		}
	});
	$('.searchInput').find('.delete').on('click', function() {
		console.log(13131);
		$('#q').val('');
		$(this).hide();
		$('#q_label').show();
		$('#searchMateContent').hide();

	});
});


$('.searchHistory .title>span').on('click',function(){
	if($(this).find('.up').hasClass('up')) {
		$(this).find('.up').removeClass('up')
		$('.historyContent').addClass('toggle');
	} else {
		$('.historyContent').removeClass('toggle'); 
		$(this).find('i').addClass('up');
	}
});
$('.searchHistory .optionDown').on('click',function(){
	$('.searchHistory .delete').show();
	$('.showDelete').hide();
	$('.historyContent').removeClass('showDeleteBtn');
});
$('.searchHistory .delete').on('click',function(){
	$(this).hide();
	$('.showDelete').show();
	$('.historyContent').addClass('showDeleteBtn'); 
	$('.historyContent').removeClass('toggle');
	$('.titleContent .down').addClass('up');
});
$('.historyContent .delete').on('click',function(){
	$(this).parents('li').remove();
});
$('.allDelete').on('click',function(){
	$('.historyContent').find('li').remove();
	
});

$('#menuList li').on('click',function(){
	if($(this).hasClass('active')){
		return;
	}else{
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');
		var name = $(this).data('name');
		if(name === 'all'){
			$('.reslut>div').show();
		}else{
			$('.reslut>div').hide();
			console.log('#'+name);
			$('.reslut').find('#'+name).show();
		}
	}
})

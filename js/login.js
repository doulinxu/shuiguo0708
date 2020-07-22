$('.getCode').on('click', function() {
	console.log($(this));
	if($(this).hasClass('disabled')) {
		return;
	}
	if($('#mobileNum').val() === '') {
		alert('请输入手机号码。');
		return;
	}
	if(!(/^1[3456789]\d{9}$/.test($('#mobileNum').val()))){ 
        alert("手机号码有误，请重填");  
        $('.mobilePhone').addClass('error');
        return; 
    } 
	$(this).addClass('disabled');
	var time = 60;
	var _this = this;
	var timer = function() {
		$(_this).html(time + '秒后可重新获取');
		time -= 1;
		console.log(time);
		if(time > 1) {
			window.setTimeout(() => {
				timer();
			}, 1000);
		} else {
			$(_this).html('获取验证码');
			$(_this).removeClass('disabled');
			window.clearTimeout(timer);
		}
	}
	//	在这里加ajax请求成功后调timer函数
	timer();
});
$('#mobileNum').on('input',function(){
	$(this).removeClass('error');
})
$('.loginBtn').on('click', function() {
	if($('#mobileNum').val() === '') {
		alert('请输入手机号码。');
		return;
	}
	console.log(!(/^1[3456789]\d{9}$/.test($('#mobileNum').val())));
	if(!(/^1[3456789]\d{9}$/.test($('#mobileNum').val()))){ 
        alert("手机号码有误，请重填");  
        $('#mobileNum').addClass('error');
        return; 
    } 
	if($('#code').val() === '') {
		alert('请输入验证码。');
		return;
	}
	if(!$('.radio_type').is(':checked')) {
		alert('请勾选用户协议。');
		return;
	}
	alert('信息完备，可以提交，走ajax请求');
//	$.ajax({    
//		type: "GET",
//		    url: "",
//		    dataType: "json",
//		    success: function(data) {      
//			if(data.success) {
//
//				      } else {
//
//				      }    
//		},
//		    error: function(jqXHR) {      
//			aler("发生错误：" + jqXHR.status);    
//		}
//	});

})
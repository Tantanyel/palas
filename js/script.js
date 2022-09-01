window.onload = function () {
	setTimeout(function() {
		$('.loading img').animate({"opacity":"0","top":"20px"},300,function(){
			$(".loading").remove();
			animater(".layer1");
		});
	}, 600);
}

$(document).ready(function (e) {
	if($('*').is('#center')) {
		$('body').slidepage(".pimp", ".content", ".layer");
	}

	var t = 1000000000;

	setInterval(function() {
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		$('#time').text(days+":"+hours+":"+minutes+":"+seconds);
		t = t-1000;
	}, 1000);
})


var blocks = 0
function menu(num){
	if(num==0){
		blocks = 0
		$('.menu span').removeClass('active');
	}
	if(num==1||num==2){
		if(blocks!=1){
			blocks = 1
			$('.menu span').removeClass('active');
			$('.menu span:nth-child('+blocks+')').addClass('active');
		}
	}
	if(num==3||num==4){
		if(blocks!=2){
			blocks = 2
			$('.menu span').removeClass('active');
			$('.menu span:nth-child('+blocks+')').addClass('active');
		}
	}
	if(num==5||num==6){
		if(blocks!=3){
			blocks = 3
			$('.menu span').removeClass('active');
			$('.menu span:nth-child('+blocks+')').addClass('active');
		}
	}
	if(num==7){
		blocks = 4
		$('.menu span').removeClass('active');
		$('.soc').addClass('opac');
		$('.timer').addClass('opac');
		$('.strelka').addClass('opac');
	}else{
		$('.soc').removeClass('opac');
		$('.timer').removeClass('opac');
		$('.strelka').removeClass('opac');
	}
	if(num==0||num==2||num==4){
		$('.strelka span').removeClass('opac');
		if(num==0){
			$('.strelka span').text('женщины');
		}
		if(num==2){
			$('.strelka span').text('мужчины');
		}
		if(num==4){
			$('.strelka span').text('локация');
		}
	}else{
		$('.strelka span').addClass('opac');
	}
}

function animater(obj) {
	$(obj).find('*[an]').each(function() {
		var arr = $(this).attr("an");
		arr = arr.split(",");
		var anim = arr[0];
		var zaderj = Number(arr[1]);
		var ch = $(this).children('*').length;
		if(anim=="smoke"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 500+(zad*1000);
				var str = "smoke 0.5s steps(21) "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="layer"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 500+(zad*1000);
				var str = "layer 0.5s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="man"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "man 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="dev"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "dev 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="train"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "train 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="style"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "style 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="style_t"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "style_t 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="img"){
			$(this).find('span').each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "img 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="text"){
			$(this).find('.line').each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "text_line 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
			$(this).find('span').each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "text_span 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="dat"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "dat 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="dat2"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "dat2 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
	});
}

function animatero(obj) {
	$(obj).find('*[ano]').each(function() {
		var arr = $(this).attr("ano");
		arr = arr.split(",");
		var anim = arr[0];
		var zaderj = Number(arr[1]);
		var ch = $(this).children('*').length;
		if(anim=="layer_o"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 300+(zad*1000);
				var str = "layer_o 0.3s linear "+zad+"s both";
				animation(this,str,time)
			})
		}
	});
}

function animation(obj,str,tim,rem){
	$(obj).css({animation:str});
	setTimeout(function() {
		if(!rem){
			$(obj).removeAttr('style')
		}
	}, tim);
}
$(function(){
	var config = {
	    vx: 1,	//小球x轴速度,正为右，负为左
	    vy: 1,	//小球y轴速度
	    height: 2,	//小球高宽，其实为正方形，所以不宜太大
	    width: 2,
	    count: 80,		//点个数
	    color: "121, 162, 185", 	//点颜色
	    stroke: "130,255,255", 		//线条颜色
	    dist: 6000, 	//点吸附距离
	    e_dist: 20000, 	//鼠标吸附加速距离
	    max_conn: 20 	//点到点最大连接数
	}
	
	//调用
	CanvasParticle(config);
	// var timer=null;
	// var video=document.getElementById('video1');
	// var poster=document.getElementById('poster'); //用于视频初始化poster图片
	// var canvas = document.getElementById("myCanvas");
	// var context = canvas.getContext("2d");
	// canvas.width = window.innerWidth*2;  //获取屏幕宽度作为canvas的宽度  这个设置的越大，画面越清晰（相当于绘制的图像大，然后被css缩小）
	// canvas.height = window.innerHeight*2; 
	// context.drawImage(poster, 0, 0, canvas.width, canvas.height);//canvas上绘制postere图片 也可以点击播放后隐藏图片无需绘制
	// function draw1() {//绘制视频
	//  video.play();
	//   timer = setInterval(function(){
	// 	context.drawImage(video, 0, 0, canvas.width, canvas.height);//绘制视频
	//  },40);
	// };
	// var isplay=false;//视频播放状态
	// $('.circle').click(function(){ //初始化暂停状态下 点击播放（开始绘制视频） 
	// 	  video.play();
	// 	  $('.palyChange').hide();
	// 	  isplay=false;
	// 	  draw1();
	// });
	// 
	// 
	// var myVideo = document.getElementById('video1');
	// myVideo.addEventListener('ended', function () {
	// 		this.webkitExitFullScreen();
	// });
	
	var canvas = document.getElementById('myCanvas');
	var location_href = 'http://mued.b2b.cn/cs/eyueche/'
	var url = 'images/out2.ts'; 
	const player = new JSMpeg.Player(url, 
		{
			canvas: canvas,
			loop: false,
			pauseWhenHidden: false,
			onPlay(){
				console.log('开始播放')
			},
			onEnded(){
				console.log('播放完毕')
			}
		},
	);
	
	$('.circle').click(function(){
		swiper.slideNext()
		player.play()
	})
	console.log(url)
	let count = 0;
	var swiper = new Swiper('.swiper-container', {
	  direction: 'vertical',
		slidesPerView: 'auto',
		noSwiping : true,
		noSwipingClass : 'stop-swiping',
		onTouchStart: function(swiper){
			swiper.lockSwipeToPrev();
			if(swiper.isEnd){
				swiper.lockSwipeToNext();
			}else{
				swiper.unlockSwipeToNext();
			}
			// if(swiper.activeIndex == 1){
			// 	swiper.lockSwipeToPrev();
			// 	console.log('锁定前进')
			// }else{
			// 	swiper.unlockSwipeToPrev();
			// 	console.log('打开前进')
			// }
		},
		onSlideChangeEnd: function(swiper){
			var k = swiper.activeIndex
			$('.next_step').hide()
			$('.session_5').hide()
			var timer2 = null;
			var timer3 = null;
			var timer4 = null;
			var timer5 = null;
			// 第一屏
			if(k == 1){
				$('.s1_tit').addClass('bounceIn')
				$('.s1_h3').addClass('fadeInUp')
				$('.s1_p').addClass('fadeInUp')
				$('.s1_40').addClass('fadeInUp')
				$('.circle').addClass('zoomInDown')
				$(".session1_1").append($('#mydiv'))
				swiper.noSwiping = false
			}else if(k == 2){ // 第二屏
				swiper.params.onlyExternal = true;
				var a = 0;
				timer2 = setInterval(function(){
					if(a <= 3){
						$('.session_2 .session2_1').addClass('active').siblings().removeClass('active')
					}else if(a <= 6){
						$('.session_2 .session2_2').addClass('active').siblings().removeClass('active')
					}else if(a <= 9){
						$('.session_2 .session2_3').addClass('active').siblings().removeClass('active')
					}else if(a <= 12){
						$('.session_2 .session2_4').addClass('active').siblings().removeClass('active')
					}else if(a <= 15){
						$('.session_2 .session2_5').addClass('active').siblings().removeClass('active')
					}else if(a <= 18){
						$('.session_2 .session2_6').addClass('active').siblings().removeClass('active')
					}else if(a <= 21){
						$('.session_2 .session2_7').addClass('active').siblings().removeClass('active')
					}else if(a <= 24){
						$('.session_2 .session2_8').addClass('active').siblings().removeClass('active')
					}else if(a <= 26){
						$('.session_2 .session2_9').addClass('active1').siblings().removeClass('active')
						$('.session_2 .s2-img').removeClass('active')
						// swiper.slideNext()
						setTimeout(function(){
							player.pause()
							swiper.params.onlyExternal = false;
							$('.next_step').fadeIn(200)
						},800)
						clearInterval(timer2)
					}else if(a >= 27){
						
					}
					a++;
				},1000)
			}else if(k == 3){ //第3屏
				swiper.params.onlyExternal = true;
				var b = 0;
				player.play()
				timer3 = setInterval(function(){
					b++;
					if(b >= 9){
						player.pause()
						swiper.params.onlyExternal = false;
						// swiper.slideNext()
						$('.next_step').fadeIn(200)
						clearInterval(timer3)
					}
				},1000)
			}else if(k == 4){ //第4屏
				player.play()
				swiper.params.onlyExternal = true;
				var c = 0;
				timer4 = setInterval(function(){
					c++;
					if(c >= 10){
						// swiper.slideNext()
						player.pause()
						swiper.params.onlyExternal = false;
						$('.next_step').fadeIn(200)
						clearInterval(timer4)
					}
				},1000)
			}else if(k == 5){ //第5屏
				player.play()
				swiper.params.onlyExternal = true;
				var d = 0;
				timer5 = setInterval(function(){
					if(d <= 3){
						$('.session5 .session2_3').addClass('active1').siblings().removeClass('active')
						$('.session_5').fadeIn(400).delay(4000)
					}else if(d >= 4){
						swiper.params.onlyExternal = false;
						$('.next_step').fadeIn(200)
						clearInterval(timer5)
					}
					d++;
				},1000)
			}else if(k == 6){ //第6屏
				swiper.params.onlyExternal = true;
				$('.location_icon').addClass('active')
				$('.content').addClass('active')
				$('.place_location_message').addClass('active')
				var e = 0; 
				var timer6 = setInterval(function(){
					if(e>5){
						$('.next_step').fadeIn(200)
						swiper.params.onlyExternal = false;
						clearInterval(timer6)
					}
					e++;
				},1000)
				
			}else if(k == 7){ //第7屏
				$(".session_7").append($('#mydiv'))
			}
			$('.session5 .s2-img').removeClass('active1')
			$('.session5 .s2-img').removeClass('active')
			// clearInterval(timer2)
			// clearInterval(timer3)
			// clearInterval(timer4)
		},
		onInit:function(swiper){
		  slide=swiper.slides.eq(0);
			slide.addClass('now-progress');
		},
		onTransitionStart: function(swiper){
			for(i=0;i<swiper.slides.length;i++){
				slide=swiper.slides.eq(i);
				slide.removeClass('now-progress');
			}
		},
		onTransitionEnd: function(swiper){
			slide=swiper.slides.eq(swiper.activeIndex);
			slide.addClass('now-progress');
		},
	});
	var timer = setInterval(function(){
		count+=Math.floor(Math.random()*5)
		if(count>=100){
			$('.loading-num i').text('100')
			$('.loading-item').css({'width':'100%'})
			// var music = document.getElementById("media");
			$('#media')[0].play();
			clearInterval(timer)
			setTimeout(function(){
				$('.rotate').fadeIn(200)
				swiper.slideNext();
			},1000)
		}else{
			$('.loading-num i').text(count)
			$('.loading-item').css({'width':count+'%'})
		}
	},20)
	
	// 进入第二屏
	$('.next_step').click(function(){
		swiper.slideNext()
	})
	
	$('#audio_btn').on('click',function(){
		var music = document.getElementById('media'); 
    if (music.paused){ 
        music.play();
        $(this).addClass('rotate')
    } 
    else{ 
        music.pause();
				$(this).removeClass('rotate')
    } 
	})
})
-$(document).ready(function(){
  	$(".walking-man").click(function(){
  		location.href = "/";
  	});

  	//operation bar 的 item

  	$(".operation-icon-world").click(function(){clickOperationItem(0)});
  	$(".operation-icon-world").click();
  	$(".operation-icon-code").click(function(){clickOperationItem(1)});
  	$(".operation-icon-draw").click(function(){clickOperationItem(2)});
  	$(".operation-icon-music").click(function(){clickOperationItem(3)});
  	$(".operation-icon-pen").click(function(){clickOperationItem(4)});

  	$('#fullpage').fullpage({
  		navigation: true,
  		afterLoad: function(anchorLink, index) {
  			if (index == 1) {
				$(".walking").addClass("walking-animate");
  			} else {
  				$(".walking").removeClass("walking-animate");
  			}

  			switch (index) {
  				case 1:
  					$("#fp-nav ul li a span").css("background-color", "rgb(98, 61, 93)");
  					stopAllPhotoAnimation();
  					stopTyping();
  					break;
  				case 2:
  					$("#fp-nav ul li a span").css("background-color", "rgb(26, 26, 26)");
  					stopAllPhotoAnimation();
  					stopTyping();
  					break;
  				case 3:
  					$("#fp-nav ul li a span").css("background-color", "rgb(52, 152, 219)");
  					stopAllPhotoAnimation();
  					startPhotoWingAnimation();
  					stopTyping();
  					break;
  				case 4:
	  				$("#fp-nav ul li a span").css("background-color", "#333");
  					stopAllPhotoAnimation();
  					startTyping();
  					break;
  				default:
  					$("#fp-nav ul li a span").css("background-color", "#333");
  					stopAllPhotoAnimation();
  					stopTyping();
  					break;
  			}

		  	$(".title-button").click(function(){
		  		$.fn.fullpage.moveSectionDown();
			});
  		},
  	});

	$(".contact-title-element").typed({
  		strings: [" 喝点啤的 ", " 吃点辣的 ", " 玩点大的 ", " 搞点爽的 ", " 聊点嗨的 ", " 创造点屌的 ^1500"],
  		typeSpeed: 100,
  		startDelay: 1000,
  		backDelay: 1000,
  		loop: true,
  	});

	$("#contact-post-button").click(function() {
  		var name = $("#contact-user-name").val();
  		var message = $("#contact-message").val();

  		if (name.length == 0) {
  			$("#contact-user-name")
  				.velocity({opacity: 0,}, {duration: 200,})
  				.velocity({opacity: 1,}, {duration: 200,})
  				.velocity({opacity: 0,}, {duration: 200,})
  				.velocity({opacity: 1,}, {duration: 200,});
  			return;
  		};

  		if (message.length == 0) {
  			$("#contact-message")
  				.velocity({opacity: 0,}, {duration: 200,})
  				.velocity({opacity: 1,}, {duration: 200,})
  				.velocity({opacity: 0,}, {duration: 200,})
  				.velocity({opacity: 1,}, {duration: 200,});
  			return;
  		};

  		message = "[" + name + "]" + "[" + message + "]";

  		if (message.length < 20) {
  			message = "[补全邮件内容避免被qq邮箱当成垃圾邮件导致发送失败]" + message;
  		};

  		$.ajax({
  			url: "http://xxtforphp.sinaapp.com/",
  			type: "POST",
  			dataType: "JSONP",
  			data: {
  				"message": message,
  			},
  			complete: function (request, stateString) {
  				
  			},
  			success: function () {

  			},
  		})

  		$(".contact-post-bg-success").velocity({
  			width: "100%",
  		}, {
  			duration: 2000,
  			delay: 300,
  			easing: "easeInOutCubic",
  			complete: function() {
				$("#contact-user-name").val("");
				$("#contact-message").val("");

				$("#contact-post-button").fadeOut(300, function() {
					$("#contact-post-button").html("已发送");
					$("#contact-post-button").fadeIn(300, function() {
						setTimeout(function() {
							$("#contact-post-button").fadeOut(300, function() {
								$("#contact-post-button").html("发送");
								$("#contact-post-button").fadeIn(300);
							});

							$(".contact-post-bg-success").velocity({
								opacity: 0,
							}, {
								duration: 300,
								complete: function() {
									$(".contact-post-bg-success").css({
										"width": "0%",
										"opacity": "1",
									});
								},
							});
						}, 1000);
					});
				});
  			},
  		});
  	});
});

function startTyping() {
	$(".typed-cursor").addClass("typed-cursor-animation");
}

function stopTyping() {
	$(".typed-cursor").removeClass("typed-cursor-animation");
}

jQuery(window).load(function () {
	        setTimeout(function() {
	                $('.preloader').fadeOut('slow', function() {
	                    $(this).css('display', 'none');
	                });
	        }, 300);
});

function clickOperationItem (buttonIndex) {
	//设置man的样式以及buttonItem的样式
	var manClassNames = new Array(".detail-man-normal", ".detail-man-code", ".detail-man-draw", ".detail-man-guitar", ".detail-man-write");
	var operationItemClassNames = new Array(".operation-icon-world", ".operation-icon-code", ".operation-icon-draw", ".operation-icon-music", ".operation-icon-pen");

	for (var i = 0; i < manClassNames.length; i++) {
		if (i != buttonIndex) {
			$(manClassNames[i]).fadeOut(1000, function() {
				$(manClassNames[i]).css("display","none");
			});

			$(operationItemClassNames[i]).removeClass("operation-icon-selected");
			$(operationItemClassNames[i]).addClass("operation-icon-unselected");
		};
	}

	$(operationItemClassNames[buttonIndex]).removeClass("operation-icon-unselected");
	$(operationItemClassNames[buttonIndex]).addClass("operation-icon-selected");

	$(manClassNames[buttonIndex]).fadeIn(1000, function() {
		$(manClassNames[buttonIndex]).css("display","block");
	});

	//设置man下方的文字
	var manIntroduceTitle = new Array("\"做白日梦的\"", "\"敲代码的\"", "\"搞美工的\"", "\"弹吉他的\"", "\"写废话的\"");
	var manIntroduceContent = new Array(
			"我无力延展生命的长度，但我渴求扩展生命的宽度",
			"饼曰: Objective-C给我以血肉，HTML塑造我灵魂",
			"我早已沉迷于，那种将大脑一把拍到屏幕上的快感",
			"在木吉他悠扬声中沉醉，在电吉他激昂声中重生",
			"我希望将来回首能看到来时脚印，而不是一片惨白");

	$(".detail-man-introduce").fadeOut(500, function() {
		$(".detail-man-introduce-title").html(manIntroduceTitle[buttonIndex]);
		$(".detail-man-introduce-content").html(manIntroduceContent[buttonIndex]);
		$(".detail-man-introduce").fadeIn(500);
	});
}

//第三页photo相关动画
var targetScreenWidth = 600;
function startPhotoWingAnimation() {

	var wingWidth = 366;
	var wingHeight = 330;
	var wingLeft = 120;
	var wingBottom = 340;
	var wingLeftOffset = 50;

	if ($(window).width() <= targetScreenWidth) {
		wingWidth = 264;
		wingHeight = 236;
		wingLeft = 80;
		wingBottom = 253;
		wingLeftOffset = 30;
	}

	var wingBottomOffset = (wingHeight / wingWidth) * wingLeftOffset;

	$(".photo-wing").css({
		"left": wingLeft - wingLeftOffset,
		"bottom": wingBottom - wingBottomOffset ,
		"opacity": "0",
	});

	$(".photo-wing")
		.velocity({
			left: wingLeft,
			bottom: wingBottom,
			opacity: 1,
		}, {
			duration: 700,
			easing: "easeOutCubic",
		})
		.velocity({
			opacity: 1,
		}, {
			duration: 1000,
		})
		.velocity({
			left: wingLeft + wingLeftOffset,
			bottom: wingBottom + wingBottomOffset,
			opacity: 0,
		}, {
			duration: 700,
			easing: "easeInCubic",
			complete: function(){startPhotoDevilAnimation();},
		});
}

function startPhotoDevilAnimation() {

	//horn right
	var hornRightWidth = 85;
	var hornRightHeight = 75;
	var hornRightLeft = 80;
	var hornRightBottom = 488;
	var hornRightLeftOffset = 10;

	if ($(window).width() <= targetScreenWidth) {
		hornRightWidth = 60;
		hornRightHeight = 53;
		hornRightLeft = 58;
		hornRightBottom = 355;
	}

	var hornRightBottomOffset = (hornRightHeight / hornRightWidth) * hornRightLeftOffset;

	$(".photo-horn-right").css({
		"left": hornRightLeft - hornRightLeftOffset,
		"bottom": hornRightBottom - hornRightBottomOffset,
		"opacity": "0",
	});

	$(".photo-horn-right")
		.velocity({
			left: hornRightLeft,
			bottom: hornRightBottom,
			opacity: 1,	
		}, {
			duration: 700,
			easing: "easeOutCubic",
		})
		.velocity({
			opacity: 1,
		}, {
			duration: 1000,
		})
		.velocity({
			left: hornRightLeft + hornRightLeftOffset,
			bottom: hornRightBottom + hornRightBottomOffset,
			opacity: 0,
		}, {
			duration: 700,
			easing: "easeInCubic",
		})

	//horn left
	var hornLeftWidth = 66;
	var hornLeftHeight = 94;
	var hornLeftLeft = -18;
	var hornLeftBottom = 451;
	var hornLeftLeftOffset = 10;

	if ($(window).width() <= targetScreenWidth) {
		hornLeftWidth = 45;
		hornLeftHeight = 67;
		hornLeftLeft = -11;
		hornLeftBottom = 325;
	}

	var hornLeftBottomOffset = (hornLeftHeight / hornLeftWidth) * hornLeftLeftOffset;

	$(".photo-horn-left").css({
		"left": hornLeftLeft + hornLeftLeftOffset,
		"bottom": hornLeftBottom - hornLeftBottomOffset,
		"opacity": "0",
	});

	$(".photo-horn-left")
		.velocity({
			left: hornLeftLeft,
			bottom: hornLeftBottom,
			opacity: 1,	
		}, {
			duration: 700,
			easing: "easeOutCubic",
		})
		.velocity({
			opacity: 1,
		}, {
			duration: 1000,
		})
		.velocity({
			left: hornLeftLeft - hornLeftLeftOffset,
			bottom: hornLeftBottom + hornLeftBottomOffset,
			opacity: 0,
		}, {
			duration: 700,
			easing: "easeInCubic",
		})

	//trail
	var trailWidth = 200;
	var trailHeight = 250;
	var trailLeft = 70;
	var trailBottom = 190;
	var trailLeftOffset = 20;

	if ($(window).width() <= targetScreenWidth) {
		trailWidth = 145;
		trailHeight = 180;
		trailLeft = 62;
		trailBottom = 135;
	}

	$(".photo-trail").css({
		"left": trailLeft - trailLeftOffset,
		"opacity": "0",
	});

	$(".photo-trail")
		.velocity({
			left: trailLeft,
			opacity: 1,
		}, {
			duration: 700,
			easing: "easeOutCubic",
		})
		.velocity({
			opacity: 1,
		}, {
			duration: 1000,
		})
		.velocity({
			left: trailLeft - trailLeftOffset,
			opacity: 0,
		}, {
			duration: 700,
			easing: "easeInCubic",
			complete: function() {startPhotoSaiyaAnimation();},
		})
}

function startPhotoSaiyaAnimation () {

	$("body")
		.velocity({opacity: 1,}, {
			duration: 0,
			complete: function() {
				$(".photo-saiya-head").addClass("photo-saiya-head-show-animation");
				$(".photo-saiya-power").addClass("photo-saiya-power-show-animation");
			},
		})
		.velocity({opacity: 1,}, {
			duration: 1500,
			complete: function() {
				$(".photo-saiya-head").removeClass("photo-saiya-head-show-animation");
				$(".photo-saiya-head").addClass("photo-saiya-head-hide-animation");

				$(".photo-saiya-power").removeClass("photo-saiya-power-show-animation");
				$(".photo-saiya-power").addClass("photo-saiya-power-hide-animation");
			}
		})
		.velocity({opacity: 1,}, {
			duration: 300,
			complete: function() {
				$(".photo-saiya-head").removeClass("photo-saiya-head-hide-animation");
				$(".photo-saiya-power").removeClass("photo-saiya-power-hide-animation");
				startSBAnimation();
			}
		});
}

function startSBAnimation () {

	//sblogo
	var sbLogoBottom = 360;
	var sbLogoBottomOffset = 10;

	if ($(window).width() <= targetScreenWidth) {
		sbLogoBottom = 261;
	}

	$(".photo-sb-logo").css({
		"bottom": sbLogoBottom - sbLogoBottomOffset,
		"opacity": "0",
	});

	$(".photo-sb-logo")
		.velocity({
			bottom: sbLogoBottom,
			opacity: 1,	
		}, {
			duration: 700,
			easing: "easeOutCubic",
		})
		.velocity({
			opacity: 1,
		}, {
			duration: 1000,
		})
		.velocity({
			bottom: sbLogoBottom + sbLogoBottomOffset,
			opacity: 0,
		}, {
			duration: 700,
			easing: "easeInCubic",
		})

	//sbcloth
	var sbClothWidth = 298;
	var sbClothHeight = 372;
	var sbClothLeft = 135;
	var sbClothBottom = 70;
	var sbClothLeftOffset = 20;

	if ($(window).width() <= targetScreenWidth) {
		sbClothWidth = 215;
		sbClothHeight = 267;
		sbClothLeft = 95;
		sbClothBottom = 55;
	}

	var sbClothBottomOffset = (sbClothHeight / sbClothWidth) * sbClothLeftOffset;

	$(".photo-sb-cloth").css({
		"left": sbClothLeft - sbClothLeftOffset,
		"bottom": sbClothBottom + sbClothBottomOffset,
		"opacity": "0",
	});

	$(".photo-sb-cloth")
		.velocity({
			left: sbClothLeft,
			bottom: sbClothBottom,
			opacity: 1,	
		}, {
			duration: 700,
			easing: "easeOutCubic",
		})
		.velocity({
			opacity: 1,
		}, {
			duration: 1000,
		})
		.velocity({
			left: sbClothLeft + sbClothLeftOffset,
			bottom: sbClothBottom - sbClothBottomOffset,
			opacity: 0,
		}, {
			duration: 700,
			easing: "easeInCubic",
			complete: function() {
				startImaginationAnimation();
			},
		})
}

var timeOut_hideImagination;
function startImaginationAnimation() {
	showBullet();
	setTimeout(function() {
		showBlood();
	}, 400);
	setTimeout(function() {
		showPlanet();
	}, 550);
	setTimeout(function() {
		showRocket();
	}, 700);
	timeOut_hideImagination = setTimeout(function() {
		hideBlood();
		hidePlanet();
		hideRocket();
	}, 1400+2000);
}

function showBullet() {
	var bulletWidth = 16;
	var bulletHeight = 9;
	var bulletLeft = 0;
	var bulletBottom = 495;

	var bulletLeftOffset = 50;
	var bulletBottomOffset = 15;

	if ($(window).width() <= targetScreenWidth) {
		bulletWidth = 11;
		bulletHeight = 6;
		bulletLeft = 0;
		bulletBottom = 360;

		var originalBulletLeftOffset = bulletLeftOffset;
		var originalBulletBottomOffset = bulletBottomOffset;

		bulletLeftOffset = 30;
		bulletBottomOffset = originalBulletBottomOffset / originalBulletLeftOffset * bulletLeftOffset;
	}

	$(".photo-bullet").css({
		"left": bulletLeft,
		"bottom": bulletBottom,
		"opacity": 0,
	});

	$(".photo-bullet")
		.velocity({
			opacity: 1,
		}, {
			duration: 300,
		})
		.velocity({
			left: bulletLeft + bulletLeftOffset,
			bottom: bulletBottom + bulletBottomOffset,
		}, {
			duration: 200,
			easing: "linear",
			complete: function() {
				hideBullet();
			},
		})
}

function hideBullet() {
	$(".photo-bullet").css({
		"opacity": 0,
	});
}
  
function showBlood() {
	$(".photo-blood").addClass("photo-blood-show-animation");
}

function hideBlood() {
	$(".photo-blood").removeClass("photo-blood-show-animation");
	$(".photo-blood").addClass("photo-blood-hide-animation");
	setTimeout(function() {
		$(".photo-blood").removeClass("photo-blood-hide-animation");
	}, 200);
}

function showPlanet() {
	var planetWidth = 202;
	var planetHeight = 222;
	var planetLeft = 98;
	var planetBottom = 445;
	var planetLeftOffset = 20;

	if ($(window).width() <= targetScreenWidth) {
		planetWidth = 180;
		planetHeight = 160;
		planetLeft = 71;
		planetBottom = 344;
	}

	var planetBottomOffset = (planetHeight / planetWidth) * planetLeftOffset;

	$(".photo-planet").css({
		"left": planetLeft - planetLeftOffset,
		"bottom": planetBottom - planetBottomOffset,
		"opacity": "0",
	});
	$(".photo-planet").velocity({
		left: planetLeft,
		bottom: planetBottom,
		opacity: 1,
	}, {
		duration: 500,
		easing: "easeOutCubic",
	});
}

function hidePlanet() {
	var planetWidth = 202;
	var planetHeight = 222;
	var planetLeft = 98;
	var planetBottom = 445;
	var planetLeftOffset = 20;

	if ($(window).width() <= targetScreenWidth) {
		planetWidth = 180;
		planetHeight = 160;
		planetLeft = 71;
		planetBottom = 344;
	}

	var planetBottomOffset = (planetHeight / planetWidth) * planetLeftOffset;

	$(".photo-planet").velocity({
		left: planetLeft - planetLeftOffset,
		bottom: planetBottom - planetBottomOffset,
		opacity: 0,
	}, {
		duration: 500,
		easing: "easeInCubic",
	});
}

function showRocket() {
	var rocketWidth = 117;
	var rocketHeight = 92;
	var rocketLeft = 260;
	var rocketBottom = 550;
	var rocketLeftOffset = 30;

	if ($(window).width() <= targetScreenWidth) {
		rocketWidth = 83;
		rocketHeight = 65;
		rocketLeft = 204;
		rocketBottom = 401;
	}

	var rocketBottomOffset = (rocketHeight / rocketWidth) * rocketLeftOffset;

	$(".photo-rocket").css({
		"left": rocketLeft - rocketLeftOffset,
		"bottom": rocketBottom - rocketBottomOffset,
		"opacity": "0",
	});

	$(".photo-rocket").velocity({
		left: rocketLeft,
		bottom: rocketBottom,
		opacity: 1,
	}, {
		duration: 700,
		easing: "easeOutCubic",
	})
}

function hideRocket() {
	var rocketWidth = 117;
	var rocketHeight = 92;
	var rocketLeft = 260;
	var rocketBottom = 550;
	var rocketLeftOffset = 30;

	if ($(window).width() <= targetScreenWidth) {
		rocketWidth = 83;
		rocketHeight = 65;
		rocketLeft = 204;
		rocketBottom = 401;
	}

	var rocketBottomOffset = (rocketHeight / rocketWidth) * rocketLeftOffset;

	$(".photo-rocket").velocity({
		left: rocketLeft + rocketLeftOffset,
		bottom: rocketBottom + rocketBottomOffset,
		opacity: 0,
	}, {
		duration: 700,
		easing: "easeInCubic",
		complete: function() {startPhotoWingAnimation();},
	})
}

function stopAllPhotoAnimation() {
	// pass in true (or the name of a custom queue) to clear all of the element's remaining queued calls
	$(".photo-component").velocity("stop", true);
	$("body").velocity("stop", true);
	clearTimeout(timeOut_hideImagination);

	$(".photo-saiya-power").removeClass("photo-saiya-power-show-animation");
	$(".photo-saiya-power").removeClass("photo-saiya-power-hide-animation");

	$(".photo-saiya-head").removeClass("photo-saiya-head-show-animation");
	$(".photo-saiya-head").removeClass("photo-saiya-head-hide-animation");	

	$(".photo-blood").removeClass("photo-blood-show-animation");

	$(".photo-component").css({"opacity": "0"});
}









(function($) {
	var burst = new mojs.Burst({
		parent: $(".burst-container"),
		radius: { 90: 150 },
		count: 15,
		angle: { 0:30 },
		opacity: { 0:1 },
		children: {
			delay: 500,
			duration: 2000,
			radius: { 6:3 },
			fill:   [ '#000000' ],
			easing: mojs.easing.bezier(.08,.69,.39,.97)
		}
		});


	/*==================================================================
	[ DOM rendered ] */
	$(document).ready(function () {
		// button behavior change on iOS
		if (!navigator.userAgent.match(/(\(iPod|\(iPhone|\(iPad)/)) { // don't show contact form on iOS
			$('a.btn-show-contact100,a.inline-show-contact100').attr("href", "javascript:void(0);");
		}
		// form submission success
		if (document.URL.indexOf("success") !== -1){
			$('html').css("overflow", "hidden");		
			$(".container-success100").css("display", "table");
		}
		// show elements that are hidden if JS not enabled
		$('.signature-wrapper').css("display", "block");
		$('.review-section').css("display", "block");
	  }); 
	  

	$(window).on('load', function() { 
		/*------------------
			Preloader
		--------------------*/
		// $(".loader").fadeOut(); 
		// $("#preloader").delay(200).fadeOut("slow");	
		// if JS enabled, replace with modal
		$(".signature-wrapper").addClass("signature-animation");
		if (document.URL.indexOf("success") !== -1){
			burst.replay();
		}
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	$('.review-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true
	});



	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});


	$('.lan-prog').each(function() {
		var progress = $(this).data("lanprogesss");
		var ele      = '<span></span>';
		var ele_fade = '<span class="fade-ele"></span>';
		
		for (var i = 1; i <= 5; i++) {
			if(i <= progress){
				$(this).append(ele);
			} else {
				$(this).append(ele_fade);
			}
		}
	});


	/*------------------
		Popup
	--------------------*/
	$('.portfolio-item .port-pic').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});




if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#40424a",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#40424a",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress3").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress4").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress5").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress6").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	/*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
		}
		if (check == true){
			$('.container-contact100').css("display", "none");
        	$('.container-contact100').fadeOut(300);
		}
        return check;
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('name') == '_replyto') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
		}
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

    /*==================================================================
	[ Show / hide pop-up ]*/
	if (!navigator.userAgent.match(/(\(iPod|\(iPhone|\(iPad)/)) { // don't show contact form on iOS
		$('.btn-hide-contact100').on('click', function(){
			for(var i=0; i<input.length; i++) {
				hideValidate(input[i]);
			}
	
			$('html,body').css("overflow", "auto");
			$('.container-contact100').css("display", "none");
			$('.container-contact100').fadeOut(300);
		});
	
		$('.btn-show-contact100').on('click', function(){
			$('html,body').css("overflow", "hidden");
			$('.container-contact100').css("display", "flex");
			$('.container-contact100').fadeIn(300);
		});
	
		$('.inline-show-contact100').on('click', function(){
			$('html,body').css("overflow", "hidden");
			$('.container-contact100').css("display", "flex");
			$('.container-contact100').fadeIn(300);
		});
	}
	
	$('.btn-hide-success100').on('click', function(){
		$('html,body').css("overflow", "auto");
		$('.container-success100').css("display", "none");
		$('.container-success100').fadeOut(300);
	});
	
	$('.hide-success100').on('click', function(){
		$('html,body').css("overflow", "auto");
		$('.container-success100').css("display", "none");
		$('.container-success100').fadeOut(300);
	});
	
	/*==================================================================
	[ 404 ] */
	$('#frown').hover(function (){
		$('.container-404-overlay').css("opacity", 0);
	}, function() {
		$('.container-404-overlay').css("opacity", 1);
	});

	/* EXTRAS */
	$(document).keydown(function(e) {
		// ESCAPE key pressed
		if (e.keyCode == 27) {
			for(var i=0; i<input.length; i++) {
				hideValidate(input[i]);
			}
			$('html').css("overflow", "auto");
			$('.container-success100').css("display", "none");
			$('.container-success100').fadeOut(300);
			$('.container-contact100').css("display", "none");
        	$('.container-contact100').fadeOut(300);
		}
	});

	/*==================================================================
	Contact form */
	var contactModel = function(){
		var self = this;
		self.senderName = ko.observable('');
		self.senderEmail = ko.observable('');
		self.messageSubject = ko.observable('');
		self.senderMessage = ko.observable('');
		self.url = ko.computed(function(){
			return "mailto:hello@natashapetrus.com" +
				"?subject=" + encodeURIComponent(self.messageSubject()) +
				"&body=" + encodeURIComponent(self.senderMessage());
		});
	};
	ko.applyBindings(contactModel, document.getElementById("contact-popup"));
}

})(jQuery);


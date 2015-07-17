/*
Theme Name: Soonr
Author: CREATEBRILLIANCE - Media & Consulting
Author URI: http://www.createbrilliance.com
Version: 2.2
*/


(function($) { 
	"use strict";
	


/*
 * SIDE MENU
 */

  $("#menu-toggle").click(function(e) {
      e.preventDefault();      
     if($("#menu-toggle").hasClass("bt-menu-open")){
     	$(this).removeClass("bt-menu-open").addClass("bt-menu-close");
     	$("#sidebar-wrapper").removeClass("active");
     }else{
     	$(this).removeClass("bt-menu-close").addClass("bt-menu-open");
     	$("#sidebar-wrapper").addClass("active");
     }     
      
  });
      
      
 /*
 * MODAL HANDLER
 */
	$(".show-modal").on("click", function(){
		var modalView = $(this).attr("data-modal");
		$("#modal article").hide();
		$("#modal article#modal-"+modalView).show();
		if($("#modal").is(":visible")){
				
			}else{
				$("#sidebar-wrapper").removeClass("active");
				$("#modal").slideDown("slow");
				$("#modal").addClass("active");
				$("#menu-toggle").hide();
			}
	});
		
	$("#modal .bt-modal-close").on("click", function() {
		$("#modal").removeClass("active");
		$("#modal").slideUp("slow", function() {
			$("#menu-toggle").show();
			$("#menu-toggle").removeClass("bt-menu-open").addClass("bt-menu-close");
		});

	}); 


/*
 * COUNTDOWN
 */

	setInterval(function() {
		var target = new Date("May 12 2015 21:15:00 GMT+0200"); //replace with YOUR DATE
		var now = new Date();
		var difference = Math.floor((now.getTime() - target.getTime()) / 1000);

		var seconds = fixIntegers(difference % 60);
		difference = Math.floor(difference / 60);

		var minutes = fixIntegers(difference % 60);
		difference = Math.floor(difference / 60);

		var hours = fixIntegers(difference % 24);
		difference = Math.floor(difference / 24);

		var days = difference;

	
		$(".countdown #seconds").html(seconds);
		$(".countdown #seconds").css({top:"-50px",opacity:0});
		$(".countdown #seconds").animate({top:'0px',opacity:1},500);
		
		$(".countdown #minutes").html(minutes);

		
		$(".countdown #hours").html(hours);

		
		$(".countdown #days").html(days);

		
	}, 1000); 



	function fixIntegers(integer) {
		if (integer < 0)
			integer = 0;
		if (integer < 10)
			return "0" + integer;
		return "" + integer;
	}
	
	



	
	
	
	/*
	 * OWL CAROUSEL 
	 */
	$("#owl-carousel").owlCarousel();
	
	
	/*
	 * NEWSLETTER FORM
	 */
	$("#newsletter-submit").on('click', function(e) {
		e.preventDefault();
		$("#newsletter-submit").html("<i class='fa fa-cog fa-spin'></i> SENDING").prop('disabled', true);
		var $newsletter_form = $('#newsletter-form');
		var fields = $newsletter_form.serialize();
		
		/*
		 * 
		 */
		
		$.ajax({
			type : "POST",
			url : "inc/newsletter.php",
			data : fields,
			dataType : 'json',
			success : function(response) {
				if (response.status) {
					$("#emailInputNewsletter").text('')
				}
				$("#newsletter-submit").html("<i class='fa fa-check'></i> SUBMIT").prop('disabled', false);
				$('#newsletter-form-response').empty().html(response.html);
			}
		});
		return false;
	});
	


$(window).load(function(){	

/*
 * PRELOADER
 */

		$('#preloader').fadeOut(800, function() {
			$('body').css('overflow', 'visible');
			
			//trigger css3 animations
				$('.animated').each(function() {
				var elem = $(this);
				var animation = elem.data('animation');
				if (!elem.hasClass('visible') && elem.attr('data-animation') !== undefined) {
					if (elem.attr('data-animation-delay') !== undefined) {
						var timeout = elem.data('animation-delay');
						setTimeout(function() {
							elem.addClass(animation + " visible");
						}, timeout);
					} else {
						elem.addClass(elem.data('animation') + " visible");
					}
				}
			});
		}); 




		

	
}); //window load




}(jQuery));
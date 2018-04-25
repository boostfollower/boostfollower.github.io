(function($){
	$(document).ready(function(){

		$('form').each(function() {
			$(this).validate();
		});


		$('.five.columns').each(function(){
			var submitBtn = $(this).find('input[type=submit].buy')
				.addClass('mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-hover-outline')
				.css('visibility','visible');
		});


		$(document).on('click','input[type=submit].buy',function(e){
			if($(this).closest('form').hasClass('modal')) return true;

			e.preventDefault();
			var title = $(this).closest('.five.columns').find('.plan_title').text();
			var form = $(this).closest('form').clone();

		//	console.log("form",form);
			var amount = $(this).closest('.five.columns').find('.plan_price').find('p').text();
			amount = amount.substring(1,amount.length);
			var input = '<input name="cmd" type="hidden" value="_xclick" /><input name="amount" type="hidden" value="'+amount+'" /><input name="currency_code" type="hidden" value="USD" /><input name="item_name" type="hidden" value="'+title+'" /><input name="business" type="hidden" value="boostfollower.com@gmail.com " /><input name="return" type="hidden" value="http://www.boostfollower.com/" /><input name="image_url" type="hidden" value="http://www.boostfollower.com/wp-content/themes/BoostFollower/images/paymentlogo.png" />';
			form.attr('id','temp').prepend('<h3>'+title+'</h3>').append(input).appendTo('body').modal();
			/*
			$('#c').modal({
				fadeDuration: 1000,
  				fadeDelay: 0.50
			});
			*/
			return false;
		});


		function log_modal_event(event, modal) {
			var id = $(modal);
			if(event.type == 'modal:after-close')
				$('#temp').remove();

			if(event.type == 'modal:before-open'){
			//	$('#temp').prepend('<h3>Payment done here</h3>');
				$('#temp').find('input.buy').addClass('mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-hover-outline');
				$('#temp').validate();

			}
	    //  console.log("[event] " + event.type,"ID",id,modal);
	      
	    };

		$(document).on($.modal.CLOSE, log_modal_event);
    	$(document).on($.modal.AFTER_CLOSE, log_modal_event);
    	$(document).on($.modal.BEFORE_OPEN, log_modal_event);

		
	});
})(jQuery);
$(document).ready(function(){	
 
	$('.dropdown_menu > a').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active');
	});	
	
	$('.slider-banner').slick({
		slidesToShow: 1,
		dots: false,  	
        prevArrow:'.main-banner .controlers .prev',
        nextArrow:'.main-banner .controlers .next'        
	});    
    
    
    $('.tabs .link a').click(function(e){
        e.preventDefault();
        thisLink = $(this).attr('data-link');
        $('.t-item, .tabs .link a').removeClass('active');
        $(this).addClass('active');
        $('#'+ thisLink).addClass('active');
        console.log(thisLink);
    });
    
	$('.p-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true, 
		asNavFor: '.wrapper-product .pager',
		prevArrow:'.wrap-p-slider .controlers .prev',
		nextArrow:'.wrap-p-slider .controlers .next'        
		
	});
	$('.wrapper-product .pager').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.p-slider',
		dots: false,
		arrows:false,
		focusOnSelect: true
	}); 
    
	$('.recomend-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true, 
		prevArrow:'.recommend .controlers .prev',
		nextArrow:'.recommend .controlers .next',
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				centerMode: false,
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 762,
			  settings: {
				centerMode: false,
				slidesToShow: 2,
			  }
			},			
			{
			  breakpoint: 470,
			  settings: {
				centerMode: false,
				slidesToShow: 1,
			  }
			}
		]        
		
	});    
	    
 
    
    /*---------------------------------*/
//	if($('body').width < 650 ){
        $('.catalog .aside h1').click(function(){
            $('.list-catalog').toggleClass('active');
        });	
//	}
	
 	 
	
}); 
 

/*	================================================================================
	Form 
	================================================================================	*/
$(document).ready(function(){
	
    $("#question").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/question.php",
			data: $("#question").serialize()
		}).done(function() {
            $("#question").trigger("reset");
			 
		});
		return false;
	}); 
	
	
	
	$("form").submit(function(e) {

		var ref = $(this).find("input").attr('required');

		$(ref).each(function(){
			if ( $(this).val() == '' )
			{
//				$('.error_modal').addClass('error');
				alert('Заполните поле!');
				$(this).focus();
				$(this).click();

				e.preventDefault();
				return false;
			}else{
//				$('.error_modal').removeClass('error');
			}
		});  return true;
	});	
});


 

$(document).ready(function(){
	$('.client_account table .delete').click(function(){
		$(this).closest('tr').fadeOut();
	});
	
	
	$('.slider_comments').slick({
		centerMode: true,
		slidesToShow: 3,
		centerPadding: '0px',
		arrows: false,
		dots: true,
		draggable:false,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				centerMode: false,
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				centerMode: false,
				slidesToShow: 1,
			  }
			}
		]		
	});
	$('.slider_client').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable:false,
		infinite: true,
		autoplay:true,
		autoplaySpeed:4000,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				centerMode: false,
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 762,
			  settings: {
				centerMode: false,
				slidesToShow: 2,
			  }
			},			
			{
			  breakpoint: 480,
			  settings: {
				centerMode: false,
				slidesToShow: 1,
			  }
			}
		]		
	});	
	
});


//$(window).load(function () {
//  new WOW().init({
//	  
//  });
////	$('.wow').addClass('animation');
//});

/*	================================================================================
	Minified Nav Bar
	================================================================================	*/
//
//$(document).scroll(function (){
//	// var position = $(document).scrollTop();
//	// var headerHeight = $('#header').outerHeight();
//	var value = $(this).scrollTop();
//	/* Show "Back to Top" button */
//	if ( value > 100 ){
//		$(".back-to-top").addClass('show-to-top');
//	} else {
//	 	$(".back-to-top").removeClass('show-to-top');
//	}
//	/* Minified bar */
//	if ( value > 100 ){
//		$("#top-menu").addClass('minified');
//	} else {
//	 	$("#top-menu").removeClass('minified');
//	}
//
//});
//
// 
 
document.createElement("section");


 

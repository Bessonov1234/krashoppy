function sliders(){
	const img1 = document.querySelector('.button-color-blue')

	next.addEvenListener('click', ()=>{

	})
}
sliders()
$(document).ready(function() {

	/* lazy load */
      var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
      });
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});


	//product_item open form
	$(".product_item .content .button").click(function(){
		$(".product_item").removeClass("active");
		$(this).parent().parent(".product_item").addClass("active");
	});
	$(".product_item .close").click(function(){
		$(".product_item").removeClass("active");
	});

	//модель в форму
/*	$('.product_item .content .button').on('click', function(){
		var prodName = $(this).parent().parent().find('.hidden .vendor_code').text();
		$("input[name='comment']").val(prodName);
	});*/


});
// $(".product_item .content .button-color-blue").click(function(){
// 	$(".product_item").removeClass("active");
// 	$(this).parent().parent(".product_item").addClass("active");
// });




$(window).on("load", function(){

	/* sliders */
	$(".reviews_list").owlCarousel({
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		autoHeight: true,
		navText: "",
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: true,
				loop: true
			},
			660: {
				items: 2,
				margin: 20,
				nav: true,
				loop: true
			},
			1170: {
				items: 4,
				margin: 20,
				nav: false,
				loop: false
			}
		}
	});
	
});








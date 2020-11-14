var total = 11;
//commit 9a
function createSlick(){  

	$(".slider").not('.slick-initialized').slick({
		centerMode: true,
	    autoplay: true,
	    dots: true,
	
  		slidesToShow: 3,
	    responsive: [{ 
	        breakpoint: 768,
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: false,
	            slidesToShow: 1,
	            slidesToScroll: 1
	        } 
	    }]
	});	

}

createSlick();

//Will not throw error, even if called multiple times.
$(window).on( 'resize', createSlick );

$(document).ready(function(){
    
        for(var i = 1 ; i <= total; i++){
            $(".row1").append('<div class="ilb-m box4 imgwrap"><a class="imgdiv ilb-m" href="https://mickydeetees.redbubble.com"><img class="box1 ilb-t" src="./images/'+ i + '.jpg" alt="Legging">');
        };
});

animateOut: 'fadeOut'
$('#NewestCar').owlCarousel({
    items: 1,
    autoplay:true,
    loop: true,
    dots:true,
    mouseDrag:true,
    nav:false,
    smartSpeed:100,
    transitionStyle:"fade",
    animateIn: 'fadeIn',
    animateOut: 'fadeOutLeft'
});
// Brands
$('#Brands-Slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
	// iii. .brand-item (carousel)
		
    $('#Brands-Slider').owlCarousel({
        items:6,
        loop:true,
        smartSpeed: 1000,
        autoplay:true,
        dots:false,
        autoplayHoverPause:false,
        responsive:{
                0:{
                    items:2
                },
                415:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        });
        
        
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })

    
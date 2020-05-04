$(function() {  
    $("body").niceScroll({cursorcolor: "#f08d1d"});
    $(".num").counterUp({
    	delay:10,
    	time:1000
    });
    var thumbnailW = $(".thumbnail").innerWidth();
       $(".thumbnail img").width(thumbnailW);

       $('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateOut: 'fadeOut',
    autoplay:true,
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    


})

});

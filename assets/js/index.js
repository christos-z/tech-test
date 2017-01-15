/**
 * Created by Christos on 13/01/2017.
 */
function toggleHiddenBannerText() {
    $(".show-more-info__content").on('show.bs.collapse', function(){
        $(".promotion-cover > h3").toggleClass("hidden")
    }).on('hide.bs.collapse', function(){
        $(".promotion-cover > h3").toggleClass("hidden")
    });
}

function toggleActiveCtaBanner() {
    $(".cta-banner").on('click', function() {
        if ($(this).hasClass('active')) {
            $(".cta-banner").removeClass('active');
        }
        else {
            $(".cta-banner").removeClass('active');
            $(this).addClass('active');
        }
    });
}

function carouselSlideMobile() {
    $("#cta-buttons-carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function(event){
            var xMove = event.originalEvent.touches[0].pageX;
            if( Math.floor(xClick - xMove) > 5 ){
                $("#cta-buttons-carousel").carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -5 ){
                $("#cta-buttons-carousel").carousel('prev');
            }
        });
        $("#cta-buttons-carousel").on("touchend", function(){
            $(this).off("touchmove");
        });
    });
}

$(document).ready(function(){
    toggleHiddenBannerText();
    toggleActiveCtaBanner();
    carouselSlideMobile();
});

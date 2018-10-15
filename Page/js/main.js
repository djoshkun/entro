$(document).ready(function(){

  /// tabs functionality
  $('.tab .tabs li').on("click",function(e){
    e.preventDefault();
    var index =  $(e.target).index();
    $(e.target).addClass('active');

    if($(e.target).is("a")){
      index = $(e.target).parent("li").index();
    }

    $('.tab ul.tabs > li').removeClass('active');
    $(this).closest('li').addClass('active');

    if(index == 0){
      $('.tab .tabs_item').slideDown();
    }else{
      $('.tab .tabs_item').slideUp();
      $('.tab .tab_content').find('.tabs_item:eq(' + (index-1) + ')').slideDown();
    } 
  });

  //Filtering posts via RegExS  /^[0-9]{2}/  
  $('.post-container__link')
  .filter(function(index) {
    if( $(this).text().match(/\ amet 3\b/)){
      return $('.post-container').eq(index).hide();;
    }

  });


  ///Burger menu functionality  under 768px
  $('.menu-burger').click(function(){
   let headerHeight = $(".sticky-header").height();
   $(".sticky-container .navbar").css("top",headerHeight).slideToggle(500);   
 });

  //making slider (client's logos) using Slick Slider
  $('.clients').slick({
    slidesToShow: 6,
    arrows:false,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '50px',
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      }
    }
    ]
  });

  ///Scroll Magic effect to "welcome to entro" text
  var controller =new ScrollMagic.Controller();
  var ourScene =new ScrollMagic.Scene({
    triggerElement:"#scroll-magic",
    duration: 600 
  })  
  .setTween("#scroll-magic", 1, { scale: 0})
  .addTo(controller);
});
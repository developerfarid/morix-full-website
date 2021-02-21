$(document).ready(function(){
    $("#nav").click(function(){
      $("#open").toggleClass("active");
    });


      $(".main-1").owlCarousel({
        items:1,
        nav:true,
        loop:true
      });
      $(".owl-carousel-1").owlCarousel({
        items:5,
        nav:false,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,

        },
        600:{
            items:3,

        },
        1000:{
            items:5,
        }
    }
    });
      $(".owl-carousel-2").owlCarousel({
        items:3,
        nav:false,
        loop:true,
        autoplay:true,
        margin:30,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,

        },
        700:{
            items:2,

        },
        1000:{
            items:3,
        }
    }
    });
    new WOW().init();
    // tab start
      $(".tab-item li").click(function(){
        $(this).toggleClass("active").siblings().removeClass("active")
      })
    $(".tab-2").click(function(){
      $(".div-2 p").slideToggle()
      $(".div-1 p").slideUp()
      $(".div-3 p").slideUp()
      $(".div-4 p").slideUp()
      $(".div-5 p").slideUp()
      $(".div-2 li i").toggleClass("active")
      $(".div-1 li i").removeClass("active")
      $(".div-3 li i").removeClass("active")
      $(".div-4 li i").removeClass("active")
      $(".div-5 li i").removeClass("active")
      $(".div-2 li").toggleClass("active")
      $(".div-1 li").removeClass("active")
      $(".div-3 li").removeClass("active")
      $(".div-4 li").removeClass("active")
      $(".div-5 li").removeClass("active")
    });
    $(".tab-1").click(function(){
      $(".div-1 p").slideToggle()
      $(".div-2 p").slideUp()
      $(".div-3 p").slideUp()
      $(".div-4 p").slideUp()
      $(".div-5 p").slideUp()
      $(".div-1 li i").toggleClass("active")
      $(".div-2 li i").removeClass("active")
      $(".div-3 li i").removeClass("active")
      $(".div-4 li i").removeClass("active")
      $(".div-5 li i").removeClass("active")
      $(".div-1 li").toggleClass("active")
      $(".div-2 li").removeClass("active")
      $(".div-3 li").removeClass("active")
      $(".div-4 li").removeClass("active")
      $(".div-5 li").removeClass("active")
    });
    $(".tab-3").click(function(){
      $(".div-3 p").slideToggle()
      $(".div-1 p").slideUp()
      $(".div-2 p").slideUp()
      $(".div-4 p").slideUp()
      $(".div-5 p").slideUp()
      $(".div-3 li i").toggleClass("active")
      $(".div-1 li i").removeClass("active")
      $(".div-2 li i").removeClass("active")
      $(".div-4 li i").removeClass("active")
      $(".div-5 li i").removeClass("active")
      $(".div-3 li").toggleClass("active")
      $(".div-1 li").removeClass("active")
      $(".div-2 li").removeClass("active")
      $(".div-4 li").removeClass("active")
      $(".div-5 li").removeClass("active")
    });
    $(".tab-4").click(function(){
      $(".div-4 p").slideToggle()
      $(".div-1 p").slideUp()
      $(".div-3 p").slideUp()
      $(".div-2 p").slideUp()
      $(".div-5 p").slideUp()
      $(".div-4 li i").toggleClass("active")
      $(".div-1 li i").removeClass("active")
      $(".div-3 li i").removeClass("active")
      $(".div-2 li i").removeClass("active")
      $(".div-5 li i").removeClass("active")
      $(".div-4 li").toggleClass("active")
      $(".div-1 li").removeClass("active")
      $(".div-3 li").removeClass("active")
      $(".div-2 li").removeClass("active")
      $(".div-5 li").removeClass("active")
    });
    $(".tab-5").click(function(){
      $(".div-5 p").slideToggle()
      $(".div-1 p").slideUp()
      $(".div-3 p").slideUp()
      $(".div-4 p").slideUp()
      $(".div-2 p").slideUp()
      $(".div-5 li i").toggleClass("active")
      $(".div-1 li i").removeClass("active")
      $(".div-3 li i").removeClass("active")
      $(".div-4 li i").removeClass("active")
      $(".div-2 li i").removeClass("active")
      $(".div-5 li").toggleClass("active")
      $(".div-1 li").removeClass("active")
      $(".div-3 li").removeClass("active")
      $(".div-4 li").removeClass("active")
      $(".div-2 li").removeClass("active")
    });

    $(".table-item-1 .btn-table-1").hover(function(){
      $(".table-item-2 .btn-table-1").toggleClass("active")
    })
    $(".table-item-3 .btn-table-1").hover(function(){
      $(".table-item-2 .btn-table-1").toggleClass("active")
    })
  
    // $(".year").hover(function(){
    //   $(this).toggleClass("active")
    //   $(".month").toggleClass("active")
    // })
    $(".year").click(function(){
      $(this).addClass("active")
      $(".month").addClass("active")
    })
    $(".month").click(function(){
      $(this).removeClass("active")
      $(".year").removeClass("active")


    })
    // $(".month").click(function(){
    //   $(".month").addClass("active")
    //   $(".year").removeClass("active")
    // })
    $(".year").click(function(){
      $(".table-item-2 .table-icon span").text("96")
    })
    $(".month").click(function(){
      $(".table-item-2 .table-icon span").text("74")
    })
    $(".year").click(function(){
      $(".table-item-3 .table-icon span").text("99")
    })
    $(".month").click(function(){
      $(".table-item-3 .table-icon span").text("84")
    })
    $(".year").click(function(){
      $(".table-item-1 .table-icon span").text("69")
    })
    $(".month").click(function(){
      $(".table-item-1 .table-icon span").text("36")
    })


    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows: true,
      },
      loop:true,
      pagination: {
        el: '.swiper-pagination',
      },
  });
    
//   AOS.init({
//     offset: 120,
//     duration: 1000,
// });


    $('.count-num').rCounter({
      duration: 50,
    });
    var waypoint = new Waypoint({
      element: document.getElementById('waypoint'),
      handler: function(direction) {
        console.log('Scrolled to waypoint!')
      }
    });
      
});

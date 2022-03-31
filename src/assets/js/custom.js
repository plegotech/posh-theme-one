
// START:: Product page Slideshow 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log("slides");
  console.log(slides);
  console.log(slideIndex);
  if (n > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// END:: Product page Slideshow 
$( function() {
    $( ".datepicker" ).each(function(){$(this).datepicker()})
    
        $( ".tabs" ).tabs();
    
    $('.calendar').each(function(){
        $(this).on('click', function(){
            $(this).closest('.datepicker').click();
        })
    })
    
    } );
    
    $(document).ready(function(){
        $(".userLogined").click(function(){
            $(this).toggleClass("showUserPro");
          });
        $("span.navbar-toggler-icon").click(function(){
            $(this).toggleClass("btn-active-list");
            $(this).parents().toggleClass("openMobileMenu");
          });
          if ($(window).width() < 990) {
            $(".side-menu>ul>li").click(function(){
                $("ul.side-submenu").slideToggle();
                $(this).toggleClass("active-list");
              });
         }
        
        // Increment a number 
        var $inputNum = $(".qty-number");
        $(".incrementNum").click(function(){
        if ($(this).hasClass('btnplus-item'))
            $inputNum.val(parseInt($inputNum.val())+1);
        else if ($inputNum.val()>=1)
            $inputNum.val(parseInt($inputNum.val())-1);
    });
    // Increment a number 
    
        $(document.body).on('click', '.eye-icon-pass i', function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('input').attr('type', 'password');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        }
        else {
            $(this).addClass('active');
            $(this).siblings('input').attr('type', 'text');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    })
        
        // DETAILS SLIDER 
        $('.slider1').owlCarousel({
        loop: true,
        thumbs: true,
        items: 1,
        responsiveClass: true, 
        autoplayHoverPause: true,
        autoplay: true,
        slideSpeed: 1000,
        paginationSpeed: 900,
        thumbsPrerendered: true,
        autoplayTimeout: 3000,
        //navText : ["<img src='img/left.png'>","<img src='img/right.png'>"],
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          360: {
            items: 1,
            nav: false
          },
          768: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 1,
            nav: false,
            loop: true
          }
        }
      });
        
        // for owl carousel
            $('#sellerCAtegories').owlCarousel({
            loop:false,
            nav:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:8
                }
            }
        });
    
    
        $('.button-left').click(function(){
            $('.sidebar').toggleClass('fliph');
        });
    
        $('.more-opt').on('click', function(){
            $(this).each(function(){
                $(this).siblings('ul').show()
            })
        })
    
        $('.cst-slct ul li').on('click', function(){
            $(this).each(function(){
                $(this).parent('ul').hide()
            })
        })
    
        $('.sub-menu').each(function(){
            $(this).on('click', function(){
                if($(this).hasClass('active_')){
                    $(this).children().children('ul').slideUp();
                    $(this).removeClass('active_');
                    $(this).children().find('.arrow').attr('src', 'img/menu-icons/arrow-down.png')
                }
                else {
                    $(this).children().children('ul').slideDown();
                    $(this).addClass('active_');
                    $(this).children().find('.arrow').attr('src', 'img/menu-icons/arrow-up.png')
                }
            })
        })
    
        $('.pdf-down').on('click', function(){
            $(this).each(function(){
                alert('File has been downloaded!');
            })
        })
    
    });
    
    
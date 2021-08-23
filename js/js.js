
      $(document).ready(function(){
        // init Isotope
        var $grid = $('.grid').isotope({
          // options
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    
    
        $('.carousel-tesimonial').owlCarousel({
          
          loop: true,
          margin: 30,
          dots: true,
          nav: false,        
      
          
          responsive:{
        0:{
            items:1,
            
        },
        767:{
            items:2
           
        }
    }
    })
    
    // claint logo section 
    $('.carousel-claint').owlCarousel({
          
          loop: true,
          margin: 60,          
          nav: false,
          autoplay:true,
          autoplayTimeout:5500,
          autoplaySpeed:2000,
          autoplayHoverPause:true,
    
      
          
          responsive:{
        0:{
            items:2,
            
        },
        767:{
            items:5
           
        }
    }
    })
    
    
    
    $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });
     
    
      });
      //  isotp End
    
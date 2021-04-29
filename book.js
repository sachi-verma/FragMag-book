  $(window).load(function(){
         $(".flipbook-viewport").css("visibility","visible");
     })
 
 
 function gradientRight() {
     
     var i;
     for (i = 2; i <=7; i = i + 2) {
         $("#" + i).addClass("gradient-right");

     }

 }
 gradientRight();

 function gradientLeft() {
    var i;
     for (i = 3; i <=7; i = i + 2) {
         $("#" + i).addClass("gradient-left");

     }

 }
 gradientLeft();

  var x = 0;  
$(".zoom").click(function(){
    x++;
    if(x%2 != 0){
        console.log('clicked');
        $(".flipbook").css("transform", "scale(1)");
    }
    else{
         $(".flipbook").css("transform", "scale(0.7)");
    }
    
    
    
})




 function loadApp() {
     var book = $('.flipbook');
    
    if (book.width() == 0 || book.height() == 0) {
						setTimeout(loadApp, 10);
						return;
					}

     // Create the flipbook

     $('.flipbook').turn({
         // Width

         width: 922,

         // Height

         height: 600,

         // Elevation

         elevation: 50,

         // Enable gradients

         gradients: true,

         // Auto center this flipbook

         autoCenter: true,

     });
    
     $( ".flipbook" ).css("transform", "scale(0.7)");



    //  $(".flipbook").bind("first", function(event) {
    //      console.log('page 1 bitch');
    //      $(this).addClass("translateCenter");

    //  });
    //   $(".flipbook").bind("last", function(event) {
    //      console.log('page 1 bitch');
    //      $(this).addClass("translateCenter");

    //  });
    



     $(document).keydown(function (e) {

         var previous = 37,
             next = 39;

         switch (e.keyCode) {
             case previous:

                 $('.flipbook').turn('previous');

                 break;
             case next:

                 $('.flipbook').turn('next');

                 break;
         }

     });
    
    
 }
 loadApp();
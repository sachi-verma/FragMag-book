  $(window).load(function () {
      $(".main-book").css("visibility", "visible");
  })


  function gradientRight() {

      var i;
      for (i = 2; i <= 7; i = i + 2) {
          $("#" + i).addClass("gradient-right");

      }

  }
  gradientRight();

  function gradientLeft() {
      var i;
      for (i = 3; i <= 7; i = i + 2) {
          $("#" + i).addClass("gradient-left");

      }

  }
  gradientLeft();

  var x = 0;
  $(".zoom").click(function () {
      x++;
      if (x % 2 != 0) {
          console.log('clicked');
          $(".flipbook").css("transform", "scale(1)");
      } else {
          $(".flipbook").css("transform", "scale(0.7)");
      }



  })


  function resizeViewport() {
      var width = $(window).width(),
          height = $(window).height();
          $('.main-book').css({
              width: width,
              height: height
          })
           $('.flipbook-viewport').css({
              width: width-300,
          })
        // if(width < 1022 && width > 500){
        //     var x = (1022 - width)/2;
        //   $(".flipbook").turn("size", 922-x, 600-x);
        // }
        if(width > height && width < 1024 ){
            if(width < 700){
                 $(".flipbook-viewport").css({"margin-left":-(800-width)});
            }
            
             $(".flipbook").css({"transform":"scale(0.6)", "margin-top": -height/8});
             $(".flipbook").turn("size", 722, 470);
             $(".flipbook-viewport").css({"width": width-100,
              "height": height });
            
              
        
        }
        else{
             $(".flipbook").turn("size", 922, 600);
              $(".flipbook").css({"transform":"scale(0.8)", "margin-top": 0, "margin-bottom": "60px"});
        }
       



  }

  $(window).resize(function () {
						resizeViewport();
  })


 




          function loadApp() {
              var book = $('.flipbook');

              if (book.width() == 0 || book.height() == 0) {
                  setTimeout(loadApp, 10);
                  return;
              }

              // Create the flipbook

              $('.flipbook').turn({

                  width: 922,

                  height: 600,

                  elevation: 50,

                  gradients: true,

                  autoCenter: true,

              });

              $(".flipbook").css("transform", "scale(0.7)");

              $(".flipbook").bind("first", function (event) {
                  $(".prev").css("visibility", "hidden");
              });

              $(".flipbook").bind("last", function (event) {
                  $(".next").css("visibility", "hidden");
              });

              $(".prev").click(function () {
                  $('.flipbook').turn('previous');
                  $(".next").css("visibility", "visible");
              })
              $(".next").click(function () {
                  $(".prev").css("visibility", "visible");
                  $('.flipbook').turn('next');
              })


              resizeViewport();


              $(document).keydown(function (e) {

                  var previous = 37,
                      next = 39;

                  switch (e.keyCode) {
                      case previous:

                          $('.flipbook').turn('previous');
                          $(".next").css("visibility", "visible");

                          break;
                      case next:

                          $('.flipbook').turn('next');
                          $(".prev").css("visibility", "visible");

                          break;
                  }

              });


          }
          loadApp();
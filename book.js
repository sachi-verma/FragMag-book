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

//   var x = 0; //zoom 
//   $(".zoom").click(function () {
//       x++;
//       if (x % 2 != 0) {
//           $(".flipbook").css("transform", "scale(0.8)");
//           $(".btns").css("margin-top", "-110px");
//       } else {
//           $(".flipbook").css("transform", "scale(0.6)");
//           $(".btns").css("margin-top", "-140px");
//       }
//   })
$(".refresh").click(function () {
    $('.flipbook').turn("page", 1);
});


  function resizeViewport() { //responsiveness
      var width = $(window).width(),
          height = $(window).height();
      $('.main-book').css({
          width: width,
          height: height
      })
      $('.flipbook-viewport').css({
          width: width

      })


      if ((width < height && width < 500) || (width > height && width < 700)) { //mobile
          $(".flipbook").css({
              "transform": "scale(0.4)"
          });
      } else if (width > height && width < 1000) {   //landscape

          $(".flipbook").css({
              "transform": "scale(0.5)"
          });
      }
     
       else {
          $(".flipbook").turn("size", 922, 600);
          $(".flipbook").css({
              "transform": "scale(0.8)",
              "margin-top": 0
          });
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
      $('.flipbook').turn({

          width: 922,

          height: 600,

          elevation: 50,

          gradients: true,

          autoCenter: true


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
      resizeViewport();
  }
  loadApp();
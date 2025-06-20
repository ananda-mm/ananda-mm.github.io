$('.navbar_secound_tab .nav .right-caret').hover(function() {

  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
});
$('.navbar-nav li.contact_drop').hover(function() {
	$('body').addClass('bgBlack').delay(100).fadeIn(100);
	$('.navbar').addClass('navBgWhite').delay(100).fadeIn(100);
	$('.side_bar').addClass('nofixed');
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);

  $('body').removeClass('bgBlack').fadeIn(100);
  $('.side_bar').removeClass('nofixed');
  $('.navbar').removeClass('navBgWhite').fadeIn(100);
});


$('.navbar-nav li.dropdown').hover(function() {

  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);

  $('body').removeClass('bgBlack').fadeIn(100);
  $('.side_bar').removeClass('nofixed');
  $('.navbar').removeClass('navBgWhite').fadeIn(100);
});


$('#datepicker').data('datepicker');
// scroll to top
$(document).ready(function() {
  
  // variables 
  var toTop = $('.to-top');
  // logic
  toTop.on('click', function() {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top,
    });
  });

});

// preloader
$(window).on('load', function() { 
  
  $('.preloader').delay(350).fadeOut('slow'); 
  $('body').delay(150).css({'overflow':'visible'});
});

// fixed navbar
$(function(){
  var shrinkHeader = 50;
   $(window).scroll(function() {
     var scroll = getCurrentScroll();
       if ( scroll >= shrinkHeader ) {
            $('.nav_fixed').addClass('shrink');
         }
         else {
             $('.nav_fixed').removeClass('shrink');
         }
   });
 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }
 });

//  megamenu
function openCity(evt, cityName) {
		
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openVehicle(evt, vehicleName) {
		
  var i, tabcontents, tablinks;
  tabcontents = document.getElementsByClassName("tabcontents");
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }
  console.log("tab is working")
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(vehicleName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openAddress(evt, plotName) {
  var i, tabcontentss, tablinks;
  tabcontentss = document.getElementsByClassName("tabcontentss");
  for (i = 0; i < tabcontentss.length; i++) {
    tabcontentss[i].style.display = "none";
  }
  console.log("tab is working")
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(plotName).style.display = "block";
  evt.currentTarget.className += " active";
}



/* Time pick script */


(function($) {

  $("#one").on('scroll', function() {
      $val = $(this).scrollTop();

      if($(this).scrollTop() + $(this).innerWidth()>=$(this)[0].scrollHeight){
          $(".upArrow").show();
        } else {
        $(".downArrow").show();
      }

      if($val == 0){
        $(".upArrow").show();
      } else {
        $(".downArrow").show();
      }
    });

  $(".upArrow").on("click", function(){
    $("#one").animate( { scrollTop: '+=30' }, 500);
  });
  $(".downArrow").on("click", function(){
    $("#one").animate( { scrollTop: '-=30' }, 500);
  });

})(jQuery);


(function($) {

  $("#two").on('scroll', function() {
      $val = $(this).scrollTop();

      if($(this).scrollTop() + $(this).innerWidth()>=$(this)[0].scrollHeight){
          $(".upArrow2").show();
        } else {
        $(".downArrow2").show();
      }

      if($val == 0){
        $(".upArrow2").show();
      } else {
        $(".downArrow2").show();
      }
    });

  $(".upArrow2").on("click", function(){
    $("#two").animate( { scrollTop: '+=30' }, 500);
  });
  $(".downArrow2").on("click", function(){
    $("#two").animate( { scrollTop: '-=30' }, 500);
  });

})(jQuery);


(function($) {

  $("#three").on('scroll', function() {
      $val = $(this).scrollTop();

      if($(this).scrollTop() + $(this).innerWidth()>=$(this)[0].scrollHeight){
          $(".upArrow3").show();
        } else {
        $(".downArrow3").show();
      }

      if($val == 0){
        $(".upArrow3").show();
      } else {
        $(".downArrow3").show();
      }
    });

  $(".upArrow3").on("click", function(){
    $("#three").animate( { scrollTop: '+=30' }, 500);
  });
  $(".downArrow3").on("click", function(){
    $("#three").animate( { scrollTop: '-=30' }, 500);
  });

})(jQuery);

(function($) {

  $("#four").on('scroll', function() {
      $val = $(this).scrollTop();

      if($(this).scrollTop() + $(this).innerWidth()>=$(this)[0].scrollHeight){
          $(".upArrow4").show();
        } else {
        $(".downArrow4").show();
      }

      if($val == 0){
        $(".upArrow4").show();
      } else {
        $(".downArrow4").show();
      }
    });

  $(".upArrow4").on("click", function(){
    $("#four").animate( { scrollTop: '+=30' }, 500);
  });
  $(".downArrow4").on("click", function(){
    $("#four").animate( { scrollTop: '-=30' }, 500);
  });

})(jQuery);

(function($) {

  $("#five").on('scroll', function() {
      $val = $(this).scrollTop();

      if($(this).scrollTop() + $(this).innerWidth()>=$(this)[0].scrollHeight){
          $(".upArrow5").show();
        } else {
        $(".downArrow5").show();
      }

      if($val == 0){
        $(".upArrow5").show();
      } else {
        $(".downArrow5").show();
      }
    });

  $(".upArrow5").on("click", function(){
    $("#five").animate( { scrollTop: '+=30' }, 500);
  });
  $(".downArrow5").on("click", function(){
    $("#five").animate( { scrollTop: '-=30' }, 500);
  });

})(jQuery);

(function($) {

  $("#six").on('scroll', function() {
      $val = $(this).scrollTop();

      if($(this).scrollTop() + $(this).innerWidth()>=$(this)[0].scrollHeight){
          $(".upArrow6").show();
        } else {
        $(".downArrow6").show();
      }

      if($val == 0){
        $(".upArrow6").show();
      } else {
        $(".downArrow6").show();
      }
    });

  $(".upArrow6").on("click", function(){
    $("#six").animate( { scrollTop: '+=30' }, 500);
  });
  $(".downArrow6").on("click", function(){
    $("#six").animate( { scrollTop: '-=30' }, 500);
  });

})(jQuery);

(function($) {

  $("#seven").on('scroll', function() {
      $val = $(this).scrollTop();

      if($(this).scrollTop() + $(this).innerWidth()>=$(this)[0].scrollHeight){
          $(".upArrow7").show();
        } else {
        $(".downArrow7").show();
      }

      if($val == 0){
        $(".upArrow7").show();
      } else {
        $(".downArrow7").show();
      }
    });

  $(".upArrow7").on("click", function(){
    $("#seven").animate( { scrollTop: '+=30' }, 500);
  });
  $(".downArrow7").on("click", function(){
    $("#seven").animate( { scrollTop: '-=30' }, 500);
  });

})(jQuery);
/* End */


	/*  Active for time pick  */
	$(document).ready(function(){
    $('.zoom__modal_calendar--timeselection-inner ul li').click(function(){
     
      $('.zoom__modal_calendar--timeselection-inner ul li').removeClass("timeactive");
      $(this).addClass("timeactive");
  });
  });
    /* Active for time pick */
  
    /*  Active for which shop  */
    $(document).ready(function(){
    $('.which_shop a').click(function(){
      $('.which_shop a').removeClass("shopactive");
      $(this).addClass("shopactive");
  });
  });
    /* End */

    $("#close1_open2").click(function() {
	
      $("#model1").modal('hide');
      $("#model2").modal('show');
  });
  $("#goBack1").click(function(){
    $("#model1").modal('show');
      $("#model2").modal('hide');
  });
  $("#close2_open3").click(function(){
    $("#model2").modal('hide');
    $("#model3").modal('show');
  });
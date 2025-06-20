// $('.jss198DataPlan').slick({
//    infinite: false,
//    arrows: false,
//    dots: false,
//    autoplay: false,
//    speed: 2000,
//    slidesToShow: 7,
//    slidesToScroll: 1,

// });

$("#partnerLogoSlide").slick({
   infinite: false,
   arrows: false,
   dots: false,
   autoplay: false,
   speed: 2000,
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.slider',
   focusOnSelect: true,
   responsive: [{
      breakpoint: 1025,
      settings: {
         slidesToShow: 2
      }
   }, {
      breakpoint: 767,
      settings: {
         slidesToShow: 1
      }
   }]
});

$("#slick-addlife").slick({
   infinite: false,
   arrows: false,
   dots: false,
   autoplay: false,
   speed: 2000,
   slidesToShow: 4,
   slidesToScroll: 1,
   // asNavFor: '.slider',
   focusOnSelect: true,
   responsive: [{
      breakpoint: 1025,
      settings: {
         slidesToShow: 2
      }
   }, {
      breakpoint: 767,
      settings: {
         slidesToShow: 1
      }
   }]
});

$(".cardsList-list").slick({
   infinite: false,
   arrows: false,
   dots: false,
   autoplay: false,
   speed: 2000,
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider',
   focusOnSelect: true,
   responsive: [{
      breakpoint: 1025,
      settings: {
         slidesToShow: 2
      }
   }, {
      breakpoint: 767,
      settings: {
         slidesToShow: 1
      }
   }]
});

$('.slider').slick({
   infinite: false,
   arrows: false,
   dots: false,
   autoplay: true,
   speed: 2000,
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.progressBarContainer'
});

$('.progressBarContainer').slick({
   infinite: false,
   arrows: false,
   dots: false,
   autoplay: false,
   speed: 2000,
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.slider',
   focusOnSelect: true,
   responsive: [{
      breakpoint: 1025,
      settings: {
         slidesToShow: 3
      }
   }, {
      breakpoint: 767,
      settings: {
         slidesToShow: 2
      }
   }]
});

$('#slick-help-content').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   dots: !1,
   arrows: !1,
   autoplay: !1,
   speed: 500,
   infinite: !0,
   focusOnSelect: !0,
   autoplaySpeed: 400,
   pauseOnHover: !0,
   fade: !0,
   asNavFor: "#slick-help",
   rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir")
});

$('#slick-help').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   dots: !1,
   arrows: !1,
   autoplay: !1,
   speed: 500,
   infinite: !0,
   cssEase: "linear",
   asNavFor: "#slick-help-content",
   focusOnSelect: !0,
   swipeToSlide: "rtl" !== document.getElementsByTagName("html")[0].getAttribute("dir"),
   rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
   responsive: [{
      breakpoint: 1024,
      settings: {
         slidesToShow: 3
      }
   }, {
      breakpoint: 800,
      settings: {
         slidesToShow: 2
      }
   }, {
      breakpoint: 600,
      settings: {
         slidesToShow: 1,
         centerMode: !0
      }
   }]
});

//ticking machine
var percentTime;
var tick;
var time = .1;
var progressBarIndex = 0;

$('.progressBarContainer .progressBar').each(function (index) {
   var progress = "<div class='inProgress inProgress" + index + "'></div>";
   $(this).html(progress);
});

function startProgressbar() {
   resetProgressbar();
   percentTime = 0;
   tick = setInterval(interval, 10);
}

function jumpBack() {
   setTimeout(function () {
      $('.slider').slick("slickGoTo", 0);
   }, 3000);
}

$('.slider').on("afterChange", function (event, slick, currentSlide, nextSlide) {
   // console.log(currentSlide);
   if (currentSlide === 3) {
      // console.log("last slide");
      jumpBack();
   }
});


function interval() {
   if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
      progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
      startProgressbar();
   } else {
      percentTime += 1 / (time + 5);
      $('.inProgress' + progressBarIndex).css({
         width: percentTime + "%"
      });
      if (percentTime >= 100) {
         $('.single-item').slick('slickNext');
         progressBarIndex++;
         if (progressBarIndex > 2) {
            progressBarIndex = 0;
         }
         startProgressbar();
         // jumpBack();
      }
   }
}

function resetProgressbar() {
   $('.inProgress').css({
      width: 0 + '%'
   });
   clearInterval(tick);
}

startProgressbar();
// End ticking machine

$('.item').click(function () {
   clearInterval(tick);
   var goToThisIndex = $(this).find("span").data("slickIndex");
   $('.single-item').slick('slickGoTo', goToThisIndex, false);
   startProgressbar();
});

$('.item').click(function () {
   clearInterval(tick);
   var goToThisIndex = $(this).find("span").data("slickIndex");
   $('.single-item').slick('slickGoTo', goToThisIndex, false);
   startProgressbar();
});

$('.footer-bottom-title').on('click', function () {
   $(this).toggleClass('active')
   $(this).closest('div')

      .find('.footer-bottom-list').toggleClass('active');
});

$(".header-wrap").each((function () {
   var e, i = $(this),
      s = $(window).scrollTop();
   $(window).scroll((function () {
      var a = $(window).scrollTop();
      clearTimeout(e), window.innerHeight + window.scrollY >= document.body.offsetHeight || (e = setTimeout((function () {
         a > s ? a > 100 && i.addClass("minimal") : i.removeClass("minimal"), s = a, clearTimeout(e)
      }), 30))
   }))
}));

$(function () {
   $(window).scroll(function () {
      var winTop = $(window).scrollTop();
      if (winTop >= 500) {
         $(".jss196").addClass("jss197");
         $(".header-wrap").addClass("minimal");
      } else {
         $(".jss196").removeClass("jss197");
         $(".header-wrap").removeClass("minimal");
      }
   })
})

$('.menulink').on('click', function () {
   // $('#MuiBackdrop-root').toggleClass('MuiBackdrop-root');
});


//apprearance
$("input.variation").on("click", function () {
   if ($(this).val() > 3) {
      $("body").css("background", "#111");
      $("footer").attr("class", "dark");
   } else {
      $("body").css("background", "#f9f9f9");
      $("footer").attr("class", "");
   }
});

// toggle list vs card view
$(".option__button").on("click", function () {
   $(".option__button").removeClass("selected");
   $(this).addClass("selected");
   if ($(this).hasClass("option--grid")) {
      $(".results-section").attr("class", "results-section results--grid");
   } else if ($(this).hasClass("option--list")) {
      $(".results-section").attr("class", "results-section results--list");
   }
});

$('#up').on('click', function () {
   $('.arrowDown').toggleClass('displayTrue');
   $('.arrowDown').toggleClass('displayFalse');
   $('.dropdown-content').toggleClass('displayTrue');
   $('.arrowUp').toggleClass('displayFalse');
});

$('#down').on('click', function () {
   $('.arrowUp').toggleClass('displayTrue');
   $('.arrowUp').toggleClass('displayFalse');
   $('.arrowDown').toggleClass('displayFalse');
   $('.dropdown-content').toggleClass('displayTrue');

   $('')
});

//devices

// $(document).ready(function() {
//    var price = 0;
//    var offset = 0;
//    var minVal = parseInt($('#minVal').val());
//    var maxVal =parseInt($('#maxVal').val());
//    var rangminVal = parseInt($('#priceRange').val().split(',')[0]);
//    var rangmaxVal = parseInt($('#priceRange').val().split(',')[1]);
//    if(minVal>rangminVal) minVal =  rangminVal;
//    if(maxVal<rangmaxVal) maxVal =  rangmaxVal;
//       $('.plp-price-slider').jRange({
//            from: minVal,
//            to: maxVal,
//            step: 100,
//            scale: [minVal,maxVal],
//            format: '%s',
//            width: 100,
//            showLabels: true,
//            isRange: true,
//          currency: 'Rs.',
//          type: 'price',
//             onstatechange: function(val)
//            {
//             $('#priceRangeQuery').val(val);      
//            }
//         });
//       $('.pointer-label:first').attr('id', 'pointer-label');
//                 $(".pointer").on('mousedown',function(){
//                   price = $('#priceRangeQuery').val();
//                    offset =1;
//                }); 
//                   $("body").on('mouseup',function(){
//                            if($('#priceRangeQuery').val() != price && offset == 1){
//                                offset =0;
//                               var varValue = $('#priceRangeQuery').val();
//                               var finalQuery = makepriceQuery(varValue);
//                               var priceRangeGA = $('#priceRange').val();
//                               $('#priceRangeQuery').val(finalQuery);
//                               dataLayer.push({'event': 'hybrisEvent1','actionData':'shop_by_price', 'new_General_Data': '<'+priceRangeGA+'>' });
//                               gaLog(dataLayer);
//                               $("#priceRangeForm").submit();
//                            }
//                          });
//                 var clickFlagpr = false;
//                $('#priceRangeForm .clickable-dummy').click(function(){
//                    if(clickFlagpr) {
//                        return;
//                    }
//                   var varValue = $('#priceRangeQuery').val();
//                    var priceRangeGA = $('#priceRange').val();
//                   var finalQuery = makepriceQuery(varValue);
//                   dataLayer.push({'event': 'hybrisEvent1','actionData':'shop_by_price', 'new_General_Data': '<'+priceRangeGA+'>' });
//                   gaLog(dataLayer);
//                   $('#priceRangeQuery').val(finalQuery);
//                   $("#priceRangeForm").submit();
//                   clickFlagpr = true;
//                }); 

//         });


function makepriceQuery(query) {
   var currentSearchQuery = $("#currentSearchQuery").val();
   var facetName = 'price';
   var arryobj = query.split(':');
   var queryary = "";

   $.each(arryobj, function (key, value) {
      if (value != null && value !== '' && value.toLowerCase() !== facetName)
         queryary += value + ":";
   });

   var onlySelectedAry = queryary.split(':');

   var finalQuery = currentSearchQuery.replace(new RegExp(facetName, 'gi'), 'xxx');
   $.each(onlySelectedAry, function (key, value) {
      if (value != null && value !== '') {
         var checkVal = facetName + ":" + value;
         if (finalQuery.indexOf(checkVal) === -1) {
            finalQuery += ":" + checkVal;
         }
      }

   });

   return finalQuery;
}

$('.nav_column').find('.item').each(function (index) {
   // $('.nav_column').find('.item').eq(index).find('a').eq(0).attr('class', 'toggleArrow');
   // alert(index);
   if (index < 4) {
      $('.nav_column').find('.item').eq(index).find('a').eq(0).remove('class', 'toggleArrow');
      $('.nav_column').find('.item').eq(index).find('.facetValues').show();
   } else {
      $('.nav_column').find('.item').eq(index).find('a').eq(0).attr('class', 'toggleArrow');
      $('.nav_column').find('.item').eq(index).find('.facetValues').hide();
   }
})

$('.brand').click(function () {

   //alert($(this).attr('title'));
   //dataLayer.push({'event': 'clickTrack','eventCategory':'Device', 'eventAction':'click', 'eventLabel':'Shop By Name','JGeneralData':$(this).attr('title')});

})


$('.nav_column').find('.item').each(function (index) {
   // $('.nav_column').find('.item').eq(index).find('a').eq(0).attr('class', 'toggleArrow');
   // alert(index);
   if (index < 4) {
      $('.nav_column').find('.item').eq(index).find('a').eq(0).remove('class', 'toggleArrow');
      $('.nav_column').find('.item').eq(index).find('.facetValues').show();
   } else {
      $('.nav_column').find('.item').eq(index).find('a').eq(0).attr('class', 'toggleArrow');
      $('.nav_column').find('.item').eq(index).find('.facetValues').hide();
   }
})


$('.brand').click(function () {

   //alert($(this).attr('title'));
   //dataLayer.push({'event': 'clickTrack','eventCategory':'Device', 'eventAction':'click', 'eventLabel':'Shop By Name','JGeneralData':$(this).attr('title')});

})

$('.decrease_').click(function () {
   decreaseValue(this);
});
$('.increase_').click(function () {
   increaseValue(this);
});

function increaseValue(_this) {
   var value = parseInt($(_this).siblings('input#number').val(), 10);
   value = isNaN(value) ? 0 : value;
   value++;
   $(_this).siblings('input#number').val(value);
}

function decreaseValue(_this) {
   var value = parseInt($(_this).siblings('input#number').val(), 10);
   value = isNaN(value) ? 0 : value;
   value < 1 ? value = 1 : '';
   value--;
   $(_this).siblings('input#number').val(value);
}


//new contact us js
function showcontactus(e) {
   $('.contactvideo').addClass('link');
   $('#nav-contact a').removeClass('active');
   $('.contactus').removeClass('link');
   $('.contactus').addClass('active');
   document.getElementById("contactus").style.display = "block";    
   document.getElementById("emaildiv").style.display ="block";    
   document.getElementById("booking").style.display = "none";
  }

function showbooking(e) {        
   $('.contactus').addClass('link');
   $('#nav-contact a').removeClass('active');
   $('.contactvideo').removeClass('link');
   $('.contactvideo').addClass('active');
   document.getElementById("booking").style.display = "block";
   document.getElementById("emaildiv").style.display ="none";  
   document.getElementById("contactus").style.display = "none";
 
}


// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

// call register modal
var rmodal = document.getElementById("ModalRegister");
var rbtn = document.getElementById("btnRegister");
var rspan = document.getElementsByClassName("close")[1];
rbtn.onclick = function () {
   rmodal.style.display = "block";
}

rspan.onclick = function () {
   rmodal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == rmodal) {
      rmodal.style.display = "none";
   }
}

var amodal = document.getElementById("ModalAppoitment");
var abtn = document.getElementById("btnAppoint");
abtn.onclick = function () {
   amodal.style.display = "block";
}
window.onclick = function (event) {
   if (event.target == amodal) {
      amodal.style.display = "none";
   }
}

$(".close").on('click', function() {
   $('#myModal').hide();
   $('#ModalRegister').hide();
   $('#ModalAppoitment').hide();
});

// var bbmodal =document.getElementById("ModalRegister");
// var bbbtn = document.getElementById("btnbb");
// bbbtn.onclick = function() {
//    bbmodal.style.display = "block";
//  }
//  window.onclick = function(event) {
//    if (event.target == bbmodal) {
//       bbmodal.style.display = "none";
//    }
//  }


$("#contactusmenu").click(function () {
   $("#contactusinfo").toggle();
});

$("#vibermenu").click(function () {
   $("#viberinfo").toggle();
});
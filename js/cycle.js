$('input[type=radio]').on('change', function() {
    $('li .cardDisplayGrid').each(function(){
      $(this).removeClass('active');
    });
    if($(this).prop('checked')) {
      $(this).parent().parent().addClass('active');
    }
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("vtabcontent");
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

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

function changeTab(e)
{
   document.getElementById("shoppingTabs").dataset.active = e.target.id;

   var data = e.target.id;

   if(data == 'tab1'){

      $('#step-data').val('tab1');
      $("#shoppingTabs").attr("data-active", "tab1");
      $('#cart-btn').html('Process to checkout');
      $('#tab1').last().addClass("is-complete");
   }

   if(data == 'tab2'){

      $('#step-data').val('tab2');
      $("#shoppingTabs").attr("data-active", "tab2");
      $('#cart-btn').html('Pace Order');
      $('#tab1').last().addClass("is-complete");
      $('#tab2').last().addClass("is-complete");
      
   }

   if(data == 'tab3'){
   
      $('#step-data').val('tab3');
      $("#shoppingTabs").attr("data-active", "tab3");
      $('#cart-btn').html('Confirm Order');
      $('#tab1').last().addClass("is-complete");
      $('#tab2').last().addClass("is-complete");
      $('#tab3').last().addClass("is-complete");
                  
   }

   if(data == 'tab4'){
      
      $('#step-data').val('tab4');
      $("#shoppingTabs").attr("data-active", "tab4");
      $('#cart-btn').html('Confirm Order');
      $('#tab1').last().addClass("is-complete");
      $('#tab2').last().addClass("is-complete");
      $('#tab3').last().addClass("is-complete");
      $('#tab4').last().addClass("is-complete");

   }
}

function newSIMChangeTab(e)
{
  document.getElementById("newSIMTabs").dataset.active = e.target.id;
} 

var $ = jQuery.noConflict();
var $_GET = {};
var slidesVisible = 5;
var slides = $('#cycle-2 img').length;
var currentSlide;


document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
   function decode(s) {
      return decodeURIComponent(s.split("+").join(" "));
   }
   $_GET[decode(arguments[1])] = decode(arguments[2]);
});

$(function () {   
   if ( $_GET["slide"] ) {
      
      $('.cycle-slideshow').cycle('goto', parseInt($_GET["slide"]) - 1);
   } 
   if ( $_GET["status"] == "pause" ) {
      $('.cycle-slideshow')
         .cycle('pause')
         .cycle('stop');
   } 
   
   initPhotoGallery();
});


function initPhotoGallery() {
   
   var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
      if($(this).attr('id') == 'cycle-1'){
         $(this).cycle('goto', opts.currSlide);
      }
      if($(this).attr('id') == 'cycle-2'){
         $(this).cycle('');
      }
   });

   $('#cycle-2 .cycle-slide').click(function(){
      
      var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
      $('#cycle-1').cycle('goto', index);
   });
    
    $('#cycle-1').on('cycle-update-view', function(e, opts) {
      
        if(opts.currSlide < slides-slidesVisible ){
            $('#cycle-2').cycle('goto', opts.currSlide);
        }   
        else
            $('#cycle-2').cycle('goto', slides-slidesVisible);            
        currentSlide = opts.currSlide;
        $('#cycle-2 .cycle-slide-active').removeClass('cycle-slide-active');
        $('#cycle-2 .cycle-slide').eq(currentSlide+1).addClass('cycle-slide-active');
   });   
    $('#cycle-2').on('cycle-update-view', function(e, opts) {
      
       $('#cycle-2 .cycle-slide-active').removeClass('cycle-slide-active');
        $('#cycle-2 .cycle-slide').eq(currentSlide+1).addClass('cycle-slide-active');        
   });
}

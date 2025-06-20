$(document).ready(function () {

         $(".accordion_border").show();
          //toggle the component with class accordion_body
          $(".accordion_head").click(function () {
              if ($('.accordion_body').is(':visible')) {
                  $(".accordion_body").slideUp(300);
                  $(".plusminus").text('+');
              }
              if ($(this).next(".accordion_body").is(':visible')) {
                  $(this).next(".accordion_body").slideUp(300);
                  $(this).children(".plusminus").text('+');
              } else {
                  $(this).next(".accordion_body").slideDown(300);
                  $(this).children(".plusminus").text('-');
              }
          });

            var videoSrc;
            var title;
          $("a#btnSupport").click(function(e){
              e.preventDefault;
              
              $videoSrc = $(this).data( "video" ); 
              title = $(this).data("title");  
              

          });

          $('#video-pop').on('shown.bs.modal', function (e) {
            
            $("#modal-video-title").html(title);
           $("#video1").attr('src',$videoSrc ); 
            
            playPause();


          });


         $('#video-pop').on('hide.bs.modal', function (e) {
           playPause();
         }) 



      });

      var myVideo = document.getElementById("video1"); 
      function playPause() { 
        if (myVideo.paused) 
          myVideo.play(); 
        else 
          myVideo.pause(); 
      }

      $('.category-list').on('change', '.special:checkbox', function(){
         
        $('a[for='+$(this).attr('id')+']').toggleClass('highlight');
      });

      $(':checkbox').change(function () {

          var option = 'content_option_' + $(this).attr('id');
          if ($('.' + option).css('display') == 'none') {
              $('.' + option).show();
          } else {
              $('.' + option).hide();
              // $('.div'+$(this).attr('target')).hide();
          }
      });

      $(':checkbox').click(function(){

         var option = 'div' + $(this).attr('id');
         // alert($('.' + option).css('display'))

             if ($('.' + option).css('display') == 'block') {

               // alert('.div'+$(this).attr('target'))
                 $(".accordion_border").hide();
                 $('.div'+$(this).attr('target')).show();
                 
             } else {
               
                 $('.div'+$(this).attr('target')).show();
             }
         
         if($('[type="checkbox"]').is(":checked")){
               
           }else{
               $(".accordion_border").show();
            }

         


      });


      $(".support-close").click(function () {

          $(this).parent().hide();
          var id = $(this).attr('id');
          
          $('#' + id).prop("checked", false);
          
          $('[for='+$(this).attr('id')+']').toggleClass('highlight');

          $('.div'+$(this).attr('id')).hide();

          $('.div'+$(this).attr('target')).hide();

          

          if($('[type="checkbox"]').is(":checked")){
               
           }else{
               $(".accordion_border").show();
            }
      });
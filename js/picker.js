//new contact us js
// function showcontactus() {
//   document.getElementById("contactus").style.display = "block";
//   document.getElementById("emaildiv").style.display = "block";
//   document.getElementById("booking").style.display = "none";
// } 

// function showbooking() {
//   document.getElementById("booking").style.display = "block";
//   document.getElementById("emaildiv").style.display = "none";
//   document.getElementById("contactus").style.display = "none";
//   document.getElementById("hrline").style.display = "none";

// }

// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal

var btnmobile = document.getElementById("myBtnMobile");

btnmobile.onclick = function () {
  modal.style.display = "block";
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
  modal.style.display = "none";
}
//
window.onclick = function (event) {
  if (event.target == rmodal) {
    rmodal.style.display = "none";
  }
}


var amodal = document.getElementById("ModalAppoitment");
var abtn = document.getElementById("btnAppoint");
var aspan = document.getElementsByClassName("close")[2];
abtn.onclick = function () {
  amodal.style.display = "block";
}
window.onclick = function (event) {
  if (event.target == amodal) {
    amodal.style.display = "none";
  }
}
aspan.onclick = function () {
  amodal.style.display = "none";
  rmodal.style.display = "none";
  modal.style.display = "none";
}

function bbtn() {
  var x = document.getElementById("myModal");
  if (x.style.display === "block") {
    x.style.display = "none";
    rmodal.style.display = "none";
    modal.style.display = "block";
  } else {
    x.style.display = "block";

  }
}


// Booking Li click 
let buttons = document.querySelectorAll(".button-categories");
document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("button-categories")) {
    buttons.forEach(function (button) {
      button.classList.remove("active");
    });
    evt.target.classList.add("active");
  }
});

//Arrow Dropdown  booking
$('#datepicker').data('datepicker');
(function ($) {

  $("#one").on('scroll', function () {
    $val = $(this).scrollTop();

    if ($(this).scrollTop() + $(this).innerWidth() >= $(this)[0].scrollHeight) {
      $(".upArrow").show();
    } else {
      $(".downArrow").show();
    }

    if ($val == 0) {
      $(".upArrow").show();
    } else {
      $(".downArrow").show();
    }
  });

  $(".upArrow").on("click", function () {
    $("#one").animate({ scrollTop: '+=30' }, 500);
  });
  $(".downArrow").on("click", function () {
    $("#one").animate({ scrollTop: '-=30' }, 500);
  });

})(jQuery);


(function ($) {

  $("#two").on('scroll', function () {
    $val = $(this).scrollTop();

    if ($(this).scrollTop() + $(this).innerWidth() >= $(this)[0].scrollHeight) {
      $(".upArrow2").show();
    } else {
      $(".downArrow2").show();
    }

    if ($val == 0) {
      $(".upArrow2").show();
    } else {
      $(".downArrow2").show();
    }
  });

  $(".upArrow2").on("click", function () {
    $("#two").animate({ scrollTop: '+=30' }, 500);
  });
  $(".downArrow2").on("click", function () {
    $("#two").animate({ scrollTop: '-=30' }, 500);
  });

})(jQuery);


(function ($) {

  $("#three").on('scroll', function () {
    $val = $(this).scrollTop();

    if ($(this).scrollTop() + $(this).innerWidth() >= $(this)[0].scrollHeight) {
      $(".upArrow3").show();
    } else {
      $(".downArrow3").show();
    }

    if ($val == 0) {
      $(".upArrow3").show();
    } else {
      $(".downArrow3").show();
    }
  });

  $(".upArrow3").on("click", function () {
    $("#three").animate({ scrollTop: '+=30' }, 500);
  });
  $(".downArrow3").on("click", function () {
    $("#three").animate({ scrollTop: '-=30' }, 500);
  });

})(jQuery);

(function ($) {

  $("#four").on('scroll', function () {
    $val = $(this).scrollTop();

    if ($(this).scrollTop() + $(this).innerWidth() >= $(this)[0].scrollHeight) {
      $(".upArrow4").show();
    } else {
      $(".downArrow4").show();
    }

    if ($val == 0) {
      $(".upArrow4").show();
    } else {
      $(".downArrow4").show();
    }
  });

  $(".upArrow4").on("click", function () {
    $("#four").animate({ scrollTop: '+=30' }, 500);
  });
  $(".downArrow4").on("click", function () {
    $("#four").animate({ scrollTop: '-=30' }, 500);
  });

})(jQuery);

(function ($) {

  $("#five").on('scroll', function () {
    $val = $(this).scrollTop();

    if ($(this).scrollTop() + $(this).innerWidth() >= $(this)[0].scrollHeight) {
      $(".upArrow5").show();
    } else {
      $(".downArrow5").show();
    }

    if ($val == 0) {
      $(".upArrow5").show();
    } else {
      $(".downArrow5").show();
    }
  });

  $(".upArrow5").on("click", function () {
    $("#five").animate({ scrollTop: '+=30' }, 500);
  });
  $(".downArrow5").on("click", function () {
    $("#five").animate({ scrollTop: '-=30' }, 500);
  });

})(jQuery);

(function ($) {

  $("#six").on('scroll', function () {
    $val = $(this).scrollTop();

    if ($(this).scrollTop() + $(this).innerWidth() >= $(this)[0].scrollHeight) {
      $(".upArrow6").show();
    } else {
      $(".downArrow6").show();
    }

    if ($val == 0) {
      $(".upArrow6").show();
    } else {
      $(".downArrow6").show();
    }
  });

  $(".upArrow6").on("click", function () {
    $("#six").animate({ scrollTop: '+=30' }, 500);
  });
  $(".downArrow6").on("click", function () {
    $("#six").animate({ scrollTop: '-=30' }, 500);
  });

})(jQuery);

(function ($) {

  $("#seven").on('scroll', function () {
    $val = $(this).scrollTop();

    if ($(this).scrollTop() + $(this).innerWidth() >= $(this)[0].scrollHeight) {
      $(".upArrow7").show();
    } else {
      $(".downArrow7").show();
    }

    if ($val == 0) {
      $(".upArrow7").show();
    } else {
      $(".downArrow7").show();
    }
  });

  $(".upArrow7").on("click", function () {
    $("#seven").animate({ scrollTop: '+=30' }, 500);
  });
  $(".downArrow7").on("click", function () {
    $("#seven").animate({ scrollTop: '-=30' }, 500);
  });

})(jQuery);
/* End */

//ddldepartment


function checkboxDropdown(el) {
  var $el = $(el)

  function updateStatus(label, result) {
    if (!result.length) {
      label.html('Select Options');
    }
  };

  $el.each(function (i, element) {
    var $list = $(this).find('.dropdown-list'),
      $label = $(this).find('.dropdown-label'),
      $checkAll = $(this).find('.check-all'),
      $inputs = $(this).find('.check'),
      defaultChecked = $(this).find('input[type=checkbox]:checked'),
      result = [];

    updateStatus($label, result);
    if (defaultChecked.length) {
      defaultChecked.each(function () {
        result.push($(this).next().text());
        $label.html(result.join(", "));
      });
    }

    $label.on('click', () => {
      $(this).toggleClass('open');
    });

    $checkAll.on('change', function () {
      var checked = $(this).is(':checked');
      var checkedText = $(this).next().text();
      result = [];
      if (checked) {
        result.push(checkedText);
        $label.html(result);
        $inputs.prop('checked', false);
      } else {
        $label.html(result);
      }
      updateStatus($label, result);
    });

    $inputs.on('change', function () {
      var checked = $(this).is(':checked');
      var checkedText = $(this).next().text();
      if ($checkAll.is(':checked')) {
        result = [];
      }
      if (checked) {
        result.push(checkedText);
        $label.html(result.join(", "));
        $checkAll.prop('checked', false);
      } else {
        let index = result.indexOf(checkedText);
        if (index >= 0) {
          result.splice(index, 1);
        }
        $label.html(result.join(", "));
      }
      updateStatus($label, result);
    });

    $(document).on('click touchstart', e => {
      if (!$(e.target).closest($(this)).length) {
        $(this).removeClass('open');
      }
    });
  });
};

checkboxDropdown('.dropdown');


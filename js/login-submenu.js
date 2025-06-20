//link 
function domo() {
    var btn = document.getElementById('sampleID');
    btn.mouseover();
    }


//login reset 
var modallogin1 =document.getElementById("loginModal");
var btnlogin1 = document.getElementById("Btnlogin1");
var spanlogin1 = document.getElementsByClassName("close")[0];
btnlogin1.onclick = function() {
  modallogin1.style.display = "block";
}
spanlogin1.onclick = function() {
  modallogin1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modallogin1) {
    modallogin1.style.display = "none";
  }
}

//login OTP
var otp =document.getElementById("OtpModal");
var btnotp = document.getElementById("otpclick");
var closeotb = document.getElementsByClassName("close")[1];
btnotp.onclick = function() {
  otp.style.display = "block";
}
closeotb.onclick = function() {
  otp.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == otp) {
    otp.style.display = "none";
  }
}


//New pass
var New_modal =document.getElementById("NewPassModal");
var btnewM = document.getElementById("newpassclick");
var closenew = document.getElementsByClassName("close")[2];
btnewM.onclick = function() {
  New_modal.style.display = "block";
}
closenew.onclick = function() {
  New_modal.style.display = "none";
  otp.style.display = "none";
  modallogin1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == New_modal) {
    New_modal.style.display = "none";
  }
}


//NewSim
var Simmodal =document.getElementById("NewSimModal");
var btnSim = document.getElementById("btnnewsimpop");
var closeSim = document.getElementsByClassName("close")[3];
btnSim.onclick = function() {
    Simmodal.style.display = "block";
}
closeSim.onclick = function() {
  $('#MuiBackdrop-root').removeClass('MuiBackdrop-root');
  $('.mlist').removeClass('hover');
  Simmodal.style.display = "none";  
}
window.onclick = function(event) {
  if (event.target == Simmodal) {
    Simmodal.style.display = "none";
  }
}

var F_modal =document.getElementById("NewSimModalfinish");
var F_btn = document.getElementById("btnfinish");
var F_close = document.getElementsByClassName("close")[4];
F_btn.onclick = function() {
    F_modal.style.display = "block";
}
F_close.onclick = function() {
    F_modal.style.display = "none"; 
    Simmodal.style.display = "none"; 
}
window.onclick = function(event) {
  if (event.target == F_modal) {
    F_modal.style.display = "none";
  }
}


//NRC
$("#file-upload").css("opacity", "0");

$("#file-browser").click(function(e) {
  e.preventDefault();
  $("#file-upload").trigger("click");
});


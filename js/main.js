var abt_pos = $("#about").offset().top - 150;
var tl_pos = $("#timeline").offset().top - 150;
var pr_pos = $("#prizes").offset().top - 150;
var fq_pos = $("#faq").offset().top - 150;
var lt_pos = $("#latest").offset().top - 150;
AOS.init();
$(document).ready(function () {
  $("#rules").click();
});
$(document).scroll(function () {
  if ($(window).scrollTop() === 0) {
    $(".navbar").removeClass("bg-pink-half");
    $(".navbar").addClass("bg-purple");
  } else {
    $(".navbar").removeClass("bg-purple");
    $(".navbar").addClass("bg-pink-half");
  }
  if ($(window).scrollTop() < abt_pos) {
    $("#hm").addClass("active");
    $("#abt").removeClass("active");
    $("#tl").removeClass("active");
    $("#pr").removeClass("active");
    $("#fq").removeClass("active");
    $("#lt").removeClass("active");
  } else if (
    $(window).scrollTop() > abt_pos &&
    $(window).scrollTop() < tl_pos
  ) {
    $("#hm").removeClass("active");
    $("#abt").addClass("active");
    $("#tl").removeClass("active");
    $("#pr").removeClass("active");
    $("#fq").removeClass("active");
    $("#lt").removeClass("active");
  } else if ($(window).scrollTop() > tl_pos && $(window).scrollTop() < pr_pos) {
    $("#hm").removeClass("active");
    $("#abt").removeClass("active");
    $("#tl").addClass("active");
    $("#pr").removeClass("active");
    $("#fq").removeClass("active");
    $("#lt").removeClass("active");
  } else if ($(window).scrollTop() > pr_pos && $(window).scrollTop() < fq_pos) {
    $("#hm").removeClass("active");
    $("#abt").removeClass("active");
    $("#tl").removeClass("active");
    $("#pr").addClass("active");
    $("#fq").removeClass("active");
    $("#lt").removeClass("active");
  } else if ($(window).scrollTop() > fq_pos && $(window).scrollTop() < lt_pos) {
    $("#hm").removeClass("active");
    $("#abt").removeClass("active");
    $("#tl").removeClass("active");
    $("#pr").removeClass("active");
    $("#fq").addClass("active");
    $("#lt").removeClass("active");
  } else if ($(window).scrollTop() > lt_pos) {
    $("#hm").removeClass("active");
    $("#abt").removeClass("active");
    $("#tl").removeClass("active");
    $("#pr").removeClass("active");
    $("#fq").removeClass("active");
    $("#lt").addClass("active");
  }
});

document.querySelectorAll(".dropdown-toggle").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropdown-toggle")) {
      event.target.classList.toggle("toggle-change");
    } else if (
      event.target.parentElement.classList.contains("dropdown-toggle")
    ) {
      event.target.parentElement.classList.toggle("toggle-change");
    }
  });
});
// Set the date we're counting down to
var countDownDate = new Date("Sept 9, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

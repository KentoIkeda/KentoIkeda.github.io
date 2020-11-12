window.onload = function(){
  setTimeout(() => {
    document.getElementsByTagName("nav")[0].style.display = "block";
  }, 100)
  setTimeout(() => {
    document.getElementById("main").style.display = "block";
    document.getElementsByTagName("footer")[0].style.display = "block";
  }, 2000)
}

var zikkou1 = 0;
var zikkou2 = 0;

function slideshow_run1(){
  if(zikkou1 == 0) {
    var mySwiper = new Swiper ('.swiper1', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides : true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  })
  zikkou1 = 1;
  }
}

function slideshow_run2(){
  if(zikkou2 == 0) {
    var mySwiper2 = new Swiper ('.swiper2', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides : true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  })
  zikkou2 = 1;
  }
}

function wok(){
  var e = document.getElementById("profile");
  e.style.display = "none";
  var f = document.getElementById("main");
  f.style.display = "block";
}

function pro(){
  var e = document.getElementById("main");
  e.style.display = "none";
  var f = document.getElementById("profile");
  f.style.display = "block";
}

function show(num){
  var e = document.getElementById("modal" + num)
  e.style.display = "block"
}

function hide(num) {
  var f = document.getElementById("modal" + num);
  f.classList.remove('animate__zoomIn');
  f.classList.add('animate__zoomOut');
  setTimeout(() => {
    f.style.display = "none";
  }, 1000)
  setTimeout(() => {
    f.classList.remove('animate__zoomOut');
    f.classList.add('animate__zoomIn');
  }, 1000)
}
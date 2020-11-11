window.onload = function(){
  setTimeout(() => {
    document.getElementsByTagName("nav")[0].style.display = "block";
  }, 100)
  setTimeout(() => {
    document.getElementById("main").style.display = "block";
    document.getElementsByTagName("footer")[0].style.display = "block";
  }, 1500)
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

function show1() {
  var e = document.getElementById("modal1");
  e.style.display = "block";
}

function show2() {
  var e = document.getElementById("modal2");
  e.style.display = "block";
}

function show3() {
  var e = document.getElementById("modal3");
  e.style.display = "block";
}

function show4() {
  var e = document.getElementById("modal4");
  e.style.display = "block";
}

function show5() {
  var e = document.getElementById("modal5");
  e.style.display = "block";
}

function show6() {
  var e = document.getElementById("modal6");
  e.style.display = "block";
}

function show7() {
  var e = document.getElementById("modal7");
  e.style.display = "block";
}

function show8() {
  var e = document.getElementById("modal8");
  e.style.display = "block";
}

function show9() {
  var e = document.getElementById("modal9");
  e.style.display = "block";
}

function show10() {
  var e = document.getElementById("modal10");
  e.style.display = "block";
}

function show11() {
  var e = document.getElementById("modal11");
  e.style.display = "block";
}

function hide1() {
  var f = document.getElementById("modal1");
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

function hide2() {
  var f = document.getElementById("modal2");
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

function hide3() {
  var f = document.getElementById("modal3");
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

function hide4() {
  var f = document.getElementById("modal4");
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

function hide5() {
  var f = document.getElementById("modal5");
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

function hide6() {
  var f = document.getElementById("modal6");
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

function hide7() {
  var f = document.getElementById("modal7");
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

function hide8() {
  var f = document.getElementById("modal8");
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

function hide9() {
  var f = document.getElementById("modal9");
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

function hide10() {
  var f = document.getElementById("modal10");
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

function hide11() {
  var f = document.getElementById("modal11");
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
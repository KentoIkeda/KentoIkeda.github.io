document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	var ld = document.getElementById('loading');
  ld.style.display = 'block';
  document.getElementById('sts').innerText = 'Loading';
});

window.onload = function() {

	document.getElementById('sts').classList.remove('animate__infinite');
	document.getElementById('sts').classList.remove('animate__flash');
	document.getElementById('sts').innerText = "UNLIMITED MY WORKS";

	setTimeout(() =>{
		var ld = document.getElementById('loading');
		ld.classList.add('animate__fadeOutRight');
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
	}, 2000)

	setTimeout(() => {
		var ld = document.getElementById('loading');
		ld.style.display = 'none';
	}, 2500)
};

function modal_open(val){
	var b = document.getElementsByTagName('body')[0];
	var e = document.getElementsByClassName('modalwindow')[val];
	e.style.display = 'block';
	b.style.overflow = 'hidden';
}

function modal_close(val){
	var b = document.getElementsByTagName('body')[0];
	var e = document.getElementsByClassName('modalwindow')[val];
	e.classList.replace('animate__fadeIn', 'animate__fadeOut');

	setTimeout(() => {
		b.style.overflow = 'visible';
		e.style.display = 'none';
		e.classList.replace('animate__fadeOut', 'animate__fadeIn');
	}, 1000)
}

//スライドショーを実効しているかどうかの判別変数
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

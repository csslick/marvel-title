var left = document.querySelector('#intro > .left');
var right = document.querySelector('#intro > .right');
var btn_close = document.querySelector('.btn_close');
var left_cover = document.querySelector('#intro .left_cover');
var right_cover = document.querySelector('#intro .right_cover');

left.addEventListener('click', function(e){
  left_cover.classList.add('active');
  right.classList.add('scale-out');
  console.log('left')
})


btn_close.addEventListener('click', function(e){
  e.preventDefault();
  e.stopPropagation(); // 요소 위치 겹칠 경우 이벤트 버블링 금지
  left_cover.classList.remove('active');
  right.classList.remove('scale-out');
  console.log('close');
})



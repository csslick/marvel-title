var left = document.querySelector('#intro > .left');
var right = document.querySelector('#intro > .right');
var btn_left_close = document.querySelector('#intro > .left .btn_close');
var btn_right_close = document.querySelector('#intro > .right .btn_close');
var left_cover = document.querySelector('#intro .left .cover');
var right_cover = document.querySelector('#intro .right .cover');

left.addEventListener('click', function(e){
  // 비활성화 상태시 클릭 안되게 
  if(this.classList.contains('scale-out')) return;
  left_cover.classList.add('active');
  right.classList.add('scale-out');
  console.log('left')
})

right.addEventListener('click', function(e){
  if(this.classList.contains('scale-out')) return;
  right_cover.classList.add('active');
  left.classList.add('scale-out');
})

btn_left_close.addEventListener('click', function(e){
  e.preventDefault();
  e.stopPropagation(); // 요소 위치 겹칠 경우 이벤트 버블링 금지
  left_cover.classList.remove('active');
  right.classList.remove('scale-out');
  console.log('close');
})

btn_right_close.addEventListener('click', function(e){
  e.preventDefault();
  e.stopPropagation(); // 요소 위치 겹칠 경우 이벤트 버블링 금지
  right_cover.classList.remove('active');
  left.classList.remove('scale-out');
})



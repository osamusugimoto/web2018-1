
function ThreeSecChange() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
  setInterval("imgchange1()",3000); } 
  

function imgchange1() {
  document.getElementById('logo2').src = './image/bulbon.gif';
}
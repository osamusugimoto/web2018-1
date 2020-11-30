function txtchange1() {
  document.getElementById('txt1').innerHTML = 'ナンバーワン！';
}

function imgchange1() {
  document.getElementById('logo').src = './image/bulbon.gif';
}
function show_innerHTMLtxt1(){
	var result1 = document.getElementById('txt1').innerHTML;
    alert(result1);
}

function show_innerHTML(){
	var result = document.getElementById('logo').innerHTML;
    alert(result);
}

// do not work
// function imgchange2() {
//   document.getElementById('logo').innerHTML = './image/bulbon.gif';
// }
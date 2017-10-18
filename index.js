window.onload = function () {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var content = document.getElementById('content').style.width = '100%';
    var content = document.getElementById('content').style.fontSize = '19' + 'px';
    // var h4 = document.getElementsByTagName('h4').style.fontSize = '24' + 'px';
    console.log(document.getElementsByClassName("mes-title").style);
  } else {
  	console.log('这是在pc端');
  }
}

window.onload = function () {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var content = document.getElementById('content').style.width = '100%';
  } else {
  	console.log('这是在pc端');
  }
}

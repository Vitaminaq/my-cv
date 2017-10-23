window.onload = function () {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var content = document.getElementById('content');
    content.style.width = '100%';
    content.style.fontSize = '19' + 'px';
  }
}

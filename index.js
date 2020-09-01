window.onload = function () {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var content = document.getElementById('content');
    content.style.width = '100%';
    content.style.fontSize = '19' + 'px';
  }
//   document.body.ontouchmove = function (e) {
//     e.preventDefault();
//   };
//   //touchstart事件  
//   var startX = 0, startY = 0;
//   function touchSatrtFunc(evt) { 
//     try
// 	{
// 	    //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
// 	    var touch = evt.touches[0]; //获取第一个触点  
//         var x = Number(touch.pageX); //页面触点X坐标  
//         var y = Number(touch.pageY); //页面触点Y坐标  
//         //记录触点初始位置  
//         startX = x;
//         startY = y;
//     } catch (e) {
//         alert('touchSatrtFunc：' + e.message);
//     }
//   }
//   document.addEventListener('touchstart', touchSatrtFunc, false);
//       var _ss = document.getElementById("content");
//     _ss.ontouchmove = function (ev) {
//         var _point = ev.touches[0],
//                 _top = _ss.scrollTop;
//         // 什么时候到底部
//         var _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;
//         // 到达顶端
//         if (_top === 0) {
//             // 阻止向下滑动
//             if (_point.clientY > startY) {
//                 ev.preventDefault();
//             } else {
//                 // 阻止冒泡
//                 // 正常执行
//                 ev.stopPropagation();
//             }
//         } else if (_top === _bottomFaVal) {
//             // 到达底部
//             // 阻止向上滑动
//             if (_point.clientY < startY) {
//                 ev.preventDefault();
//             } else {
//                 // 阻止冒泡
//                 // 正常执行
//                 ev.stopPropagation();
//             }
//         } else if (_top > 0 && _top < _bottomFaVal) {
//             ev.stopPropagation();
//         } else {
//             ev.preventDefault();
//         }
//     }
}


export const getEnumLabel = function (list, value) {
  const target = list.find(item => item.value === value)
  if (target) {
    return target.label
  }
  return null
}

var document = window.document;
// 展开/全屏
export function requestFullScreen(element) {
  var requestMethod = element.requestFullscreen || element.webkitRequestFullscreen || element.msRequestFullscreen || element.mozRequestFullScreen;
  if (requestMethod) {
    requestMethod.call(element);
  }
}
// 退出/全屏
export function exitFullScreen() {
  var exitMethod = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen;
  if (exitMethod) {
    exitMethod.call(document);
  }
}
// 判断是否全屏
export function isFullscreenElement() {
  var isFull = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement;
  return !!isFull;
}
// 查询参数转化为对象 (?query=123)
export function parseURLToObj(target) {
  let resObj = {}
  const pList = new URLSearchParams(target)
  pList.forEach((val, key) => {
    resObj[key] = val
  })
  return resObj //{key:value,key2:value2}
}
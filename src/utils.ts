export function addClass(elem, cls) {
  if (!hasClass(elem, cls)) {
    elem.className = elem.className ? elem.className + ' '  + cls : cls;
  }
}

export function removeClass(elem, cls) {
  const str = ' ' + elem.className + ' ';
  elem.className = str.replace(' ' + cls + ' ', ' ').replace(/^\s+|\s+$/g, '');
}

export function hasClass(elem, cls) {
  const str = ' ' + elem.className + ' ';
  const testCls = ' ' + cls + ' ';
  return (str.indexOf(testCls) !== -1);
}

export function toggleClass(elem, cls) {
  if (hasClass(elem, cls)) {
    removeClass(elem, cls);
  } else {
    addClass(elem, cls);
  }
}

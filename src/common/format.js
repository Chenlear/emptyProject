//  封装发布时间
const format = function (dateTimeStamp) {
  var format = dateTimeStamp.replace(/-/g, "/");
  var e = new Date(format).getTime(); //转为时间戳
  var t = new Date(),
    n = new Date(e),
    r =
      new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() -
      new Date(n.getFullYear(), n.getMonth(), n.getDate());
  r = Math.abs(r);
  var i = "";
  switch (r) {
    case 0:
      var o = Math.abs(t.getTime() - n.getTime());
      o < 36e5
        ? ((i = Math.floor(o / 1e3 / 60)),
          (i = i <= 1 ? "刚刚" : i + "分钟前"))
        : (i = Math.floor(o / 1e3 / 60 / 60) + "小时前");
      break;
    case 864e5:
      var a = n.getHours(),
        u = n.getMinutes();
      i = "昨天" + (a >= 10 ? a : "0" + a) + ":" + (u >= 10 ? u : "0" + u);
      break;
    default:
      var c = n.getMonth() + 1,
        s = n.getDate();
      (c = c > 9 ? c : "0" + c),
        (s = s > 9 ? s : "0" + s),
        (i = n.getFullYear() + "-" + c + "-" + s);
  }
  return i;
}

export default format;

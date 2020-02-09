let showDoubanList = require('./src/showDoubanList');
let showCharts = require('./src/showCharts');

hexo.extend.tag.register('douban', function (args) {
  let userName, type, pageStart, pageEnd;
  if (args[0] === "charts") {
    userName = args[1];
    type = args[2];
    pageStart = args[3];
    pageEnd = args[4];
    return showCharts(userName, type, pageStart, pageEnd);
  } else {
    userName = args[0];
    type = args[1];
    pageStart = args[2];
    pageEnd = args[3];
    return showDoubanList(userName, type, pageStart, pageEnd);
  }


}, { async: true });
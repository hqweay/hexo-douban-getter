let showDoubanList = require('./src/showDoubanList');
// let showCharts = require('./src/showCharts');
let indexRender = require('./src/indexRender');

hexo.extend.tag.register('douban', function (args) {
  if (args[0] === "charts") {

  } else if (args[0] === "book" || args[0] === "movie" || args[0] === "music" || args[0] === "game") {
    return indexRender({
      type: args[0],
      userName: args[1],
      pageStart: args[2] || 1,
      pageEnd: args[3] || 1,
      titleLevel: args[4] || "h3"
    });
  } else {
    return showDoubanList({
      userName: args[0],
      type: args[1],
      pageStart: args[2] || 1,
      pageEnd: args[3] || 1,
      titleLevel: args[4] || "h3"
    });
  }


}, { async: true });
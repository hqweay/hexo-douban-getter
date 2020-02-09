const { DoubanTypeEnum } = require('markall-douban-backup');

let { movieTemplateRender } = require('./itemTemplateRender');


function getListTemplateRender(type, data) {
  let listHtml = '<div class="hexo-douban-getter-movies">';
  for (let index in data) {
    if (type === DoubanTypeEnum.watchedMovies || type === DoubanTypeEnum.wishMovies || type === DoubanTypeEnum.watchingMovies) {
      listHtml += movieTemplateRender(data[index]);
    }
  }
  listHtml += "</div>";
  return listHtml;
}
module.exports = getListTemplateRender;
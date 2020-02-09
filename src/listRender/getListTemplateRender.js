const { DoubanTypeEnum } = require('markall-douban-backup');

let { movieTemplateRender, bookTemplateRender, musicTemplateRender, gameTemplateRender } = require('./itemTemplateRender');


function getListTemplateRender(type, data) {
  let listHtml = '<div class="hexo-douban-getter-movies">';
  listHtml += `<h1>${type}</h1>`;
  for (let index in data) {
    listHtml += `<h2>${data[index].title || data[index].name}</h2 > `;
    if (type === DoubanTypeEnum.watchedMovies || type === DoubanTypeEnum.wishMovies || type === DoubanTypeEnum.watchingMovies) {
      listHtml += movieTemplateRender(data[index]);
    } else if (type === DoubanTypeEnum.readBooks || type === DoubanTypeEnum.wishBooks || type === DoubanTypeEnum.readingBooks) {
      listHtml += bookTemplateRender(data[index]);
    } else if (type === DoubanTypeEnum.listenedMusics || type === DoubanTypeEnum.wishMusics || type === DoubanTypeEnum.listeningMusics) {
      listHtml += musicTemplateRender(data[index]);
    } else if (type === DoubanTypeEnum.playedGames || type === DoubanTypeEnum.wishGames || type === DoubanTypeEnum.playingGames) {
      listHtml += gameTemplateRender(data[index]);
    }
  }
  listHtml += "</div>";
  return listHtml;
}
module.exports = getListTemplateRender;
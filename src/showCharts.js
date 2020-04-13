// @deprected
const { createDoubanDataGetter, DoubanTypeEnum } = require('douban-getter');
let getTagCloud = require('hexo-douban-getter/src/chartRender/getTagCloud');

function showCharts(userName, type, pageStart, pageEnd) {
  switch (type) {
    case DoubanTypeEnum.watchedMovies:
      let getDoubanWatchedMovies = createDoubanDataGetter(DoubanTypeEnum.watchedMovies);
      return getDoubanWatchedMovies(userName, pageStart, pageEnd).then(function (data) {
        console.log("render TagCloud");
        return getTagCloud(type, data);
      })
      break;
    case DoubanTypeEnum.wishMovies:
      let getDoubanWishMovies = createDoubanDataGetter(DoubanTypeEnum.wishMovies);
      return getDoubanWishMovies(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.watchingMovies:
      let getDoubanWatchingMovies = createDoubanDataGetter(DoubanTypeEnum.watchingMovies);
      return getDoubanWatchingMovies(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.readBooks:
      let getDoubanReadBooks = createDoubanDataGetter(DoubanTypeEnum.readBooks);
      return getDoubanReadBooks(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.wishBooks:
      let getDoubanWishBooks = createDoubanDataGetter(DoubanTypeEnum.wishBooks);
      return getDoubanWishBooks(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.readingBooks:
      let getDoubanReadingBooks = createDoubanDataGetter(DoubanTypeEnum.readingBooks);
      return getDoubanReadingBooks(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.listenedMusics:
      let getDoubanListenedMusics = createDoubanDataGetter(DoubanTypeEnum.listenedMusics);
      return getDoubanListenedMusics(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.wishMusics:
      let getDoubanWishMusics = createDoubanDataGetter(DoubanTypeEnum.wishMusics);
      return getDoubanWishMusics(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.listeningMusics:
      let getDoubanListeningMusics = createDoubanDataGetter(DoubanTypeEnum.listeningMusics);
      return getDoubanListeningMusics(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.playedGames:
      let getDoubanPlayedGames = createDoubanDataGetter(DoubanTypeEnum.playedGames);
      return getDoubanPlayedGames(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.wishGames:
      let getDoubanWishGames = createDoubanDataGetter(DoubanTypeEnum.wishGames);
      return getDoubanWishGames(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.playingGames:
      let getDoubanPlayingGames = createDoubanDataGetter(DoubanTypeEnum.playingGames);
      return getDoubanPlayingGames(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;

    default:
      break;
  }
}
module.exports = showCharts;
const { createDoubanDataGetter, DoubanTypeEnum } = require('douban-getter');
let getListTemplateRender = require('hexo-douban-getter/src/listRender/getListTemplateRender');

function showDoubanList(userName, type, pageStart, pageEnd, titleLevel) {
  switch (type) {
    case DoubanTypeEnum.watchedMovies:
      let getDoubanWatchedMovies = createDoubanDataGetter(DoubanTypeEnum.watchedMovies);
      return getDoubanWatchedMovies(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.wishMovies:
      let getDoubanWishMovies = createDoubanDataGetter(DoubanTypeEnum.wishMovies);
      return getDoubanWishMovies(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.watchingMovies:
      let getDoubanWatchingMovies = createDoubanDataGetter(DoubanTypeEnum.watchingMovies);
      return getDoubanWatchingMovies(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.readBooks:
      let getDoubanReadBooks = createDoubanDataGetter(DoubanTypeEnum.readBooks);
      return getDoubanReadBooks(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.wishBooks:
      let getDoubanWishBooks = createDoubanDataGetter(DoubanTypeEnum.wishBooks);
      return getDoubanWishBooks(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.readingBooks:
      let getDoubanReadingBooks = createDoubanDataGetter(DoubanTypeEnum.readingBooks);
      return getDoubanReadingBooks(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.listenedMusics:
      let getDoubanListenedMusics = createDoubanDataGetter(DoubanTypeEnum.listenedMusics);
      return getDoubanListenedMusics(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.wishMusics:
      let getDoubanWishMusics = createDoubanDataGetter(DoubanTypeEnum.wishMusics);
      return getDoubanWishMusics(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.listeningMusics:
      let getDoubanListeningMusics = createDoubanDataGetter(DoubanTypeEnum.listeningMusics);
      return getDoubanListeningMusics(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.playedGames:
      let getDoubanPlayedGames = createDoubanDataGetter(DoubanTypeEnum.playedGames);
      return getDoubanPlayedGames(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.wishGames:
      let getDoubanWishGames = createDoubanDataGetter(DoubanTypeEnum.wishGames);
      return getDoubanWishGames(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;
    case DoubanTypeEnum.playingGames:
      let getDoubanPlayingGames = createDoubanDataGetter(DoubanTypeEnum.playingGames);
      return getDoubanPlayingGames(userName, pageStart, pageEnd).then(function (data) {
        return getListTemplateRender(type, data, titleLevel);
      })
      break;

    default:
      break;
  }
}
module.exports = showDoubanList;
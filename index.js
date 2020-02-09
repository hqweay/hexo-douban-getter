const { createDoubanDataGetter, saveDoubanData, DoubanTypeEnum } = require('markall-douban-backup');

let getListTemplateRender = require('./src/getListTemplateRender');


hexo.extend.tag.register('douban', function (args) {
  let userName = args[0];
  var type = args[1];

  switch (type) {
    case DoubanTypeEnum.watchedMovies:
      let getDoubanWatchedMovies = createDoubanDataGetter(DoubanTypeEnum.watchedMovies);
      return getDoubanWatchedMovies(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.wishMovies:
      let getDoubanWishMovies = createDoubanDataGetter(DoubanTypeEnum.wishMovies);
      return getDoubanWishMovies(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.watchingMovies:
      let getDoubanWatchingMovies = createDoubanDataGetter(DoubanTypeEnum.watchingMovies);
      return getDoubanWatchingMovies(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.readBooks:
      let getDoubanReadBooks = createDoubanDataGetter(DoubanTypeEnum.readBooks);
      return getDoubanReadBooks(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.wishBooks:
      let getDoubanWishBooks = createDoubanDataGetter(DoubanTypeEnum.wishBooks);
      return getDoubanWishBooks(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.readingBooks:
      let getDoubanReadingBooks = createDoubanDataGetter(DoubanTypeEnum.readingBooks);
      return getDoubanReadingBooks(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.listenedMusics:
      let getDoubanListenedMusics = createDoubanDataGetter(DoubanTypeEnum.listenedMusics);
      return getDoubanListenedMusics(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.wishMusics:
      let getDoubanWishMusics = createDoubanDataGetter(DoubanTypeEnum.wishMusics);
      return getDoubanWishMusics(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.listeningMusics:
      let getDoubanListeningMusics = createDoubanDataGetter(DoubanTypeEnum.listeningMusics);
      return getDoubanListeningMusics(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.playedGames:
      let getDoubanPlayedGames = createDoubanDataGetter(DoubanTypeEnum.playedGames);
      return getDoubanPlayedGames(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.wishGames:
      let getDoubanWishGames = createDoubanDataGetter(DoubanTypeEnum.wishGames);
      return getDoubanWishGames(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;
    case DoubanTypeEnum.playingGames:
      let getDoubanPlayingGames = createDoubanDataGetter(DoubanTypeEnum.playingGames);
      return getDoubanPlayingGames(userName, pageStart = 1, pageEnd = 1).then(function (data) {
        return getListTemplateRender(type, data);
      })
      break;

    default:
      break;
  }
}, { async: true });
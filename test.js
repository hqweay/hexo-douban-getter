// 参考 example.js
let { createDoubanDataGetter, saveDoubanData, DoubanTypeEnum } = require('markall-douban-backup');

// 存储路径
const STORE_PATH = "douban-data-backup/";

let getDoubanWatchedMovies = createDoubanDataGetter("watchedMovies");

getDoubanWatchedMovies("hqweay", 15).then(function (data) {

  saveDoubanData(data, STORE_PATH, "watchedMovies");
})


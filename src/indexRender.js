let showDoubanList = require('./showDoubanList');

async function indexRender(config) {

  let itemPages = getItemPages(config);

  let indexPage = `
  <div class = "hexo-douban-index">
    <script>
      function change(that){
      let done = document.getElementById("hexo-douban-done");
      let doing = document.getElementById("hexo-douban-doing");
      let todo = document.getElementById("hexo-douban-todo");
      done.style.display = "none";
      doing.style.display = "none";
      todo.style.display = "none";
      if(that.id === "nav-done"){
        done.style.display = "block";
      }else if(that.id === "nav-doing"){
        doing.style.display = "block";
      }else if(that.id === "nav-todo"){
        todo.style.display = "block";
      }
    }
    </script>
    <div class="hexo-douban-nav">
      <button id="nav-done" onclick="change(this)">
      ${config.type === "book" ? "读过" : config.type === "movie" ? "看过" : config.type === "music" ? "听过" : config.type === "game" ? "玩过" : ""}
      </button>
      <button id="nav-doing" onclick="change(this)">
      ${config.type === "book" ? "在读" : config.type === "movie" ? "在看" : config.type === "music" ? "在听" : config.type === "game" ? "在玩" : ""}
      </button>
      <button id="nav-todo" onclick="change(this)">
      ${config.type === "book" ? "想读" : config.type === "movie" ? "想看" : config.type === "music" ? "想听" : config.type === "game" ? "想玩" : ""}
      </button>
    </div>
  `;

  await itemPages.done.then(val => {
    indexPage += `
    <div id = "hexo-douban-done" >
     ${val}
    </div>
    `;
  })
  await itemPages.doing.then(val => {
    indexPage += `
    <div id = "hexo-douban-doing" style="display:none;">
     ${val}
    </div>
    `
  })
  await itemPages.todo.then(val => {
    indexPage += `
    <div id = "hexo-douban-todo" style="display:none;">
     ${val}
    </div>
    </div>
    `
  })
  return indexPage;
}

function getItemPages(config) {
  if (config.type === "book") {
    let readBooks = showDoubanList({
      type: "readBooks",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    let readingBooks = showDoubanList({
      type: "readingBooks",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    let wishBooks = showDoubanList({
      type: "wishBooks",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });

    return {
      done: readBooks,
      doing: readingBooks,
      todo: wishBooks
    };
  }
  if (config.type === "movie") {
    let watchedMovies = showDoubanList({
      type: "watchedMovies",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    let watchingMovies = showDoubanList({
      type: "watchingMovies",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    let wishMovies = showDoubanList({
      type: "wishMovies",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    return {
      done: watchedMovies,
      doing: watchingMovies,
      todo: wishMovies
    };
  }
  if (config.type === "music") {
    let listenedMusics = showDoubanList({
      type: "listenedMusics",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    let listeningMusics = showDoubanList({
      type: "listeningMusics",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    let wishMusics = showDoubanList({
      type: "wishMusics",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    return {
      done: listenedMusics,
      doing: listeningMusics,
      todo: wishMusics
    };
  }
  if (config.type === "game") {
    let playedGames = showDoubanList({
      type: "playedGames",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    let playingGames = showDoubanList({
      type: "playingGames",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    let wishGames = showDoubanList({
      type: "wishGames",
      userName: config.userName,
      pageStart: config.pageStart,
      pageEnd: config.pageEnd,
      titleLevel: config.titleLevel
    });
    return {
      done: playedGames,
      doing: playingGames,
      todo: wishGames
    };
  }
}

module.exports = indexRender;
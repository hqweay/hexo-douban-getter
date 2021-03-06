const { DoubanTypeEnum } = require('douban-getter');

let { movieTemplateRender, bookTemplateRender, musicTemplateRender, gameTemplateRender } = require('./itemTemplateRender');


function getListTemplateRender(type, data, titleLevel) {
  let listHtml = '<div class="hexo-douban-getter-movies">';
  // listHtml += `<h2>${type}</h2>`;
  for (let index in data) {
    listHtml += `<${titleLevel} id = "${data[index].title || data[index].name} - ${Math.floor(Math.random() * (99 - 0)) + 0}">${data[index].title || data[index].name}</${titleLevel}> `;
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
  // 通用 JS 放这
  listHtml += `
  <script>
  function imgError(that){
   that.style.display = "none";
  }
  </script>
  </div>`;
  return listHtml;

  // <script>
  // 通过判断浏览器隐藏
  // if(navigator.userAgent.indexOf("Safari") > -1){
  //   console.log(navigator.userAgent);
  //   document.querySelectorAll('.hexo-douban-pic').forEach((img)=>{
  //     img.style.display = "none";
  //   })
  // }
  // </script>  
}
module.exports = getListTemplateRender;
function movieTemplateRender(item) {
  return `
    <div class="hexo-douban-movie" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;"> 
    <div class ="hexo-douban-pic" style="width: 50%;">
       <img src="${item.pic}" onerror="imgError(this)"
        style="width:135px; height:192px; display:inline-block; margin-right:14px;"  referrerpolicy="no-referrer" 
       />
      </div>
      <div class ="hexo-douban-title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
      <div class ="hexo-douban-rate">
        评分：${item.rate}
      </div>
      <div class ="hexo-douban-comment">
        评论：${item.comment}
      </div>
      <div class ="hexo-douban-tags">
        标签：${item.tags}
      </div>
        <div class ="hexo-douban-date">
        标记时间：${item.date}
      </div>
      </div>`;
}

function bookTemplateRender(item) {
  return `
    <div class="hexo-douban-book" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;">
    <div class ="hexo-douban-pic" style="width: 50%;">
       <img src="${item.pic}" onerror="imgError(this)"
        style="width: 135px; height: 192px; display:inline-block; margin-right: 14px;"  referrerpolicy="no-referrer" 
       />
      </div>
      <div class ="hexo-douban-title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
      <div class ="hexo-douban-rate">
        评分：${item.rate}
      </div>
      <div class ="hexo-douban-pub">
        出版信息：${item.pub}
      </div>
      <div class ="hexo-douban-date">
        标记时间：${item.date}
      </div>
      <div class ="hexo-douban-comment">
        评论：${item.comment}
      </div>
      <div class ="hexo-douban-tags">
        标签：${item.tags}
      </div>
    </div>`;
}

function musicTemplateRender(item) {
  return `
    <div class="hexo-douban-music" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;"> 
      <div class ="hexo-douban-pic" style="width: 50%;">
       <img src="${item.pic}" onerror="imgError(this)""
        style="width: 135px; height: 192px; display:inline-block; margin-right: 14px;"  referrerpolicy="no-referrer" 
       />
      </div>
      <div class ="hexo-douban-title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
      <div class ="hexo-douban-rate">
        评分：${item.rate}
      </div>
      <div class ="hexo-douban-intro">
        介绍：${item.intro}
      </div>
       <div class ="hexo-douban-date">
        标记时间：${item.date}
      </div>
      <div class ="hexo-douban-comment">
        评论：${item.comment}
      </div>
      <div class ="hexo-douban-tags">
        标签：${item.tags}
      </div>
    </div>`;
}

function gameTemplateRender(item) {
  return `
    <div class="hexo-douban-game" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;">
    </script>
      <div class ="hexo-douban-pic" style="width: 50%;">
       <img src="${item.pic}" onerror="imgerror(this)"
        style="width: 135px; height: 192px; display:inline-block; margin-right: 14px;"  referrerpolicy="no-referrer" 
       />
      </div>
      <div class ="hexo-douban-title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
      <div class ="hexo-douban-rate">
        评分：${item.rate}
      </div>
      <div class ="hexo-douban-intro">
        介绍：${item.intro}
      </div>
       <div class ="hexo-douban-date">
        标记时间：${item.date}
      </div>
      <div class ="hexo-douban-comment">
        评论：${item.comment}
      </div>
      <div class ="hexo-douban-tags">
        标签：${item.tags}
      </div>
    </div>`;
}

function singleMovieTemplateRender(item) {
  return `
    <div class="hexo-douban-movie" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;"> 
    <div class ="hexo-douban-pic" style="width: 50%;">
       <img src="${item.pic}" onerror="imgError(this)"
        style="width:135px; height:192px; display:inline-block; margin-right:14px;"  referrerpolicy="no-referrer" 
       />
      </div>
      <div class ="hexo-douban-title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
      <div class ="hexo-douban-rate">
        评分：${item.rate}
      </div>
      <div class ="hexo-douban-intro">
        简介：${item.intro.length > 50 ? item.intro.substring(0, 50) + "..." : item.intro}
      </div>
      </div>`;
}

function singleBookTemplateRender(item) {
  return `
    <div class="hexo-douban-book" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;">
    <div class ="hexo-douban-pic" style="width: 50%;">
       <img src="${item.pic}" onerror="imgError(this)"
        style="width: 135px; height: 192px; display:inline-block; margin-right: 14px;"  referrerpolicy="no-referrer" 
       />
      </div>
      <div class ="hexo-douban-title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
      <div class ="hexo-douban-rate">
        评分：${item.rate}
      </div>
      <div class ="hexo-douban-intro">
        简介：${item.intro.length > 50 ? item.intro.substring(0, 50) + "..." : item.intro}
      </div>
    </div>`;
}
module.exports = {
  movieTemplateRender, bookTemplateRender, musicTemplateRender,
  gameTemplateRender, singleMovieTemplateRender, singleBookTemplateRender
};
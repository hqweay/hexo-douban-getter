function movieTemplateRender(item) {
  return `
    <div class="hexo-douban-movie" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;"> 
    <div class ="title">
      <a href="${item.url}" target="_blank">
      ${item.name}
      </a>
    </div>
    <div class ="pic" style="width: 50%;" onclick = "event.stopPropagation();">
      <img src="${item.pic}"></img>
    </div>
    <div class ="comment">
    评论：${item.comment}
    </div>
    <div class ="tags">
    标签：${item.oldTags}
    </div>
    </div>`;
}

module.exports = { movieTemplateRender };
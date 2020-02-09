function movieTemplateRender(item) {
  return `
    <div class="hexo-douban-movie" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;"> 
      <div class ="pic" style="width: 50%;">
       <img src="${item.pic}" onerror="this.style.display='none'"
        style="width: 135px; height: 192px; display:inline-block; margin-right: 14px;"  referrerpolicy="no-referrer" 
       ></img>
      </div>
      <div class ="title">
        <a href="${item.url}" target="_blank">
        ${item.name}
        </a>
      </div>
      <div class ="comment">
        评论：${item.comment}
      </div>
      <div class ="tags">
        标签：${item.oldTags}
      </div>
    </div>`;
}

function bookTemplateRender(item) {
  return `
    <div class="hexo-douban-movie" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;"> 
      <div class ="pic" style="width: 50%;">
       <img src="${item.pic}" onerror="this.style.display='none'"
        style="width: 135px; height: 192px; display:inline-block; margin-right: 14px;"  referrerpolicy="no-referrer" 
       ></img>
      </div>
      <div class ="title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
       <div class ="pub">
        出版信息：${item.pub}
      </div>
       <div class ="date">
        标记时间：${item.date}
      </div>
      <div class ="comment">
        评论：${item.comment}
      </div>
      <div class ="tags">
        标签：${item.oldTags}
      </div>
    </div>`;
}

function musicTemplateRender(item) {
  return `
    <div class="hexo-douban-movie" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;"> 
      <div class ="pic" style="width: 50%;">
       <img src="${item.pic}" onerror="this.style.display='none'"
        style="width: 135px; height: 192px; display:inline-block; margin-right: 14px;"  referrerpolicy="no-referrer" 
       ></img>
      </div>
      <div class ="title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
       <div class ="intro">
        介绍：${item.intro}
      </div>
       <div class ="date">
        标记时间：${item.date}
      </div>
      <div class ="comment">
        评论：${item.comment}
      </div>
      <div class ="tags">
        标签：${item.oldTags}
      </div>
    </div>`;
}

function gameTemplateRender(item) {
  return `
    <div class="hexo-douban-movie" style="position:relative;width:60%;border:1px solid #666;border-radius: 4px;margin:10px auto;padding: 10px;"> 
      <div class ="pic" style="width: 50%;">
       <img src="${item.pic}" onerror="this.style.display='none'"
        style="width: 135px; height: 192px; display:inline-block; margin-right: 14px;"  referrerpolicy="no-referrer" 
       ></img>
      </div>
      <div class ="title">
        <a href="${item.url}" target="_blank">
        ${item.title}
        </a>
      </div>
       <div class ="intro">
        介绍：${item.intro}
      </div>
       <div class ="date">
        标记时间：${item.date}
      </div>
      <div class ="comment">
        评论：${item.comment}
      </div>
      <div class ="tags">
        标签：${item.oldTags}
      </div>
    </div>`;
}

module.exports = { movieTemplateRender, bookTemplateRender, musicTemplateRender, gameTemplateRender };
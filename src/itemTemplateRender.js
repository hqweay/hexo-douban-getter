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
  // return `
  //   <div class="hexo-douban-movie" style="display: flex;"> 

  //   <div class ="pic" style="width: 50%;"">
  //     <img src="${item.pic}" onerror="this.src='https://leay.net/img/avatar.png'" ></img>
  //   </div>

  //   <div class = "content" style="align-items:center;">
  //     <div class ="title">
  //       <a href="${item.url}" target="_blank">
  //         ${item.name}
  //       </a>
  //     </div>
  //     <div class ="comment">
  //       评论：${item.comment}
  //     </div>
  //     <div class ="tags">
  //      标签：${item.oldTags}
  //     </div>

  //     </div>
  //   </div>`;
}

module.exports = { movieTemplateRender };
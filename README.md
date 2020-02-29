# Demo

做了两个页面阔以看看效果：

[豆瓣标记为看过影视列表展示](https://leay.net/2020/02/09/watched-movies/)

[豆瓣标记为读过书籍列表展示](https://leay.net/2020/02/09/read-books/)

Demo 随时可能会失效。

# 使用

```bash
yarn add https://github.com/hqweay/hexo-douban-getter.git
```

```markdown
// post.md
{% douban userName type pageStart pageEnd %}

// example
{% douban "hqweay" "watchedMovies" 1 3 %}
```

## 参数说明

| 参数      | 说明                           |
| --------- | ------------------------------ |
| userName  | 豆瓣 id                        |
| type      | 标记数据类型（支持类型见下文） |
| pageStart | 获取数据开始页                 |
| pageEnd   | 获取数据结束页                 |

## type 支持参数

```javascript
const DoubanTypeEnum = {
  "watchedMovies": "watchedMovies",
  "wishMovies": "wishMovies",
  "watchingMovies": "watchingMovies",
  "readBooks": "readBooks",
  "wishBooks": "wishBooks",
  "readingBooks": "readingBooks",
  "listenedMusics": "listenedMusics",
  "wishMusics": "wishMusics",
  "listeningMusics": "listeningMusics",
  "playedGames": "playedGames",
  "wishGames": "wishGames",
  "playingGames": "playingGames",
}
```

# TODO

- [ ] 按条目 id 展示条目信息
- [ ] 数据缓存至本地
- [ ] ~~给做一些可视化~~（遇到了一些难点，可能做不了。）

# 展示

## 读过书籍

![](https://github.com/hqweay/hexo-douban-getter/blob/master/examples/readBooks.png?raw=true)

## 看过影视

![](https://github.com/hqweay/hexo-douban-getter/blob/master/examples/watchedMovies.png?raw=true)

## ...

其它的就不一一列举了...

# 说明

该项目使用了 [douban-getter](https://github.com/hqweay/douban-getter) 提供的获取豆瓣标记数据的方法。

开发过程中参考了 [hexo-tag-douban](https://github.com/YuyingWu/hexo-tag-douban)


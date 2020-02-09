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

该项目使用了 [markall-douban-getter](https://github.com/hqweay/markall-douban-getter) 提供的获取豆瓣标记数据的方法。

接下来打算把展示某一条条目信息也做了...

还有就是数据在本地缓存一下...

# 展示

## 读过书籍

![](https://github.com/hqweay/hexo-douban-getter/blob/master/examples/readBooks.png?raw=true)

## 看过影视

![](https://github.com/hqweay/hexo-douban-getter/blob/master/examples/watchedMovies.png?raw=true)

## ...

其它的就不一一列举了...
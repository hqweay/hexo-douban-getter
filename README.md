## ChangeLog

- 2020-04-13：支持某类别标记数据的展示，并提供状态间的切换按钮。比如书籍有看过、在看、想看三种状态，现在可以在一个页面展示并切换显示。
- ==[2022-03-26]：现在支持根据 uid 展示书籍和影视的信息了！==

**有自定义需求的朋友可以魔改代码或者利用  [douban-getter](https://github.com/hqweay/douban-getter) 写自己的插件。**

## Demo

**Demo** ：

[豆瓣的书籍标记数据展示 Demo](https://leay.net/2020/04/13/hexo-douban-getter/#demo)

## 使用

```bash
yarn add https://github.com/hqweay/hexo-douban-getter.git
```

### 根据 uid 展示书籍或影视的信息

```
// post.md
{% douban type uid %}

// example
{% douban book 35732399 %}
```

#### 参数说明

| 参数     | 说明                           |
| -------- | ------------------------------ |
| userName | 豆瓣 id                        |
| type     | 标记数据类型（支持类型见下文） |
| uid      | 豆瓣条目详情页面 URL 中的 uid  |

#### type 支持参数

```
const DoubanTypeEnum = {
  "book": "book",
  "movie": "movie",
}
```

### 展示单项标记数据

展示看过的影视、读过的书籍……

```markdown
// post.md
{% douban userName type pageStart pageEnd titleLevel %}

// example
{% douban "hqweay" "watchedMovies" 1 3 h3 %}
```

#### 参数说明

| 参数       | 说明                                    |
| ---------- | --------------------------------------- |
| userName   | 豆瓣 id                                 |
| type       | 标记数据类型（支持类型见下文）          |
| pageStart  | 获取数据开始页                          |
| pageEnd    | 获取数据结束页                          |
| titleLevel | 【可选】标记数据的标题层级，默认为 h3。 |

#### type 支持参数

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

### 展示某类别标记数据

展示影视对应的看过、在看、想看，书籍对应的读过、在读、想读……三种状态的标记数据。

提供切换按钮。

```markdown
// post.md
{% douban type userName pageStart pageEnd titleLevel %}

// example
{% douban book "hqweay" 1 1 %}
```

### 参数说明

| 参数       | 说明                                    |
| ---------- | --------------------------------------- |
| type       | 标记数据类型（支持类型见下文）          |
| userName   | 豆瓣 id                                 |
| pageStart  | 获取数据开始页                          |
| pageEnd    | 获取数据结束页                          |
| titleLevel | 【可选】标记数据的标题层级，默认为 h3。 |

#### type 支持参数

* book
* movie
* music
* game

## TODO

- [ ] 数据缓存至本地
- [ ] 分页？

## 展示

仅作参考，建议查看 [Demo](https://leay.net/2020/04/13/hexo-douban-getter/#demo) 。

[所有截图示例](https://github.com/hqweay/hexo-douban-getter/tree/master/examples)

### 能在状态间切换啦

![](https://github.com/hqweay/hexo-douban-getter/blob/master/examples/change.png?raw=true)

## 说明

该项目使用了 [douban-getter](https://github.com/hqweay/douban-getter) 提供的获取豆瓣标记数据的方法。

开发过程中参考了 [hexo-tag-douban](https://github.com/YuyingWu/hexo-tag-douban)

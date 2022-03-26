const { getDoubanItemInfo, DoubanTypeEnum } = require('douban-getter');
let { singleBookTemplateRender, singleMovieTemplateRender } = require('hexo-douban-getter/src/listRender/itemTemplateRender.js');

function itemRender(config) {
	let type = config.type;
	let id = config.id;
	switch (type) {
		case DoubanTypeEnum.movie:
			return getDoubanItemInfo(type, id).then(data => {
				return singleMovieTemplateRender(data[0]);
			})
			break;
		case DoubanTypeEnum.book:
			return getDoubanItemInfo(type, id).then(function (data) {
				return singleBookTemplateRender(data[0]);
			})
			break;
		default:
			break;
	}
}



module.exports = itemRender;
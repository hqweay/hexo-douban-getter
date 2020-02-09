
function getTagCloud(type, data) {

  let tagMap = new Map();

  for (let index in data) {
    data[index].tags.forEach(element => {
      if (tagMap.has(element)) {
        tagMap.set(element, tagMap.get(element) + 1);
      } else {
        tagMap.set(element, 1);
      }
      console.log(element);
    });
  }

  console.log("test");

  let list = [];

  let object = Object.fromEntries(tagMap);

  for (let index in object) {
    let item = {
      "name": index,
      "value": object[index]
    }

    console.log(index + "  " + object[index])
    list.push(item);
  }




  return `
  <div id="place" style="width: 500px;height: 400px;"></div>
 <script src="https://cdn.bootcss.com/echarts/4.4.0-rc.1/echarts.min.js"></script>
 <script src="https://cdn.bootcss.com/echarts/2.2.7/chart/wordCloud.js"></script>
 <script>
  var myChart = echarts.init(document.getElementById("place"));
    myChart.setOption(
        {
            title: {
                text: "词云",
                link: '#',
            },
            tooltip: {},
            series: [{
                type: 'wordCloud',
                gridSize: 20,
                sizeRange: [12, 50],
                rotationRange: [0, 0],
                shape: 'circle',
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [{
            name: 'Farrah Abraham',
            value: 366,
            // Style of single text
            textStyle: {
                normal: {},
                emphasis: {}
            }
        }]
            }]
        }
    );
 </script>`;


}


module.exports = getTagCloud;
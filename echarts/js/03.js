var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
myChart.showLoading();
var webkitDep = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "人物关系", //关系网名称  
			"keyword": {},
			"base": "人物关系"
		}
	],
	"nodes": [ //展示的节点  
		{
			"name": "刘烨", //节点名称  
			"value": 3,
			"category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{
			"name": "霓娜",
			"value": 1,
			"category": 0
		},
		{
			"name": "诺一",
			"value": 1,
			"category": 0
		}
	],
	"links": [ //节点之间连接  
		{
			"source": 0, //起始节点，0表示第一个节点  
			"target": 1 //目标节点，1表示与索引为1的节点进行连接  
		},
		{
			"source": 0,
			"target": 2
		}
	]
};
myChart.hideLoading();

var option = {
	legend: {
		data: ['人物关系'] //此处的数据必须和关系网类别中name相对应  
	},
	tooltip: {
		formatter: function(x) {
			return x.data.category;
		}
	},
	series: [{
		type: 'graph',
		layout: 'force',
		animation: false,
		label: {
			normal: {
				show: true,
				position: 'right'
			}
		},
		draggable: true,
		data: webkitDep.nodes.map(function(node, idx) {
			node.id = idx;
			return node;
		}),
		categories: webkitDep.categories,
		force: {
			edgeLength: 105, //连线的长度  
			repulsion: 100 //子节点之间的间距  
		},
		edges: webkitDep.links
	}]
};
//    myChart.setOption(option);  

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
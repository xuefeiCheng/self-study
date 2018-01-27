var myChart = echarts.init(document.getElementById('main'));
myChart.showLoading();
var webkitDep = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "关联关系", //关系网名称  
			"keyword": {},
			"base": "频数符合标准"
		},	{
			"name": "家庭", //关系网名称  
			"keyword": {},
			"base": "亲人"
		}
	],
	"nodes": [ //展示的节点  
		{
			"name": "a", //节点名称  
			"value": 3,
			"category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{
			"name": "b",
			"value": 1,
			"category": 0
		},
		{
			"name": "c",
			"value": 1,
			"category": 0
		},
		{
			"name": "d",
			"value": 1,
			"category": 0
		},
		{
			"name": "e",
			"value": 1,
			"category": 0
		},{
			"name": "刘烨", //节点名称  
			"value": 43,
			"category": 1 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{
			"name": "霓娜",
			"value": 6,
			"category": 1
		},
		{
			"name": "诺一",
			"value": 9,
			"category": 1
		},
		{
			"name": "f",
			"value": 1,
			"category": 0
		},
		{
			"name": "g",
			"value": 1,
			"category": 0
		},
		{
			"name": "h",
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
		},
		{
			"source": 0,
			"target": 3
		},
		{
			"source": 0,
			"target": 4
		},
		{
			"source": 1,
			"target": 2
		},
		{
			"source": 1,
			"target": 3
		},
		{
			"source": 1,
			"target": 4
		},
		{
			"source": 2,
			"target": 3
		},
		{
			"source": 2,
			"target": 3
		}
		,
		{
			"source": 2,
			"target": 4
		},
		{
			"source": 3,
			"target": 4
		},
		{
			"source": 5,
			"target": 6
		},
		{
			"source": 5,
			"target": 7
		},
		{
			"source": 6,
			"target": 7
		}
	]
};
myChart.hideLoading();

var option = {
	legend: {
		data: ['关联关系','家庭'] //此处的数据必须和关系网类别中name相对应  
	},
	tooltip: {
	    show:false
	},
	series: [{
		type: 'graph',
		layout: 'force',
		animation: false,
		draggable: true,
		data: webkitDep.nodes.map(function(node, idx) {
			node.id = idx;
			return node;
		}),
		categories: webkitDep.categories,
		force: {
			edgeLength: 105, //连线的长度  
			repulsion: 500 //子节点之间的间距  
		},
		edges: webkitDep.links,
		label: {
                    normal: {
                        position: 'right',
                        show:true,
                        formatter:function (x) {
                    	return x.data.name+':'+x.data.value;
                }
                    }
                }
	}]
};
//    myChart.setOption(option);  

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
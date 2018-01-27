var myChart = echarts.init(document.getElementById('main'));
myChart.showLoading();
var webkitDep = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组
		{
			"name": "生白芍", //关系网名称
			"keyword": {},
			"base": "人物关系"
		},{
			"name": "柴胡", //关系网名称
			"keyword": {},
			"base": "人物关系"
		}
	],
	"nodes": [ //展示的节点
		{
			"name": "生白芍", //节点名称
			"value": 3,
			"category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0
		},
		{
			"name": "柴胡",
			"value": 1,
			"category": 0
		},
		{
			"name": "川芎",
			"value": 1,
			"category": 0
		},
		{
			"name": "炒枳壳",
			"value": 1,
			"category": 0
		},{
			"name": "丹皮", //节点名称
			"value": 3,
			"category": 1 //与关系网类别索引对应，此处只有一个关系网所以这里写0
		},
		{
			"name": "银花",
			"value": 1,
			"category": 1
		},
		{
			"name": "薄荷",
			"value": 1,
			"category": 1
		},
		{
			"name": "当归",
			"value": 1,
			"category": 1
		}
	],
	"links": [ 
	//数据name 之间连接
		{
			"source": '生白芍', // 关联数据的 开始数据名称
			"target": '柴胡', //目标数据名称
			'des':'关联'
		},
		//节点之间连接
		{
			"source": 0,
			"target": 2,
			'des':'关联'
		},
		{
			"source": 0,
			"target": 3,
			'des':'关联'
		},{
			"source": 0, //起始节点，0表示第一个节点
			"target": 4, //目标节点，1表示与索引为1的节点进行连接
			'des':'关联'
		},{
			"source": 0, //起始节点，0表示第一个节点
			"target": 5, //目标节点，1表示与索引为1的节点进行连接
			'des':'关联'
		},{
			"source": 0, //起始节点，0表示第一个节点
			"target": 6, //目标节点，1表示与索引为1的节点进行连接
			'des':'关联'
		},{
			"source": 0, //起始节点，0表示第一个节点
			"target": 7, //目标节点，1表示与索引为1的节点进行连接
			'des':'关联'
		},{
			"source": 4, //起始节点，0表示第一个节点
			"target": 5, //目标节点，1表示与索引为1的节点进行连接
			'des':'关联'
		},
		{
			"source": 4,
			"target": 6,
			'des':'关联'
		},
		{
			"source": 4,
			"target": 7,
			'des':'关联'
		}
	]
};
myChart.hideLoading();
option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {
        	 tooltip: {
                formatter: function (x) {
                    return x.data.des;
                }
            },
        },
        legend: [{
            // selectedMode: 'single',
            data: webkitDep.categories.map(function (a) {
                return a.name;
            })
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: webkitDep.nodes.map(function(node, idx) {
			node.id = idx;//数据连接方式，注释掉 这句 节点 和数据名称 都可以作为连接依据
			return node;
		}),
//              links: webkitDep.links,
                edges: webkitDep.links,
                categories: webkitDep.categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        show:true,
                        formatter:function (x) {
                    	return x.data.name;
                }
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            }
        ]
    };
/*option = {
	title: {
		text: '和弦图'	
	},
	legend: {
		
		data: ['人物关系'] //此处的数据必须和关系网类别中name相对应
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
};*/
myChart.setOption(option);
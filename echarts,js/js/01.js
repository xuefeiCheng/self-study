var data = {
	"currPage": 1,
	"drugs": [{
			"title": " 云苓",
			"num": 4,
			"prop": "1.75%",
			"pinyin": "?"
		},
		{
			"title": "？？",
			"num": 2,
			"prop": "0.87%",
			"pinyin": "?"
		},
		{
			"title": "？？？",
			"num": 2,
			"prop": "0.87%",
			"pinyin": "?"
		},
		{
			"title": "巴戟天",
			"num": 2,
			"prop": "0.87%",
			"pinyin": "ba1"
		},
		{
			"title": "白藓皮",
			"num": 2,
			"prop": "0.87%",
			"pinyin": "bai2"
		},
		{
			"title": "白芷",
			"num": 2,
			"prop": "0.87%",
			"pinyin": "bai2"
		},
		{
			"title": "白蒺藜",
			"num": 4,
			"prop": "1.75%",
			"pinyin": "bai2"
		},
		{
			"title": "白？",
			"num": 2,
			"prop": "0.87%",
			"pinyin": "bai2"
		},
		{
			"title": "白叩",
			"num": 2,
			"prop": "0.87%",
			"pinyin": "bai2"
		},
		{
			"title": "白鲜皮",
			"num": 2,
			"prop": "0.87%",
			"pinyin": "bai2"
		}
	],
	"totalCount": 177,
	"status": 1
};
// 新数组 title num prop 分别存储原数据中的title num prop属性
var title =[];
var num =[];
var prop =[];
for(var i=0,l=data.drugs.length;i<l;i++){
	title.push(data.drugs[i].title);
	num.push(data.drugs[i].num);
	prop.push(data.drugs[i].prop);
}
$("#data").append('<p> title:<br/>'+title+'</p>');
$("#data").append('<p> num:<br/>'+num+'</p>');
$("#data").append('<p> prop:<br/>'+prop+'</p>');
//新数组 最终所有新对象的集合
//新对象 属性有 num prop
var result =[];
for(var i=0,l=data.drugs.length;i<l;i++){
	var obj ={'num':"",'prop':""};
	obj.num = num[i];
	obj.prop = prop[i];
	result.push(obj);
}
result = JSON.stringify(result);
//JSON.stringify()  将数据转换成 json格式 ，看他的作用，可以把上面语句注释掉
$("#da").append('<p> result:<br/>'+result+'</p>');

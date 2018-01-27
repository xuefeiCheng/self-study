//使用jquery提供的$.extend()方法 编写 自定义选择器 插件
;
(function($) {
	//选择器函数 具体格式
	//函数名：function(a,i,m)
	var $index = -1;
	$.extend($.expr[':'], {
		group: function(element, index, matches, set) {
			var num = parseInt(matches[3], 10);
			var x = $(element).index();
			if(isNaN(num)) {
				return false;
			}
			return x <= num;
		},
		//跑不通 原因是jquery版本
		//在1.7.1 之前应该都能跑通
		//原因是：运行中 i 一直是0 ，不自增，只能自己创建一个变量充当索引号
		between:function(a,i,m){ 
            var temp=m[3].split(",");
           // console.log(m[3]);//获取的是选择器传入的参数
           //m[0-4]
            $index++;
            //console.log($index);
            //console.log(+temp[0]<=$index&&$index<=+temp[1]);
            return +temp[0]<$index&&$index<+temp[1];//只获取中间
            //包含 两侧节点
            //return +temp[0]<=$index&&$index<=+temp[1];
            //return +temp[0]<i&&i<+temp[1]; 
       }
	});
	/*jQuery.extend(jQuery.expr[':'], {
		test: function(obj, index, meta, stack) {
			obj   - is a current DOM element 当前DOM元素
			index - the current loop index in stack 当前元素在stack中的索引，
			meta  - meta data about your selector !!! 用来存参数值，详见带参数的自定义选择器。
			stack - stack of all elements to loop 选择器所选中的元素集。
    
			Return true to include current element 返回 true 就包含当前元素
			Return false to explude current element 返回 false 就抛弃当前元素

		}
	});*/
})(jQuery);
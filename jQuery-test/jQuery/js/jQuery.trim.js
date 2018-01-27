//使用jquery编写全局函数插件
;(function($){
	$.extend({
		ltrim:function(text){
			return (text || "").replace(/^\s+/g,"");
		},
		rtrim:function(text){
			return (text || "").replace(/\s+$/g,"");
		}
	});
})(jQuery);

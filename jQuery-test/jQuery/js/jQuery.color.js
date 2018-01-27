;
(function($) {
	//对 对象的 扩展 使用
	//设置 字体颜色的插件
	$.fn.extend({
		"color": function(value) {
			//但是本身 jquery css中存在 判断value 值undefined的机制
			//所以可以去掉 判断
			//版本3
			return this.css('color', value);
			//版本1
			//this 是 jQuery对象 不是普通的DOM对象
			//不需要 this --> $(this)
			//console.log(this);
			//设置 css
			//this.css('color',value);
			//符合 jquery的特色 链式操作 ，返回 该对象
			//return this;

			//版本2
			//没有传值 怎么办？做个判断吧
			//			if(value == undefined){
			//				return this.css('color');
			//			}else{
			//				//css 方法 本身就返回 jquery对象了 所以不需要再写 return this
			//				return this.css('color',value);
			//			}
		},
		//设置字体 插件
		"font": function(font) {
			//设置默认属性
			font = $.extend({
				"size": "18px",
				"family": "LiSu"
			}, font);
			return this.css({
				'font-size': font.size,
				'font-family': font.family
			})
		},
		//表格 隔行换色 插件
		//界面 中需要定义odd 和 even的样式 类
		"tableStyle": function(table) {
			return this.each(function() {
				//防止 选择器选中其他 节点，使用each
				table = $.extend({
					"oddStyle": "odd",
					"evenStyle": "even",
					"selectedStyle": "selected"
				}, table);
				$("thead>tr", this).addClass(table.oddStyle);
				$("tbody>tr:odd", this).addClass(table.oddStyle);
				$("tbody>tr:even", this).addClass(table.evenStyle);
				$("tbody>tr", this).click(function() {
					//判断是否是选中状态，即判断是否含有 selected属性
					var flag = $(this).hasClass(table.selectedStyle);
					$(this)[flag ? 'removeClass' : 'addClass'](table.selectedStyle)
						//if (jquery 1.6-) please use attr()
						.find(':checked').prop('checked', !flag);
				});
			});
		},
		//全选/取消全选 反选
		//全选框 input name为 checkall
		//子 复选框input name 为checkbox
		//支持jquery1.6版本以上 ，以下请使用 attr方法 修改属性值
		"check": function() {
			return this.each(function() {
				$("table input[name='checkAll']").click(function() {
					//jquery版本1.6以后使用prop，之前使用attr
					var flag = $(this).is(':checked');
					//var flag = $(this).prop("checked");
					$("table input[name='checkbox']").prop("checked", flag);
					$("table tbody tr").each(function() {
						//判断是否是选中状态，即判断是否含有 selected属性
						//此处 为写死 是和表格隔行换色 插件 相关联，单独使用 check插件 请删除 该each方法
						var flag = $(this).hasClass("selected");
						$(this)[flag ? 'removeClass' : 'addClass']("selected")
							//if (jquery 1.6-) please use attr()
							.find(':checked').prop('checked', !flag);
					});
				});
				var count = $("table input[name='checkbox']").length;
				$("table input[name='checkbox']").each(function() {
					$(this).click(function() {
						$("table input[name='checkAll']").prop("checked", count == $("table input[name='checkbox']:checked").length ? true : false);
					});
				});

			});
		}
	});
})(jQuery);
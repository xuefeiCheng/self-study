<?php
#返回数据格式为xml
#返回值为一个节点树
#xml一般用于存储数据，尽量使用元素包裹数据
	header("Content-Type:text/xml; charset=utf-8");
	echo "<?xml version='1.0' encoding='utf-8'?>".
	"<comments>".
	//comment元素 含有一个 name 属性
	"<comment name='{$_REQUEST['name']}'>".
	"<content>{$_REQUEST['txt']}</content>".
	"</comment>".
	"</comments>"
?>
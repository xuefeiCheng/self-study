<?php
#使用get方式传递参数 则可以$_GET['传递的参数'] 取值
#使用post方式传递参数 则可以$_POST['传递的参数'] 取值
#post get传递方式都可以使用 $_REQUEST['传递的参数'] 取值
	header("Content-Type:text/html; charset=utf-8");
	echo "{\"name\":\"{$_GET['name']}\",\"txt\":\"{$_GET['txt']}\"}";
?>
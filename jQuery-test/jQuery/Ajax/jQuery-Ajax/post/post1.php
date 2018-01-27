<?php
#返回的数据格式是html，所以界面不需要处理，直接使用返回值即可
	header("Content-Type:text/html; charset=utf-8");
	echo "<div class='comment'><h6>{$_POST['name']}:</h6><p class='para'>{$_POST['txt']}</p></div>";
?>
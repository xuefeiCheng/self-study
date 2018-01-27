function submit() {
	$.post('post1.php', {
		'name': $("#name").val(),
		'txt': $("#txt").val()
	}, function(data, status) {
		alert(status);
		$("#showbox").append(data);
	});
}
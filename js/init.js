$(function() {

	// 初始化展现第一个tab
	$("#my-nav a:first").tab("show");

	// 点击按钮后展现
	$("#my-nav a").bind("click", function(e) {
		e.preventDefault();
		$(this).tab("show");
	});
});


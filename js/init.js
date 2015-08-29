$(function() {
	
	var firstCate = $("li[role='presentation']").first();
	$(firstCate).addClass("active");
	var firstPanel = $(firstCate).find("a").first().attr("href");
	$(firstPanel).addClass("panel-tab-show");


	$("li[role='presentation']").click(function() {
		$("li[role='presentation']").removeClass("active");
		$(this).addClass("active");
		var target = $(this).find("a").first().attr("href");

		$(".panel-tab").removeClass("panel-tab-show");
		$(target).addClass("panel-tab-show");
	});

});


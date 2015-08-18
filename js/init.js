$(function() {
	$("#读书").css("display", "block");

	$("li[role='presentation']").click(function() {
		$("li[role='presentation']").removeClass("active");
		$(this).addClass("active");

		$(".panel-tab").css("display", "none");
		var href = $(this).find("a").first().attr("href");
		$(href).show();

	});
});


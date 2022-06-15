$(".search-btn").click(function () {
    $(this).css("display", "none");
    $(".search-data").fadeIn(500);
    $(".close-btn").fadeIn(500);
    $(".search-data .line").addClass("active");
    $(".fa-search").css("color", "#b699ff");
    setTimeout(function () {
        $("input").focus();
        $(".search-data label").fadeIn(500);
        $(".search-data span").fadeIn(500);
    }, 800);
});
$(".fa-search").click(function () {
    $(".wrapper").removeClass("active");
    $(".search-btn").fadeIn(800);
    $(".search-data").fadeOut(500);
    $(".close-btn").fadeOut(500);
    $(".fa-search").css("color", "#fff");
    $(".search-data .line").removeClass("active");
    $("input").val("");
    $(".search-data label").fadeOut(500);
    $(".search-data span").fadeOut(500);
})





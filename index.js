//Navigation bar 
$(".material-symbols-outlined").mouseover(function(){
    $(".material-symbols-outlined").css("color", "#b6dca7");
});
$(".material-symbols-outlined").mouseout(function(){
    $(".material-symbols-outlined").css("color", "black");
});
// You can change the color of the mouseover and mouse out color from the above
let isMenuOpen = false;

function toggleMenu() {
    const icon = $(".material-symbols-outlined");
    if (icon.text().trim() === "menu") {
        isMenuOpen = true;
        $(".material-symbols-outlined").css("color", "black");
        $("span.material-symbols-outlined").text("cancel");
        $("span.material-symbols-outlined").css("order", "-1");
        $(".menu-btn").css("font-size", "larger");
        $(".menu-btn").css("visibility", "visible");
        $("#navbar").css("flex-direction", "column");
        $("#navbar > div").removeClass("navbar");
        $("#navbar > div").addClass("nav-mini");
    } else if (icon.text().trim() === "cancel") {
        isMenuOpen = false;
        $(".material-symbols-outlined").css("color", "black");
        $("span.material-symbols-outlined").text("menu");
        $("#navbar > div").addClass("navbar");
        $("#navbar > div").removeClass("nav-mini");
        $(".menu-btn").css("font-size", "0");
        $(".menu-btn").css("visibility", "hidden");
        $("span.material-symbols-outlined").css("order", "0");
        $("#navbar").css("flex-direction", "row");
    }
}

$(".material-symbols-outlined").click(function () {
    toggleMenu();
});


$(window).resize(function () {
    const screenWidth = $(window).width();

    if (screenWidth > 850) {
        isMenuOpen = false;
        $("span.material-symbols-outlined").text("menu").css("order", "0");
        $(".menu-btn").css({
            "font-size": "x-large",
            "visibility": "visible"
        });
        $("#navbar").css({
            "flex-direction": "row"
        });
        $("#navbar > div").addClass("navbar").removeClass("nav-mini");
    } else if (screenWidth <= 850 && !isMenuOpen) {
        $(".menu-btn").css({
            "font-size": "0",
            "visibility": "hidden"
        });
        $("span.material-symbols-outlined").text("menu").css("order", "0");
    }
}).resize();




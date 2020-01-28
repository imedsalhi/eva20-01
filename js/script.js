// new Glide('.glide').mount();
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    gap: 60,
    perView: 3,
    breakpoints: { 650: { perView: 1 } }
}).mount();
$("#b_navigation").on("click", function() {
    $("#nav_bar").toggle();

});
var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});
var height = $(window).height();
// if (height > 3000) {
//     alert("Bla");
//     // $('#bloc2').animate({"left": "+=300px"}, "slow");
// }
$(window).scroll(function() {
    if ($(window).scrollTop() > 830) {
        $("#navbar").addClass("scrollabout");
        $("li a").addClass("colortext");
        // alert($(window).scrollTop());
    } else {
        $("#navbar").removeClass("scrollabout");
        $("li a").removeClass("colortext");
    }
});
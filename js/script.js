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
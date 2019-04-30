document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery


$(document).ready(function () {
    $('.sidenav').sidenav();
});

$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
});

var instance = M.Carousel.init({
fullWidth: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
fullWidth: true
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

/*paralax*/
$(document).ready(function(){
        $('.parallax').parallax();
});

$(document).ready(function(){
    $('.slider').slider();
});


// Or with jQuery

$(document).ready(function(){
    $('.carousel').carousel();
  });

  /*mimodal*/
  
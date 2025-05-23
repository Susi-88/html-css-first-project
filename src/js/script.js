/* GO TO TOP */
let GoToTopBtn = document.getElementById("go-to-top");

window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            GoToTopBtn.style.display = "block";
        } else {
            GoToTopBtn.style.display = "none";
        }
    };

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

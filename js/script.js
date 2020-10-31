
// show navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    // var currentScrollPos = window.pageYOffset;
    if (window.pageYOffset < document.getElementById("header").style.height) {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("navbar").style.opacity = 0;
    } else {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("navbar").style.opacity = 1;
        
    }
    
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
};

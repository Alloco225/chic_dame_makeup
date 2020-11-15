
console.log("script");
function toggleFloatingButton() {
    var isShowcaseInView = Utils.isElementInView($("#showcase"), false);
    var isFooterInView = Utils.isElementInView($("#footer"), false);
    var book_btn = document.getElementById("book_now");

    
    if (isFooterInView) {
        if (!book_btn.classList.contains("remove")) {
            book_btn.classList.add("remove");
        }
        return;
    } 

    if (isShowcaseInView) {
        if (!book_btn.classList.contains("remove")) {
            book_btn.classList.add("remove");
        }
        return;
    }

    if (book_btn.classList.contains("remove")) {
        book_btn.classList.remove("remove");
    }
}


function isElementInViewport(el) {
    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

setInterval(() => {
    toggleFloatingButton();
}, 500);
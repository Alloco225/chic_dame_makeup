// slider animamtion
$images1 = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg", "images/bg4.jpg", "images/bg5.jpg"];

$images2 = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];

$images3 = ["images/bg10.jpg", "images/bg12.jpg", "images/bg13.jpg"];

var s1i = 0;
var s1j = 1;
var s1isPaused = false;

var s2i = 0;
var s2j = 1;
var s2isPaused = false;

var s3i = 0;
var s3j = 1;
var s3isPaused = false;


// ** PAUSERS

// slider1
$("#shop .slider .slide-item:nth-child(1) ").mouseenter(function () {
  s1isPaused = true;
});
$("#shop .slider .slide-item:nth-child(1) ").mouseleave(function () {
  s1isPaused = false;
});
// slider2

$("#shop .slider .slide-item:nth-child(2) ").mouseenter(function () {
  s2isPaused = true;
});
$("#shop .slider .slide-item:nth-child(2) ").mouseleave(function () {
  s2isPaused = false;
});
// slider3

$("#shop .slider .slide-item:nth-child(3) ").mouseenter(function () {
  s3isPaused = true;
});
$("#shop .slider .slide-item:nth-child(3) ").mouseleave(function () {
  s3isPaused = false;
});


// ** Players
// slider1
setTimeout(function () {
    
    var slider1 = setInterval(function () {
        if (!s1isPaused) {
            $elem1 = "#shop .slider .slide-item:nth-child(1) ";
            $($elem1 + ".contentBx img").attr("src", $images1[s1i]);
            $($elem1).addClass("hover");
            
            setTimeout(function () {
                $($elem1 + ".imgBx img").attr("src", $images1[s1j]);
                $($elem1).removeClass("hover");
                console.log("<< s1Image");
            }, 5000);
            s1i++;
            s1j++;
            if (s1i >= $images1.length) {
                s1i = 0;
            }
            if (s1j >= $images1.length) {
                s1j = 1;
            }
        }
    }, 10000);
}, 1000);


// slider2
setTimeout(() => {

    var slider2 = setInterval(function () {
        if (!s2isPaused) {
            $elem2 = "#shop .slider .slide-item:nth-child(2) ";
            $($elem2 + ".contentBx img").attr("src", $images2[s2i]);
            $($elem2).addClass("hover");
            
            setTimeout(function () {
                $($elem2 + ".imgBx img").attr("src", $images2[s2j]);
                $($elem2).removeClass("hover");
                console.log("<< s2Image");
            }, 5000);
            s2i++;
            s2j++;
            if (s2i >= $images2.length) {
                s2i = 0;
            }
            if (s2j >= $images2.length) {
                s2j = 1;
            }
        }
    }, 10000);
}, 2000);


// slider3
setTimeout(() => {

    var slider3 = setInterval(function () {
        if (!s3isPaused) {
            $elem3 = "#shop .slider .slide-item:nth-child(3) ";
            $($elem3 + ".contentBx img").attr("src", $images3[s3i]);
            $($elem3).addClass("hover");
            
            setTimeout(function () {
                $($elem3 + ".imgBx img").attr("src", $images3[s3j]);
                $($elem3).removeClass("hover");
                console.log("<< s3Image");
            }, 5000);
            s3i++;
            s3j++;
            if (s3i >= $images3.length) {
                s3i = 0;
            }
            if (s3j >= $images3.length) {
                s3j = 1;
            }
        }
    }, 10000);
}, 3000);


// Animation preloader
function animateLoadingIcon() {
          var lipstick = $("#lipstick-whole");
          var lipstickColor = $(".lipstick-color");
          var upperlip = $("#lips-top");
          var lowerlip = $("#lips-bottom");
          var bigStar = $("#star-big");
          var smallStar = $("#star-small");
          var count = 2;
          var ii = setInterval(function () {
            count--;
            lipstickColor.css("fill", "var(--red)");

            lipstick.css("animation", "lipstick-upper ease-in-out 1s 1");
            setTimeout(function () {
              upperlip.css("fill", "var(--red)");
            }, 800);
            lipstickColor.css("fill", "var(--primary)");
            setTimeout(function () {
              lipstick.css("animation", "lipstick-lower ease-in-out 1s 1");
              setTimeout(function () {
                lowerlip.css("fill", "var(--primary)");
                //bigStar.css("animation-name", "twinkle");
                //smallStar.css("animation-name", "twinkle");
                bigStar.css("animation", "twinkle .7s ease-in-out .2s infinite");
                smallStar.css("animation", "twinkle .7s ease-in-out 2s infinite");
                $(".star-big").css("animation", "shrink .3s ease-in-out 1s infinite");
                $(".star-small").css("animation", "shrink .3s ease-in-out 1s infinite");
              }, 800);
            }, 1000);
            if (count <= 0) {
              clearInterval(ii);
            }
            //setTimeout(function(){

            //    lipstickColor.css("fill", "white");
            //    upperlip.css("fill", "white");
            //   lowerlip.css("fill", "white");
            //}, 1000);
          }, 0);
        }
    

// Button Effects

function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}

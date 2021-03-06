//import LocomotiveScroll from 'locomotive-scroll';




/*


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)





follower = document.querySelectorAll('.cursor');

    posX = 0;
    posY = 0;
    mouseX = 0;
    mouseY = 0;

    TweenMax.to({},0.016,{
        repeat: -2,
        onRepeat: function(){
            posX += (mouseX  - posX) / 10;
            posY += (mouseY  - posY) / 10;

            TweenMax.set(follower, {
                css: {
                    left: posX - 80,
                    top: posY - 80
                }
            });
        }
    });

document.addEventListener("mousemove", 
    function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    });


    
      const show = document.querySelector('#show');
      const container = document.querySelector('#team .container');

      show.addEventListener('click', () => {
        container.style.transform = "translateX(-25%)";
        console.log('Working');
      })
*/



    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });




      var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var animRequestID,
  settingsStr = document.getElementById("smooth-scroll").dataset.scrollSettings,
  settings = parseSettings(settingsStr);

function parseSettings(str) {
  var r = {};
  str.split(" ").forEach((s) => {
    var t = s.split(":");
    r[t[0]] = t[1];
  });
  return r;
}

function addListeners(element, events, callback) {
  events
    .split(" ")
    .forEach((e) => element.addEventListener(e, callback, false));
}

function handleResize() {
  var bodyHeight = document.getElementById("smooth-scroll").offsetHeight;
  gsap.set("body", { height: bodyHeight });
  cancelAnimationFrame(animRequestID);
}

function handleScroll() {
  scrollTo(window.scrollY);
}

function scrollTo(y) {
  cancelAnimationFrame(animRequestID);
  animRequestID = requestAnimationFrame(function () {
    gsap.to("#smooth-scroll", {
      duration: settings.duration,
      y: -y,
      ease: settings.ease,
    });
  });
}

gsap.set("#smooth-scroll", {
  force3D: true,
});

if (settings.smoother == "on") {
  // gsap.set('.viewport', { perspective: 1000 });
  gsap.set("#smooth-scroll", {
    rotation: 0.01,
    // z: .01
  });
}

addListeners(window, "load resize", handleResize);
addListeners(window, "scroll", handleScroll);

const textrev = gsap.timeline();

textrev.from(".line span", 1.8, {
  y: 250,
  ease: "power4.out",
  delay: 1,
  skewY: 10,
  stagger: {
    amount: 0.4,
  },
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 80, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 4, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease-out", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
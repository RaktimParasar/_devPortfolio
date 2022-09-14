//explore buttonScroll
document.getElementById("explore").addEventListener("click", () => {
  var elmnt = document.getElementById("about_me");
  elmnt.scrollIntoView({ behavior: "smooth" });
});

// copytoClipboard
document.getElementById("copy").addEventListener("click", () => {
  const text = document.getElementById("texttocopy");
  navigator.clipboard.writeText(text.innerText);
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Email Copied";
});

document.getElementById("copy").addEventListener("mouseout", () => {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
});

//animation
gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline();

t1.from(".hero-text-container", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeout,
});

t1.from(
  ".stagger_1",
  {
    opacity: 0,
    y: "-50%",
    stagger: 0.3,
    ease: Power4.easeout,
    duration: 2,
  },
  "-=1.5"
);

t1.from(
  ".arrow",
  {
    opacity: 0,
    x: "-50",
    stagger: 0.3,
    ease: "elastic.out(1, 0.3)",
    duration: 2.5,
  },
  "-=1.5"
);

gsap.from(".hero-image", {
  stagger: 0.1,
  scale: 0.5,
  duration: 1,
  ease: "back.out(1.7)",
});

gsap.from(".transition_up", {
  scrollTrigger: {
    trigger: ".transition_up",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".transition_right", {
  scrollTrigger: {
    trigger: ".transition_right",
    start: "center bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});

gsap.from(".transition_left", {
  scrollTrigger: {
    trigger: ".transition_left",
    start: "center bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});

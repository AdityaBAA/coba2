// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth",
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth",
});

// Scroll to a certain element
document.querySelector(".hello").scrollIntoView({
  behavior: "smooth",
});

/* typing animation */
var typed = new Typed(".typed", {
  strings: ["", "bababanaaa", ""],
  typeSpeed: 100,
  BackSpeed: 0,
  cursorChar: "_",
  loop: true,
});

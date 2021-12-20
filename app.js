<<<<<<< HEAD
<<<<<<< HEAD
const cubes = document.querySelector(".cube");
function cubeMove() {
  cubes.forEach((cubess) => {
    const single = cubess.querySelector(".single-rd");
    const cube1 = gsap.timeline({
      default: { duration: 1, ease: "power2.inOut" },
    });
    cube1.fromTo(single, { x: "0%" }, { x: "100%" });
  });
}
window.addEventListener("load", cubeMove);
=======
// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 100 },
});

// build scenes
new ScrollMagic.Scene({ triggerElement: "#sec1" })
  .setClassToggle("#hh", "active") // add class toggle
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: "#sec2" })
//   .setClassToggle("#hhb", "headingUp") // add class toggle
//   // .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: "#sec3" })
//   .setClassToggle("#hh", "active") // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: "#sec4" })
//   .setClassToggle("#hh", "active") // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
>>>>>>> c54afa79e2c5e9ed2a2f503bda9f0f074803b975
=======
>>>>>>> parent of c54afa7 (Merge pull request #1 from Tejs1/main)

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

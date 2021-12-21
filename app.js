// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 100 },
});
// build scenes
new ScrollMagic.Scene({ triggerElement: "#sec1" })
  .setClassToggle("#hh", "active") // add class toggle
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

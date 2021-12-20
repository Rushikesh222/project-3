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

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

Shery.mouseFollower();

gsap.from(".nlink", {
    stagger: .2,
    y: 20,
    opacity: 0,
    duration: 1,
    ease: Power2,
})

Shery.textAnimate(".headings h1", {
  style: 2,
  y: 10,
  delay: 5,
  duration: 3.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

gsap.from(".anim2", {
    y: 50,
    opacity: 0,
    ease: Expo,
    duration: 1.5,
    stagger: .3
})

Shery.imageEffext(".susimagewrapper img", {
  style: 3,
  debug: true,
});

Shery.imageEffext(".bimg", {
    style: 5,
    debug: true,
    gooey: true,
})

Shery.hoverWithMediaCircle(".bimg" /* Element to target.*/, {
  images: ["./images/bottle,jpg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});
$(function () {
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    // .add("startTL")
    .fromTo(
      "#card-left",
      2.5,
      { x: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0 },
      {
        rotationY: 85,
        skewX: 0,
        skewY: 0,
        transformOrigin: "0",
        ease: Sine.easeInOut,
      },
      "startTL"
    ) // in from left
    .fromTo(
      "#card-right",
      2.5,
      { x: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0 },
      {
        rotationY: -85,
        skewX: 0,
        skewY: 0,
        transformOrigin: "100%",
        ease: Sine.easeInOut,
      },
      "startTL"
    ); // in from right
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "300%",
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  //   let doorId = null;

  //   var triggerOffset = document.documentElement.clientHeight / 2;
  //   TweenLite.set(".door", { perspective: "400vw" });
  //   window.addEventListener("scroll", function () {
  //     console.log(doorId);
  //     if (!doorId) {
  //       doorId = requestAnimationFrame(getTL1);
  //     }
  //   });

  //   //   $("#door-left, #door-right").on("click", function (e) {
  //   //     //console.log("clicked");
  //   //     TimelineMax.add(getTL1());
  //   //     //TimelineMax.add(getTL2());
  //   //   });
  //   // });

  //   //TweenLite.set(".door", {perspective:"400vw"});
  //   //TimelineMax.add(getTL());
  //   //TimelineMax.add(getTL2());
  //   // TimelineMax.add(getTL3());
  //   var tl = new TimelineMax({ yoyo: true, repeat: 0, paused: true })
  //     .add("startTL")

  //     .to(
  //       "#card-left",
  //       2.5,
  //       { x: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0 },
  //       {
  //         rotationY: 85,
  //         skewX: 0,
  //         skewY: 0,
  //         transformOrigin: "0",
  //         ease: Sine.easeInOut,
  //       },
  //       "startTL"
  //     )

  //     .to(
  //       "#card-right",
  //       2.5,
  //       { x: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0 },
  //       {
  //         rotationY: -85,
  //         skewX: 0,
  //         skewY: 0,
  //         transformOrigin: "100%",
  //         ease: Sine.easeInOut,
  //       },
  //       "startTL"
  //     );

  //   function getTL1() {
  //     tl.time(window.pageYOffset + triggerOffset);
  //     doorId = null;
  //   }

  //   function getTL2() {
  //     var tl = new TimelineMax({ yoyo: true, repeat: 0 })
  //       .add("startTL")

  //       .fromTo(
  //         "#rhomb1",
  //         2.5,
  //         {},
  //         { rotationY: 80, transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#hockey1",
  //         2.5,
  //         {},
  //         { rotationY: 80, transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#hockey2",
  //         2.5,
  //         {},
  //         { rotationY: 80, transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#tri1",
  //         2.5,
  //         {},
  //         { rotationY: 60, transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#tri2",
  //         2.5,
  //         {},
  //         { rotationY: 120, transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#hockey3",
  //         2.5,
  //         {},
  //         { rotationY: 260, transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#hockey4",
  //         2.5,
  //         {},
  //         { rotationY: 260, transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#rhomb2",
  //         2.5,
  //         {},
  //         { rotationY: 80, transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       );

  //     return tl;
  //   }

  //   function getTL3() {
  //     var tl = new TimelineMax({ yoyo: true, repeat: 0 })
  //       .add("startTL")

  //       .fromTo("#rhomb1", 2.5, { x: -10 }, {}, "startTL")

  //       .fromTo("#hockey1", 2.5, { x: -10 }, {}, "startTL")

  //       .fromTo("#hockey2", 2.5, { x: -10 }, {}, "startTL")

  //       .fromTo("#tri1", 2.5, { x: -10 }, {}, "startTL")

  //       .fromTo(
  //         "#tri2",
  //         2.5,
  //         { x: -160, rotationX: 0, rotationY: 180 },
  //         { transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#hockey3",
  //         2.5,
  //         { x: 0, rotationX: 0, rotationY: 180 },
  //         { transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#hockey4",
  //         2.5,
  //         { x: 0, rotationX: 0, rotationY: 180 },
  //         { transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       )

  //       .fromTo(
  //         "#rhomb2",
  //         2.5,
  //         { x: -200, rotationX: 0, rotationY: 0 },
  //         { transformOrigin: "50% 50%", ease: Sine.easeInOut },
  //         "startTL"
  //       );

  //     return tl;
  //   }
});

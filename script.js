let tl = gsap.timeline();

tl.from('.navi', {
    duration: 2,
    opacity: 0,
    stagger: .3,
    y: 20,
    ease: "Expo.easeInOut"
})

.from('.textelem', {
    duration: 2,
    opacity: 0,
    stagger: .3,
    y: 20,
    ease: "Expo.easeInOut"
},'-=2')

.from('#panel', {
    // stagger: .2,
    duration: 2.5,
    width: 0,
    opacity: 0,
    ease: "Expo.easeInOut"
},'-=2')

.from('.inpanel', {
    stagger: .2,
    duration: 2,
    height: 0,
    opacity: 0,
    y: 30,
    ease: "Expo.easeInOut"
},'-=1')

.from('.para', {
    stagger: .3,
    duration: 2,
    // height: 0,
    opacity: 0,
    y: 30,
    ease: "Expo.easeInOut"
},'-=1.3')

gsap.to('#holder', {
    scrollTrigger:{
        // markers: true,
        trigger: "#back2",
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 3,
        stagger: .3,
        duration: 2,
        ease: "Expo.easeInOut",
    }, scale: 2.9
})
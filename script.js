let time = gsap.timeline();

time.from("#nav", {
    y: -100,
    delay: 0.5,
    opacity: 0,
    duration: 1,
})
.from("#nav-part2", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 1
})

time.from("#main>h1", {
    x: -500,
    delay: 0.2,
    duration: 0.8,
    opacity:0,
    stagger: 0.5
})
time.from("img", {
    x: 180,
    rotate: 45,
    opacity: 0,
    duration: 3,
    delay: 0.5,
    stagger: 2
})
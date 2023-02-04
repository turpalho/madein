document.getElementById("arend").addEventListener("click", function() {
    window.open("https://t.me/arrendakz_bot", "_blank");
});
document.getElementById("azkr").addEventListener("click", function() {
    window.open("https://play.google.com/store/apps/details?id=com.shariba.azkar", "_blank");
});
document.getElementById("excl").addEventListener("click", function() {
    window.open("https://t.me/exclusive_achkhoy_bot", "_blank");
});

const text = baffle(".logo");
text.set({
    characters: '▒▓░/█▒<░ <█░▓░ █▓▒ ░>▒▒░ ▒/░/ ▓>< ▒▒/█ ▒▒██',
    speed:200
});
text.start();
text.reveal(20000);

ScrollTrigger.create({
    animation: gsap.from(".logo",{
        y: "50vh",
        scale: 6,
        yPercent: -50,
    }),
    scrub: true,
    trigger: ".about-company",
    start: "top bottom",
    endTrigger: ".about-company",
    end: "top center",
});
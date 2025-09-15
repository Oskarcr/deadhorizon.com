setInterval(createParticle, 160);

const siteParticles = document.getElementById("site-particles");

function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";
    const rotation = randInt(-360, 360);
    const randStartX = 60 - randInt(0, 10); 
    const randDuration = randInt(4000, 4600);
    const randLocalRotation = randInt(-360, 360);
    const randEndRotation = 360 + randInt(0, 360);
    particle.animate([
        {
            offset: 0,
            opacity: "1",
            transform: "rotate(" + rotation + "deg) rotate(calc(360deg * 2)) translate(" + randStartX + "vw, 0px) rotate(" + randLocalRotation + "deg) scale(1)"
        },
        {
            offset: 0.8,
            opacity: "0"
        },
        {
            offset: 1,
            opacity: "0",
            transform: "rotate(" + rotation + "deg) rotate(" + randEndRotation + "deg) translate(0vw, 0px) rotate(" + randLocalRotation + "deg) scale(0)"
        }
    ], { duration: randDuration })
    .addEventListener("finish", () => particle.remove());
    siteParticles.insertBefore(particle, null);
}

function randInt(a, b) {
    return Math.round(Math.random() * (a - b) + b);
}
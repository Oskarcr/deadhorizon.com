fetch("./header.html").then(res => {
    res.text().then((data) => {
        document.querySelector("header").innerHTML = data;
    });
});

class Rand {
    static sign() {
        return Math.random() < 0.5 ? 1 : -1;
    }

    static int(a = 0, b = 1) {
        return Math.round(Math.random() * (a - b) + b);
    }
}

setInterval(createParticle, 160);

const siteParticles = document.getElementById("site-particles");

const particlesDirection = Rand.sign();

function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";
    // particle.style.top = (window.scrollY + window.innerHeight / 2) + "px";
    const rotation = Rand.int(-360, 360);
    const offsetX = 60 - Rand.int(0, 10); 
    const duration = Rand.int(4600, 5200);
    const localRotation = Rand.int(-360, 360);
    const endRotation = (360 + Rand.int(0, 360)) * particlesDirection;
    particle.animate([
        {
            offset: 0,
            opacity: "1",
            transform: "rotate(" + rotation + "deg) rotate(calc(" + (360 * particlesDirection) + "deg * 2)) translate(" + offsetX + (isLandscape() ? "vw" : "vh") + ", 0px) rotate(" + localRotation + "deg) scale(1)"
        },
        {
            offset: 0.8,
            opacity: "0"
        },
        {
            offset: 1,
            opacity: "0",
            transform: "rotate(" + rotation + "deg) rotate(" + endRotation + "deg) translate(0vw, 0px) rotate(" + localRotation + "deg) scale(0)"
        }
    ], { duration: duration })
    .addEventListener("finish", () => particle.remove());
    siteParticles.insertBefore(particle, null);
}

function isLandscape() {
    return window.innerWidth > window.innerHeight;
}
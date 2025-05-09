 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

    // ScrollTrigger.normalizeScroll(true); // enable
    ScrollTrigger.config({ ignoreMobileResize: true })
    ScrollTrigger.defaults({
        markers: false,  // Remove in production
        scrub: false,
        anticipatePin: 1,
    });

    gsap.fromTo(".overlay-names", {
        opacity: 0,
        y: "0%",
    }, {
        opacity: 1,
        y: "-20%",
        duration: 3
    })

    gsap.fromTo(".love", {
        opacity: 0,
        y: "-10%",
    }, {
        opacity: 1,
        y: "-40%",
        duration: 3,
        delay: 0.5
    })

    gsap.fromTo(".overlay-savethedate", {
        opacity: 0,
        y: "0%",
    }, {
        opacity: 1,
        y: "-20%",
        duration: 1,
        delay: 1
    })

    // gsap.fromTo(".extra-content", {
    //     opacity: 0.5,
    // }, {
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: ".extra-content",
    //         start: "top 80%",
    //         end: "bottom 50%",
    //         scrub: true
    //     }
    // })

    // gsap.fromTo(".timeline-overlay", {
    //     opacity: 0,
    // }, {
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: ".timeline-parallax-container",
    //         start: "top 80%",
    //         end: "bottom 50%",
    //         scrub: true
    //     }
    // })

    // gsap.fromTo(".event-details-container-wrapper", {
    //     opacity: 0,
    // }, {
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //         trigger: ".event-details-container-wrapper",
    //         start: "top 80%",
    //         end: "bottom 50%",
    //         scrub: true
    //     }
    // })

    // // Parallax effect for first section
    gsap.to(".background-image", {
    y: "-20%",
    ease: "none",
    scrollTrigger: {
        trigger: ".parallax-container",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
    });

    // Parallax effect for timeline
    gsap.to(".timeline-background", {
    y: "-20%",
    ease: "none",
    scrollTrigger: {
        trigger: ".timeline-parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
    });

    // Gallery Slide Show with fade effect
    const images = document.querySelectorAll('#galleryWrapper img');
    let current = 0;

    images[current].classList.add('active');

    function showNextImage() {
        const prev = current;
        current = (current + 1) % images.length;

        gsap.to(images[prev], { opacity: 0, duration: 1 });
        gsap.to(images[current], { opacity: 1, duration: 1 });
    }

    setInterval(showNextImage, 3000);

    const weddingDate = new Date("June 5, 2025 00:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown-timer").innerHTML = "The big day is here!";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

});

document.getElementById('google-map-button').addEventListener('click', () => {
    window.open(
        'https://www.google.com/maps/place/Devi+Murugan+A%2FC+Mahal/@11.9525746,79.2130693,17z/data=!3m1!4b1!4m6!3m5!1s0x3baca90839474d4d:0x114db62553dc4a53!8m2!3d11.9525746!4d79.2156442!16s%2Fg%2F11t8bzlhlv?entry=ttu',
        '_blank'
    );
});

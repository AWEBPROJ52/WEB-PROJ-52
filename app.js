// Reveal element effect
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
        entry.target.classList.add('show', 'show-2');
    } else {
        entry.target.classList.remove('show', 'show-2');
    }
});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Starting number between 200bil and 250bil
let liveNumber = Math.random() * (250000000000 - 200000000000) + 200000000000;
let frameCount = 0;

function updateLiveNumber() {
    if (frameCount % 20 === 0) { // Update every 3 frames
        liveNumber += Math.random() * 6000000; // Increase by a random amount 
        liveNumber -= Math.random() * 5000000; // Decrease by a random amount to give a realistic effect
        document.getElementById('money').textContent = formatNumber(liveNumber);
    }
    frameCount++;
    requestAnimationFrame(updateLiveNumber);
}

function formatNumber(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(number);
}

// Start animation loop
requestAnimationFrame(updateLiveNumber);

// THIS WHOLE SCRIPT DOESN'T WORK. It'll be worked on later.
/**/ 
const swiper = new Swiper('.card-wrapper', {
loop: true,

// Functionality for the buttons
navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
},


breakpoints: {
    0: {
        slidesPerView: 1
    },

    768: {
        slidesPerView: 2
    },

    1080: {
        slidesPerView: 3
    },
}
});
/* */

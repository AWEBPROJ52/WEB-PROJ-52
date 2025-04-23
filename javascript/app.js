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

// LIVE number
let liveNumber = 250303402962; // Starting number (250 billion)

function updateLiveNumber() {
    liveNumber += Math.random() * 5000000; // Increase by a random amount for a realistic effect
    // Element where the number will be shown.
    document.getElementById('money').textContent = formatNumber(liveNumber);
        
}

function formatNumber(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(number);
}

setInterval(updateLiveNumber, 1000); // Update every second

document.getElementById('money').textContent = formatNumber(liveNumber);

// THIS WHOLE SCRIPT DOESN'T WORK. It'll be worked on later. (i fixed it dont worry :) -A)
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

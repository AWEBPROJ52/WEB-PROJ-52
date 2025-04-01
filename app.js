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
let currentValue = 250000000000; // Starting value (1 billion)
let incrementRate = 10000000; 

function updateLiveNumber() {
    currentValue += (incrementRate / 60); // Increment per frame (assuming frame rate is 60)
    document.getElementById('money').textContent = formatNumber(currentValue); // Element in which number will appear
    requestAnimationFrame(updateLiveNumber);
}

function formatNumber(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(number);
}

updateLiveNumber(); // Start updating

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
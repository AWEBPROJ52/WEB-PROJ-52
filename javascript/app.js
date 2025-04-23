// Reveal element effect
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
        entry.target.classList.add('show', 'show-2');
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


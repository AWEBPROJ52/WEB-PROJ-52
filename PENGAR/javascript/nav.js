//i have to relate it back to c++ cause thats what i know best, A-

document.addEventListener('DOMContentLoaded', () => {  //like the main function in c++, waitng for the page to load
    const header = document.querySelector('header'); //select header
    
    // Check if header exists
    if (!header) {
        console.error('Header element not found');
        return 1; //like return 0, chose 1 to show error
    }

    // Set initial state
    header.style.transition = 'none'; //could add a trnasition here but it would be a bit laggy...
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const maxScroll = viewportHeight * 1.5;  // Point where we want solid backgrounnd

        if (scrollPosition >= viewportHeight) {
            // Calculate how far we've scrolled past the first screen
            const extraScroll = scrollPosition - viewportHeight;
            // Calculate what percentage of the next half viewport we've scrolled
            const percentage = extraScroll / (viewportHeight * 0.5);
            // Convert that to an opacity between 0.3 and 1
            const opacity = 0.3 + (Math.min(percentage, 1) * 0.7);
            
            header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        } else {
            // Keep initial transparency when in first viewport
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }
    });
});

// this took ages (:
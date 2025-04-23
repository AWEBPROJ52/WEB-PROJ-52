//i have to relate it back to c++ cause thats what i know best, A-

document.addEventListener('DOMContentLoaded', () => {  //like the main function in c++, waitng for the page to load
    const header = document.querySelector('header'); //select header

    // Check if header exists
    if (!header) {
        console.error('Header element not found');
        return 1; //like return 0, chose 1 to show error
    }

    // Set initial state



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
    // Initialize the Slick carousel
    $('.option-list').slick({
        slidesToShow: 4,        // Show 4 images at once
        slidesToScroll: 1,      // Scroll one image at a time
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 0,       // Set to 0 for continuous movement
        speed: 5000,            // Speed of the sliding animation (higher = slower)
        cssEase: 'linear',      // Linear animation for smooth scrolling
        infinite: true,         // Enable inifnite loop
        arrows: true,           // Show navigation arrows
        prevArrow: $('.swiper-prev'),  // Use existing prev arrow
        nextArrow: $('.swiper-next'),  // Use existing next arrow
        pauseOnHover: false,    // Don't pause on hover
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2  // Show fewer items on smaller screens
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1  // Show only one item on mobile
                }
            }
        ]
    });

});




// this took ages (:

// This JavaScript manages the 'active-menu-item' class for the sticky background and arrow.

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu_button');
    const mainOverlay = document.getElementById('main-overlay');
    const pageHeader = document.querySelector('header');

    const mainMenu = mainOverlay ? mainOverlay.querySelector('.main-menu-list') : null; // <--- Find the ul
    

    const submenus = mainOverlay ? mainOverlay.querySelectorAll('.overlay-submenu-content') : null;

    // Check if essential elements were found
    if (menuButton && mainOverlay && pageHeader) { // Keep this check

        // Simple submenu functionality
        if (mainMenu && submenus) { // Check if mainMenu and submenus were found
            // Function to hide all submenus
            const hideAllSubmenus = () => {
                submenus.forEach(submenu => {
                    submenu.classList.remove('active');
                });
            };
            
            // Hide all submenus initially
            hideAllSubmenus();
            
            // Add hover event listeners to menu items
            const menuItems = mainMenu.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    // Remove active class from all menu items
                    menuItems.forEach(mi => mi.classList.remove('active'));
                    // Add active class to current menu item
                    this.classList.add('active');
                    
                    // Hide all submenus
                    hideAllSubmenus();
                    
                    // Show the corresponding submenu
                    const submenuId = this.getAttribute('data-submenu');
                    if (submenuId) {
                        const targetSubmenu = document.getElementById(`${submenuId}-submenu`);
                        if (targetSubmenu) {
                            targetSubmenu.classList.add('active');
                        }
                    }
                });
            });

        } else {
            console.error("Main menu list (.main-menu-list) or submenus not found in the overlay.");
        }
        // --- End of mouseover listener ---


        // When the menu button is clicked (to TOGGLE the overlay)...
        menuButton.addEventListener('click', function () {
            const isVisible = mainOverlay.classList.contains('visible');

            if (isVisible) {
    // --- If the overlay IS visible, CLOSE it ---
    mainOverlay.classList.remove('visible'); // Hide the overlay
    document.body.classList.remove('menu-open'); // Remove 'menu-open' class from body

    // Re-enable scrolling
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    // Hide all submenus when closing the menu
    if (submenus) {
        submenus.forEach(submenu => {
            submenu.classList.remove('active');
        });
    }
    
    // Remove active class from all menu items
    if (mainMenu) {
        mainMenu.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
    }

    // Restore scroll-based header background
    window.dispatchEvent(new Event('scroll'));  

} else {
    // --- If the overlay is NOT visible, OPEN it ---
    mainOverlay.classList.add('visible'); // Show the overlay
    document.body.classList.add('menu-open'); // Add 'menu-open' class to body

    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Set header to solid white background
    if (pageHeader) {
        pageHeader.style.backgroundColor = 'rgba(255, 255, 255, 1)';  //TEMPORARY FIX, IT WORKED BEFORE BUT IDK WHAT WENT WRONG!!
    }
    // No need to set active state on open, it's managed by mouseover
}
        });


        // Close menu when pressing Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mainOverlay.classList.contains('visible')) {
                mainOverlay.classList.remove('visible');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';

                // Hide all submenus when closing the menu
                if (submenus) {
                    submenus.forEach(submenu => {
                        submenu.classList.remove('active');
                    });
                }
                
                // Remove active class from all menu items
                if (mainMenu) {
                    mainMenu.querySelectorAll('.menu-item').forEach(item => {
                        item.classList.remove('active');
                    });
                }
                // Restore scroll-based header background
                window.dispatchEvent(new Event('scroll'));
            }
        });

    } else {
        console.error("Overlay elements or header not found for overlay functionality. Check your HTML (id='main-overlay', class='menu_button', header tag) and JS selectors.");
    }
});

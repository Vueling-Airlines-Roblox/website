// Show the popup when the page is fully loaded
window.onload = function() {
    showPopup();
};

function showPopup() {
    document.getElementById('infoPopup').style.display = 'block'; // Show the popup
}

function closePopup() {
    document.getElementById('infoPopup').style.display = 'none'; // Hide the popup
}

// Scroll effect for Navbar
window.onscroll = function() {
    const header = document.querySelector('header');

    // Check if the page is scrolled more than 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Add class to change navbar style
    } else {
        header.classList.remove('scrolled'); // Remove class to revert to original style
    }
};


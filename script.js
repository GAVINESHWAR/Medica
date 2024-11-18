// nav bar
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// emergency section


// script.js (Add this below your existing code)
document.querySelector('.emergency-btn').addEventListener('click', () => {
    window.location.href = 'tel:+1234567890'; // Replace with your emergency contact number
});


// home section

// script.js (Add this below the existing code)
document.querySelector('.call-btn').addEventListener('click', () => {
    window.location.href = 'tel:+7993665211'; // Replace with your phone number
});

document.querySelector('.book-btn').addEventListener('click', () => {
    window.location.href = '#'; // Replace with your booking link
});

// Feedback

// scripts.js
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.querySelector('.reviews-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Scroll to the previous set of reviews
    prevButton.addEventListener('click', () => {
        reviewsContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    // Scroll to the next set of reviews
    nextButton.addEventListener('click', () => {
        reviewsContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
});


// Action section


function bookNow() {
  alert("Redirecting to the booking page...");
  // Add redirection logic here, e.g., window.location.href = "booking-page.html";
}

function callNow() {
  window.location.href = "tel:954678946";
}

// Footer

// Optional JS for social media interaction or tracking clicks
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        alert("You clicked on " + this.querySelector('i').classList[1]);
    });
});



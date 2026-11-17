
// SmartCare RTLS Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const formStatus = document.getElementById("formStatus");

        if (name && email && subject && message) {

            formStatus.textContent =
                "Thank you, " + name +
                "! Your enquiry form was completed successfully.";

            contactForm.reset();

        }

    });

}

// Mobile Hamburger Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = isOpen ? "×" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });

    });

}

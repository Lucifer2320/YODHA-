const scriptURL = "https://script.google.com/macros/s/AKfycbymbQIFNgv4tolkkMF7CTfVQiYPgaYHYnEaDaQUwHTWtGwiWr8-p1_mrcF5XKxMvEFw0w/exec"; // Replace this
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(response => alert("Message sent successfully!"))
        .catch(error => alert("Error sending message! Try again."));
    
    form.reset(); // Clears form after submission
});


    // Smooth Scrolling Fix (For Navigation Links)
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust this value if needed
                    behavior: "smooth"
                });
            }
        });
    });

    // Ensure WhatsApp & Instagram Buttons Are Visible
    const socialButtons = document.querySelectorAll(".cta-button");
    socialButtons.forEach(button => {
        button.style.display = "inline-block"; // Ensures buttons are visible
    });
});


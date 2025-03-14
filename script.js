document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const comments = document.getElementById("comments").value;

        if (name && phone) {
            const response = await fetch("https://script.google.com/macros/s/AKfycbymbQIFNgv4tolkkMF7CTfVQiYPgaYHYnEaDaQUwHTWtGwiWr8-p1_mrcF5XKxMvEFw0w/exec", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, comments })
            });

            if (response.ok) {
                alert(`Thank you, ${name}! We will contact you soon.`);
                form.reset();
            } else {
                alert("Error submitting form. Please try again.");
            }
        } else {
            alert("Please fill in all required fields.");
        }
    });
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


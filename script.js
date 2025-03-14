document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);
    var url = "https://script.google.com/macros/s/AKfycbzUXb_f7_VzcmDjEWo_1AOCfrOAB45JRW_CAQgWu0OBbPzfWt7Zw1v9GdCwRe6yu87y/exec"; // Replace this with your Web App URL

    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === "Success") {
            alert("Sent successfully!");
            document.getElementById("contactForm").reset();
        } else {
            alert("Error: " + data);
        }
    })
    .catch(error => {
        alert("Failed to send. Check console for details.");
        console.error(error);
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


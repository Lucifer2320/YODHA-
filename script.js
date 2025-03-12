document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const comments = document.getElementById("comments").value;

        if (!name || !phone) {
            alert("Please fill in all required fields.");
            return;
        }

        const sheetURL = "https://script.google.com/macros/s/AKfycbyekakSJ3fiX1AQ4_mFUUe5mxm2KGYAanWacdwmy_1YawxRsM3Y_bR9Yl8iLKszsawQtg/exec"; // Replace with your script URL 

        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("comments", comments);

        try {
            let response = await fetch(sheetURL, {
                method: "POST",
                body: formData,
            });

            let result = await response.text();
            if (result.includes("Success")) {
                alert(`Thank you, ${name}! We will contact you soon.`);
                form.reset();
            } else {
                alert("Something went wrong. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("There was a problem submitting the form.");
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


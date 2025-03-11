document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const comments = document.getElementById("comments").value;

        if (name && phone) {
            alert(`Thank you, ${name}! We will contact you soon.`);
            form.reset();
        } else {
            alert("Please fill in all required fields.");
        }
    });
});

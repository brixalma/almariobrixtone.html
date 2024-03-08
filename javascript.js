document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // For demonstration purposes, let's log the form data
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        // You can add further processing here, such as sending the form data to a server using AJAX
        // or displaying a confirmation message to the user
    });
});

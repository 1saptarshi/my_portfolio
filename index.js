document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send("service_hk17qt4", "template_9cxfjva", {
            from_name: name,
            from_email: email,
            message: message
        })
            .then(function (response) {
                alert('Message sent successfully!');
            }, function (error) {
                alert('Failed to send the message, please try again.');
            });
    });
});

document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic input validation (client-side)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    if (!isValidEmail(email)) {
        alert('Invalid email address.');
        return;
    }

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();

        const responseMessage = document.getElementById('responseMessage');
        const contactForm = document.getElementById('contactForm');

        if (result.success) {
            responseMessage.innerText = 'Thank you for your message!';
            contactForm.style.display = 'none'; // Hide the form
        } else {
            responseMessage.innerText = 'There was an error submitting your message. Please try again.';
        }
    } catch (error) {
        document.getElementById('responseMessage').innerText = 'There was an error submitting your message. Please try again.';
    }
});

function isValidEmail(email) {
    // Basic email validation, replace with a more robust regex if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

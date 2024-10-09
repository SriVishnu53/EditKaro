// Email Collector form submission
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/AKfycbyrKamRWYchtLfDQ53uKgJA54wJnZDriSuMtJVCnNkH9Tx0DuqfhZOkdCTAG9UUxCE/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Email submitted: " + email);
        } else {
            alert('There was an error submitting your email. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your email. Please try again.');
    });
});

// Contact Us form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    fetch('https://script.google.com/macros/s/AKfycbyrKamRWYchtLfDQ53uKgJA54wJnZDriSuMtJVCnNkH9Tx0DuqfhZOkdCTAG9UUxCE/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Thank you, ${name}! Your message has been submitted successfully.`);
            document.getElementById('contact-form').reset(); // Reset the form
        } else {
            alert('There was an error submitting your message. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your message. Please try again.');
    });
});

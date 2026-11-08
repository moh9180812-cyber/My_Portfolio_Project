const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", async function (event) {
event.preventDefault();


const formData = new FormData(contactForm);

formStatus.style = "padding: 10px 20px;border: 1px solid var(--primary-hover);text-align: center;min-width: 80%;color: white;border-radius: 10px;"

formStatus.textContent = "Sending message...";

const submitButton = contactForm.querySelector('input[type="submit"]');
submitButton.disabled = true;

try {
    const response = await fetch("https://formspree.io/f/xgopbqzn", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    });

    if (response.ok) {
        formStatus.textContent = "Your message has been sent successfully!";
        contactForm.reset();
    } else {
        formStatus.textContent = "Failed to send your message. Please try again.";
    }
} catch (error) {
    formStatus.textContent = "Something went wrong. Please check your connection.";
} finally {
    submitButton.disabled = false;
}


});



//  Suscribe Form
const subscribeForm = document.getElementById("subscribe-form");

subscribeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = subscribeForm.querySelector('input[name="email"]').value;

    const formData = new FormData();

    formData.append("email", email);
    formData.append("_subject", "New Newsletter Subscriber");

    try {
        const response = await fetch("https://formspree.io/f/xgopbqzn", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            alert("Thank you for subscribing!");
            subscribeForm.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }

    } catch (error) {
        alert("Network error. Please try again later.");
        console.error(error);
    }
});
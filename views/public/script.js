function showSuccessMessage(message) {
    const successMessageElement = document.getElementById('success-message');
    successMessageElement.textContent = message;
    successMessageElement.style.display = 'block';

    setTimeout(() => {
        successMessageElement.style.display = 'none';
    }, 5000);
}

function handleLogout() {
    fetch('/auth/logout', {
        method: 'GET',
        credentials: 'include',
    })
    .then((response) => {
        if (response.ok) {
            window.location.href = '/register.js';
        } else {
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

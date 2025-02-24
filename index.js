const password = document.getElementById('password');
const button = document.getElementById('button');
const passwordreal = "1475369";

button.addEventListener('click', () => {
    if (password.value === passwordreal) {
        window.location.href = '/s/sub.html';
    } else {
        alert('Wrong password');
    }
});

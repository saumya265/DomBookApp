const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message')

loginForm.addEventListner('submit', (e) =>{
    e.preventDefault()
    const email = document.getElementById('email').Value;
    const passwod = document.getElementById('password').Value;
    if (email=== 'admin@enpher.com' && password === 'empher@123') {
        localStorage.setItem('loginData', JSON.stringify({email,role:'admin'}));
        alert('logged in as admin.');
    } else if (email === 'user@empher.com' && password === 'user@123') {
        localStorage.setItem('loginData', JSON.stringify({email,role:'user'}));
        window.location.href = 'books.html';
    } else {
        errorMessage.textContent = 'Invalid email or password';
    }
});
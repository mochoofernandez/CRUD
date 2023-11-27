document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'MauricioFL' && password === '1111') {
            window.location.href ='index.html'
        } else {
            if(username === 'DiegoNavarro' && password === '1010'){
                window.location.href ='indext.html'
            }else{
                alert('Usuario o contraseña incorrectos');
            }
        }
    });
});

function submitForm() {
    alert('¡Inicio de sesión exitoso!');
}
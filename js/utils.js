const toogleForm = document.getElementById('toggleForm');
const loginForm = document.getElementById('login-form')
toogleForm.addEventListener('click', function () {
    // loginForm.classList.toogle('open');
    if (loginForm.style.display == 'none') {
        loginForm.style.display = 'block';

    }
    else {
        loginForm.style.display = 'none'
    }


})
// console.log('work');
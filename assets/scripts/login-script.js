const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
const btnLogin = document.querySelector('#btnLogin');
const btnSignup = document.querySelector('#buttonSign')

const expectedEmail = 'hasan@usu.ac.id';
const expectedPassword = 'TIusu2023';

loginFormElement.style.display = 'none'

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  loginFormElement.style.display = 'block'
  btnLogin.style.display = 'none';
  alert(`email: ${expectedEmail} and password: ${expectedPassword}`)
})

btnSignup.addEventListener('click', () => {
  alert(`This feature is not available. Please login with email: ${expectedEmail} and password: ${expectedPassword}`)
})

loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    //Mendapatkan input email dan password pengguna dari form.
    const email = inputEmailElement.value
    const password = inputPasswordElement.value 

    if(email == expectedEmail && password == expectedPassword) {
      goToHome();
    } else {
      showPopUp();
    }
});
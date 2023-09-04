const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
const btnLogin = document.querySelector('#btnLogin');

const expectedEmail = 'hasan@gmail.id';
const expectedPassword = 'TIusu2023';

loginFormElement.style.display = 'none'

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  loginFormElement.style.display = 'block'
  btnLogin.style.display = 'none';
  alert('email: hasan@gmail.id and password: TIusu2023')
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
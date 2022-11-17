const userName = document.getElementById('username');
const password = document.getElementById('password');
const form = document.querySelector("form");
const errorElement = document.getElementById('error');
const user1 = "Damian";
const user2 = "Alex";
const user3 = "Raul";
const pass1 = "123456";
const pass2 = "789012";
const pass3 = "ermahgerd";
const submitBtn = document.getElementById("log-in");
const params = new URLSearchParams(window.location.search);
const usernameValueDos = username.value.trim();
const userId = params.get(`userNameValueDos`);
console.log(userId, usernameValueDos);


const validateInputs = (e) => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    // if (usernameValue === '' || passwordValue === '') {
    //     alert("It seems that you did not fill the fields correctly. Please try again.");
    // } else if (usernameValue === user1 && passwordValue === pass1) {
    //     alert(`Welcome home, ${user1}! We're redirecting you to the home page...`)
    // } else if (usernameValue === user2 && passwordValue === pass2) {
    //     alert(`Welcome home, ${user2}! We're redirecting you to the home page...`)
    // } else if (usernameValue === user3 && passwordValue === pass3) {
    //     alert(`Welcome home, ${user3}! We're redirecting you to the home page...`)
    // } else {
    //     alert("Either your username or your password, is wrong. Please try again.")
    // }

    switch(usernameValue) {
        case '': alert("It seems that you did not fill the fields. Please try again.");
        break;
        case user1: passwordValue === pass1 ? alert(`Welcome home, ${user1}! We're redirecting you to the home page...`) : alert(`Your password is wrong, ${user1}. Please try again`);
        break;
        case user2: passwordValue === pass2 ? alert(`Welcome home, ${user2}! We're redirecting you to the home page...`) : alert(`Your password is wrong, ${user2}. Please try again`);
        break;
        case user3: passwordValue === pass3 ? alert(`Welcome home, ${user3}! We're redirecting you to the home page...`) : alert(`Your password is wrong, ${user3}. Please try again`);
        break;
        default: alert(`Your username is wrong. Please try again`)
    }
};

submitBtn.addEventListener('click', validateInputs);



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

const validateInputs = (e) => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '' || passwordValue === '') {
        alert("It seems that you did not fill the fields correctly. Please try again.");
        form.innerHTML =`<form action="login.html" method="get">
        <div class="login">
        <input type="text" autocomplete="username" placeholder="Email address or username" id="username">
        <input type="password" minlength="1" autocomplete="current-password" placeholder="Password" id="password">
    </div>
    <div class="getIn">
        <div class="remember-user">
            <input id='checkbox' type="checkbox">
            <label for="checkbox">Remember me</label>

        </div>
        <button class="btn btn-success mt-1" type="submit" id="log-in">
            <a href="">LOG IN</a>
        </button>
    </div>`
    } else if (usernameValue === user1 && passwordValue === pass1) {
        alert(`Welcome home, ${user1}! We're redirecting you to the home page...`)
    } else if (usernameValue === user2 && passwordValue === pass2) {
        alert(`Welcome home, ${user2}! We're redirecting you to the home page...`)
    } else if (usernameValue === user3 && passwordValue === pass3) {
        alert(`Welcome home, ${user3}! We're redirecting you to the home page...`)
    } else {
        alert("Either your username or your password, is wrong. Please try again.")
        form.innerHTML =`<form action="login.html" method="get">
        <div class="login">
        <input type="text" autocomplete="username" placeholder="Email address or username" id="username">
        <input type="password" minlength="1" autocomplete="current-password" placeholder="Password" id="password">
    </div>
    <div class="getIn">
        <div class="remember-user">
            <input id='checkbox' type="checkbox">
            <label for="checkbox">Remember me</label>

        </div>
        <button class="btn btn-success mt-1" type="submit" id="log-in">
            <a href="">LOG IN</a>
        </button>
    </div>`
    }

    // switch(usernameValue) {
    //     case '': alert("It seems that you did not fill the fields. Please try again.");
    //     break;
    //     case user1: passwordValue === pass1 ? alert(`Welcome home, ${user1}! We're redirecting you to the home page...`) : alert(`Your password is wrong, ${user1}. Please try again`);
    //     break;
    //     case user2: passwordValue === pass2 ? alert(`Welcome home, ${user2}! We're redirecting you to the home page...`) : alert(`Your password is wrong, ${user2}. Please try again`);
    //     break;
    //     case user3: passwordValue === pass3 ? alert(`Welcome home, ${user3}! We're redirecting you to the home page...`) : alert(`Your password is wrong, ${user3}. Please try again`);
    //     break;
    //     default: alert(`Your username is wrong. Please try again`)
    // }
};

submitBtn.addEventListener('click', validateInputs);




























// form.addEventListener('submit', (e) => {
    // if ((userName.value === user1) || (userName.value === user2) || (userName.value === user3)) {
    //     switch (userName) {
    //         case user1: password.value === pass1 ? alert("redirecting you to the home page...") : alert("Wrong username or password! Please try again.")
    //         break;
    //         case user2: password.value === pass2 ? alert("redirecting you to the home page...") : alert("Wrong username or password! Please try again.")
    //         break;
    //         case user3: password.value === pass3 ? alert("redirecting you to the home page...") : alert("Wrong username or password! Please try again.")
    //         break;
    //         default:     console.log(`Sorry, we are out of.`);
    //     }
    //     console.log(userName.value, password.value);
    // } else {
    //     console.log(userName.value);
    //     alert("Your Username is not in our database! Would you like to sign up for Spotify?")
    // }
//     console.log(userName.value);
// })



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//   let messages = []
//   if (userName.value === '' || userName.value == null) {
//     messages.push('Name is required')
//     console.log(userName, messages);
//   }

//   if (password.value.length <= 6) {
//     messages.push('Password must be longer than 6 characters')
//   }

//   if (password.value.length >= 20) {
//     messages.push('Password must be less than 20 characters')
//   }

//   if (password.value === 'password') {
//     messages.push('Password cannot be password')
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//     console.log(errorElement);
//   }
// })
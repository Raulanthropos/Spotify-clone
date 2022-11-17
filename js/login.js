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

form.addEventListener('submit', (e) => {
    if ((userName.value === user1) || (userName.value === user2) || (userName.value === user3)) {
        switch (userName) {
            case user1: password.value === pass1 ? alert("redirecting you to the home page...") : alert("Wrong username or password! Please try again.")
            break;
            case user2: password.value === pass2 ? alert("redirecting you to the home page...") : alert("Wrong username or password! Please try again.")
            break;
            case user3: password.value === pass3 ? alert("redirecting you to the home page...") : alert("Wrong username or password! Please try again.")
            break;
            default:     console.log(`Sorry, we are out of.`);
        }
        console.log(userName.value, password.value);
    } else {
        console.log(userName.value);
        // alert("Your Username is not in our database! Would you like to sign up for Spotify?")
    }
})



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
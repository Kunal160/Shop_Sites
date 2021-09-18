/*login data validate*/
const loginData= document.getElementById("login-form");
/*function handleForm(event) { event.preventDefault(); }
loginData.addEventListener('submit', handleForm); */

const loginButton = document.getElementById("login-button");
loginButton.addEventListener('click', checkLogin);
function checkLogin() {
    const idName = loginData.loginname.value;
    const idPassword = loginData.loginpassword.value;
    if((idName === "alias160") && (idPassword === "alias160")) {
        window.location = "index.html";
        alert("hello");             
    } else {
        alert("Username/Password is incorrect");
    }
   
   // return true;
}
/*Database*/
//constructor
console.log(5+6);

/*login data validate*/
const loginData= document.getElementById("login-form");
const loginButton = document.getElementById("login-button");

/*eventlistner*/
loginButton.addEventListener("click", checkLogin);

function checkLogin() {
    const idName = loginData.loginname.value;
    const idPassword = loginData.loginpassword.value;
    
    if((idName === "alias160") && (idPassword === "alias160")) {
        window.location = "123.html/";
        console.log();
        alert("hello");
        return false;      
    } else {
        alert("Username/Password is incorrect");
    }
}
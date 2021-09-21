/*script */

//signup
/*const pDetails = document.getElementById("signup-form");

//signup button
const signupButton = document.getElementById("signup-button");    

//prevent reload
function handleSignup(e) { e.preventDefault(); }
pDetails.addEventListener('submit', handleSignup);

//User Gender
const genderSelect = pDetails.gender;
function findGender() {
    var userGender;
    let g = 0;
    if(genderSelect[0]) {
        alert(genderSelect[0].value);
    } else {
        alert(genderSelect[1].value);
    }
}

//password & confirm password
var outkey;
var checkPass = function() {
    const key1 =document.getElementById("user-pass").value;
    const key2 = document.getElementById("con-pass").value;

    if( key1 == key2 ) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "Match success";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Not Matching";
    }
    outkey = key1;
}

signupButton.addEventListener('click', checkSignup);

function checkSignup() {
    const signupfirst = document.getElementById("firstname").value;
    const signuplast = document.getElementById("lastname").value;
    const userName = pDetails.username.value; 
    localStorage.setItem("nameId", userName);
    localStorage.setItem("passId", outkey);
    alert(localStorage.getItem("nameId") + " " + localStorage.getItem("passId"));
}*/

  

/*let stored_users = JSON.parse(localStorage.getItem('usersDetail'));
    if(stored_users) {
        stores_users.push({
            userFirstname : firstName,
            userLastname : lastName, 
            userGenderType : userGender,
            userName : userId, 
            userPassword : userKey            
    });
}*/
    





/*login data validate*/
const loginData= document.getElementById("login-form");
function handleForm(event) { event.preventDefault(); }
loginData.addEventListener('submit', handleForm); 

const loginButton = document.getElementById("login-button");
loginButton.addEventListener('click', checkLogin);

function checkLogin() {
    const idName = loginData.loginname.value;
    const idPassword = loginData.loginpassword.value;
    var nameId = localStorage.getItem("nameId");
    var passId = localStorage.getItem("passId");
    if((idName == nameId) && (idPassword == passId)) {
        window.location = "index.html";
        alert("hello");
        return false;            
    } else {
        alert("Username/Password is incorrect");
    }
}
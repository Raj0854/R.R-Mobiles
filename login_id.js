function success(){
    user_name = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    user = "Raj"
    mail = "admin@raj.com"
    passcode= "raj@123"
    if(user_name==user && email==mail && password==passcode){
        alert("Login successful. please proceed ahead by clicking ok!");
        window.open("home.html");
    }else{
        alert("Login failed please enter correct credentials");
    }
}

function reset(){
    user_name = document.getElementById("username").value="";
    email = document.getElementById("email").value="";
    password = document.getElementById("password").value ="";
}

function togglePasswordVisibility(){
     passwordField = document.getElementById("password");
     toggleIcon = document.getElementById("toggleIcon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("bi-eye-slash");
        toggleIcon.classList.add("bi-eye");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("bi-eye");
        toggleIcon.classList.add("bi-eye-slash");
    }
}
function sendResetLink(){
    email = document.getElementById("email").value;
    mobile = document.getElementById("mobile").value;
    alert("A password reset link has been sent to your email: " + email + " and mobile number: " + mobile);
    window.open("index.html");
}
function submit(){
   user_name = document.getElementById("username").value;
   email = document.getElementById("email").value;
   password = document.getElementById("password").value;
    alert("Registration successful! Welcome, " + user_name + ". You can now log in with your credentials.");
    window.open("index.html");
    

}

const signUpButton = document.getElementById('signUp')//link
const signInButton = document.getElementById('signIn')
const signUpForm = document.getElementById('signUpForm')//form
const signInForm = document.getElementById('signInForm')

signUpButton.addEventListener('click', function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";

})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none"; 
})
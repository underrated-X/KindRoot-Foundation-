const contactForm= document.getElementById('contactForm').addEventListener( "submit", function (e){
    (e).preventDefault();
    let userName = document.getElementById('userName').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let email = document.getElementById('email').value;
    let comment = document.getElementById('comment').value;
})
if (userName === '' || phoneNumber === '' || email === '' || comment === ' '){
    alert(" please fill all information");
}else{
    alert(" Thanks for your response, we will be sure to respond to you!")
}
// const { response } = require("express");

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const provider = document.querySelector('#is-provider-signup')
    const isProvider = provider.checked;
    console.log(isProvider);

    let zipcode = document.querySelector('#zipcde-signup')


    const claimer = document.querySelector('#disclaimer-signup')
    const disclaimer = claimer.checked;
    console.log(disclaimer);

    const education = document.querySelector('#education-signup').value.trim();
    let educationId
    const geteducationId = function() {
      if(education === "high-school"){
        educationId = 6
        return;
      }else if (education ==="some-college"){
        educationId = 7
        return;
      }else if(education === "professional-school"){
        educationId = 8
      }else if (education ==="associate"){
        educationId = 9
        return;
      }else if(education ==="bachelors"){
        educationId = 2
        return;
      }else if(education ==="masters"){
        educationId = 3
        return;
      }else if(education ==="doctorate"){
        educationId = 4
        return;
      }else{
        educationId = 10
      }
    }
    geteducationId()

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    console.log(name, email, password,isProvider, zipcode, disclaimer, educationId)

    if (name && email && password && isProvider ) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ name, email, password, isProvider}),
            headers: { 'Content-Type': 'application/json' },
            });
            console.log("hahhaa")
            if (response.ok) {
                document.location.replace('/dashboard');
                console.log("hello", response)
            } else {
                toastr.success("You have successfully signed up to Pro Bono Pals!", "Success!")
            }
    }
};

document 
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler)
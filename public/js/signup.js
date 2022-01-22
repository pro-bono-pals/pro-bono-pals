const { response } = require("express");

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const isProvider = document.querySelector('#is-provider-signup').value.trim();
    const zipcode = document.querySelector('#zipcde-signup').value.trim;
    const disclaimer = document.querySelector('#disclaimer-signup').value.trim();
    const education = document.querySelector('#education-signup').value.trim();

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


    if (name && email && password) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headres: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/profile');
            } else {
                toastr.success("You have successfully signed up to Pro Bono Pals!", "Success!")
            }
    }
};

document 
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler)
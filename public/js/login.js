// const { response } = require("express");

const loginFormHandler = async (event) => {
    event.preventDefault();

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": true,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password)
        {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
    });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                toastr.success("You have successfully logged in!", "SUCCESS!")
                // alert(response.statusText);
            }
        }

        
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
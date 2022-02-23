const profilesignupFormHandler = async(event) =>{
    event.preventDefault();

    const zipcode = document.querySelector('#zipcode').value.trim()
    const user_id = document.querySelector('#user_id').innerHTML

    const claimer = document.querySelector('#disclaimer-signup')
    const disclaimer = claimer.checked;

    const education = document.querySelector('#education-signup').value.trim();
    let education_id
    const geteducationId = function() {
      if(education === "high-school"){
        education_id = 6
        return;
      }else if (education ==="some-college"){
        education_id = 7
        return;
      }else if(education === "professional-school"){
        education_id = 8
      }else if (education ==="associate"){
        education_id = 9
        return;
      }else if(education ==="bachelors"){
        education_id = 2
        return;
      }else if(education ==="masters"){
        education_id = 3
        return;
      }else if(education ==="doctorate"){
        education_id = 4
        return;
      }else{
        education_id = 10
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


    if(user_id && education_id && disclaimer && zipcode) {
        const response = await fetch('/api/profile/',{
            method:'POST',
            body:JSON.stringify({user_id, education_id,disclaimer,zipcode}),
            headers:{'Content-Type':'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
            toastr.success("You have successfully signed up to Pro Bono Pals!", "Success!")

        } else{
          console.log(err);
          alert('Error unable to signup')
        }
    }
};
document 
    .querySelector('.signup-form')
    .addEventListener('submit', profilesignupFormHandler)
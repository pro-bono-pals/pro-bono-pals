
const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const provider = document.querySelector('#is-provider-signup')
    const isProvider = provider.checked;


    if (name && email && password || isProvider) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ name, email, password, isProvider}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/profilesignup');
        
        } else {console.log("error")}
    }

};

document 
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler)
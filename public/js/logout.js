const logoutBtn= document.querySelector('#logout-btn');

const logout = async () => {

    console.log("you have signed out")
 //note: will need to make a route to sign out
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };


logoutBtn.addEventListener('click', logout)